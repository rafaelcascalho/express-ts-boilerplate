import request from 'supertest'

import App from '../../src/app'
import routes from '../../src/app/app.routes'
import { HTTP_STATUS_CODE as statusCode } from '../../src/utils/constants/httpStatusCode'

const route = `/api/v1/health`

describe(`GET ${route}`, () => {
  let app
  let server

  beforeAll(() => {
    app = new App(routes)
    server = app.getServer()
  })

  context('given the service is up', () => {
    it('should return success', async () => {
      const expectedBody = { status: 'UP' }

      const response = await request(server).get(route)

      expect(response.status).toEqual(statusCode.SUCCESS)
      expect(response.body).toMatchObject(expectedBody)
    })
  })
})
