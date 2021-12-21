import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from '../constants/index';

const checkAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const bearerHeader: string | undefined = req.headers["authorization"];
    if (bearerHeader) {
        const bearer: string[] = bearerHeader.split(" ");
        const bearerToken: string = bearer[1];
        if (bearerToken == null) {
            res.sendStatus(401);
        }
        jwt.verify(bearerToken, SECRET as string, (err, user) => {
            if (err) return res.sendStatus(403);
        });

    } else {
        res.sendStatus(401);
    }
    next();
};

export default checkAuth
