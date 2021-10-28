import { NextFunction, Request, Response } from 'express';
import config from '../../config/config';

class PostController {
   public welcome = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({messge: 'hello user!'})
   } 
}
export  {PostController}