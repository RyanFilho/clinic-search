import { Express, Router } from 'express';
import { makeHomeController } from '../factories/make-home-controller';
import { adaptRoute } from '../adapters/express-route-adapter';

export function setupRoutes(app: Express): void {
  const router = Router();
  app.use('/api', router);
  createHomeRoute(router);
}

function createHomeRoute(router: Router) {
  router.get('', adaptRoute(makeHomeController()));
}