import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'
import compression from 'compression'

import { Route as Routes } from './app/app.interfaces'
import errorMiddleware from './app/middlewares/error.middleware'
import { logger, stream } from './utils/logger'
import { createConnection } from 'typeorm'
import { dbConnection } from './infra/database/orm'
import { PORT, NODE_ENV, ORIGIN_DOMAIN } from './config'

class App {
  private server: express.Application
  private port: string | number
  private env: string
  public routes: Routes[]

  constructor(routes: Routes[]) {
    this.server = express()
    this.port = PORT || 3000
    this.env = NODE_ENV || 'development'
    this.routes = routes

    this.addMiddlewares()
    this.connectToDatabase()
    this.addRoutes(routes)
    this.addErrorHandler()
  }

  public listen() {
    this.server.listen(this.port, () => {
      logger.info(`>------------<`)
      logger.info(`> env: ${this.env} `)
      logger.info(`> server listening at port ${this.port}...`)
      logger.info(`>------------<`)
    })
  }

  public getServer() {
    return this.server
  }

  private async connectToDatabase() {
    if (this.env === 'test') return

    await createConnection(dbConnection)
  }

  private addMiddlewares() {
    if (this.env === 'production') {
      this.server.use(morgan('combined', { stream }))
      this.server.use(cors({ origin: ORIGIN_DOMAIN, credentials: true }))
    } else {
      this.server.use(morgan('dev', { stream }))
      this.server.use(cors({ origin: true, credentials: true }))
    }

    this.server.use(hpp())
    this.server.use(helmet())
    this.server.use(compression())
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
  }

  private addRoutes(routes: Routes[]) {
    routes.forEach(route => this.server.use('/', route.router))
  }

  private addErrorHandler() {
    this.server.use(errorMiddleware)
  }
}

export default App
