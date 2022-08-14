import { Express } from "express"
import swaggerUi from "swagger-ui-express"

import swaggerDocument from './openapi.json'



export const setupDocs = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
}