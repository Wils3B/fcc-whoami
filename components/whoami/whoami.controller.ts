import { Request, Response } from 'express';

const WhoAmIController = {
  info(req: Request, res: Response) {
    res.json({
      ipaddress: req.ip,
      language: req.headers['accept-language'],
      software: req.headers['user-agent'],
    });
  },
};

export default WhoAmIController;
