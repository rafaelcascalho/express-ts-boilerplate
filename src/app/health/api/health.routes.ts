import { Router } from 'express'
import HealthController from './health.controller'
import { Route } from '../../app.interfaces'
import { API_VERSION } from '../../../config'

class HealthRoutes implements Route {
  public path = `/api/${API_VERSION}/health`
  public router = Router()
  public healthController = new HealthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.healthController.status)
  }
}

export default HealthRoutes
