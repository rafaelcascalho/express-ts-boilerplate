import App from './app'
import routes from './app/app.routes'
import { logger } from './utils/logger'
import validateEnv from './utils/validateEnv'

validateEnv()

function startServer() {
  try {
    const app = new App(routes)
    app.listen()
  } catch (error) {
    logger.error(error)
  }
}

startServer()
