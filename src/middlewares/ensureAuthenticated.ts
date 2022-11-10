import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    //Receber o token
    const authToken = request.headers.authorization

    //Validar se token esta preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    //Validar se token é válido
    try {
        const { sub } = verify(token, "b6ae01d47048e1dbe297ed31fe035966"
        ) as IPayLoad;

        //Recuperar informações do usuário
        request.user_id = sub

        return next();
    } catch (err) {
        return response.status(401).end();
    }



}
