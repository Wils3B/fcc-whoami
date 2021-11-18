import { Router } from 'express';
import WhoAmIController from './whoami.controller';

const WhoAmIRouter = Router();

WhoAmIRouter.get('/WhoAmI', WhoAmIController.info);

export default WhoAmIRouter;
