import { NextFunction, Request, Response } from 'express';
const start=  Date.now();

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    try {       
        const finish = Date.now();
        const diffTime = Math.abs(finish - start);
   
        return res.status(200).json({timeStamp:diffTime});
    } catch (e:any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export default { serverHealthCheck };