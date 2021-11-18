import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import WhoAmIRouter from './components/whoami/whoami.router';

async function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(morgan(config.app.isProd ? 'common' : 'dev'));

  app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome' });
  });

  app.use('/api', WhoAmIRouter);

  app.listen(config.app.port, () => {
    console.log('⚡️[server]: Server is running');
  });
}

bootstrap();
