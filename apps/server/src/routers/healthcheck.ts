import * as controller from '../datasources/controllers'
import { Router } from 'express';
const healthCheckRouter = Router();

healthCheckRouter.route('/healthcheck')
    .get(controller.healthCheck);

export default healthCheckRouter;
