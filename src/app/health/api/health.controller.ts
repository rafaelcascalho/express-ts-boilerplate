import { NextFunction, Request, Response } from 'express'
import { HTTP_STATUS_CODE as statusCode } from '../../../utils/constants/httpStatusCode'
// import { span } from '../../utils/tracer'

class HealthController {
  public status = (req: Request, res: Response, next: NextFunction) => {
    try {
      // span(req, statusCode.SUCCESS, 'UP')
      return res.json({ status: 'UP' })
    } catch (error) {
      next(error)
    }
  }
}

export default HealthController
