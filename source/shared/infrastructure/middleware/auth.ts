import { verify } from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;
    
    if (!authorization){
        return res.status(401).send("No authorization token provided");
    }
    
    const token = authorization.split(' ')[1];

    verify(token, process.env.SECRET_KEY, (err, ) => {
        if (err) {
            return res.status(401).send("Invalid token");
        }
    });

    next();


}