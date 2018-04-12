import {Router, Request, Response, NextFunction} from 'express';
import {ErrorRoutes} from "./errors";

export const Routes = Router()

    .get('/', (req: Request, res: Response, next: NextFunction) => {
        res.json('index');
    })

    .use(ErrorRoutes);
