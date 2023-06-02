import { HomeController } from '@/presentation/controllers/home-controller';
import { Controller } from '@/presentation/controllers/ports/controller';

export const makeHomeController = (): Controller => {  
  const createHomeController = new HomeController();
  return createHomeController;
};
