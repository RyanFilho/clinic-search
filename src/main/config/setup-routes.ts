import { Express, Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeHomeController } from '../factories/make-home-controller';
import { makeClinicSearchController } from '../factories/make-clinic-search-controller';

export function setupRoutes(app: Express): void {
  const router = Router();
  app.use('/api', router);
  createHomeRoute(router);
  createSearchRoute(router);
}

function createHomeRoute(router: Router) {
  router.get('', adaptRoute(makeHomeController()));
}

function createSearchRoute(router: Router) {
  router.get('/clinic-search', adaptRoute(makeClinicSearchController()));
}