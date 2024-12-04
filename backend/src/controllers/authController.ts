import {Request, Response} from "express";


export default class AuthController {
    async userLogin(req: Request, res: Response) {
        try {
            // Sua lógica de login
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message});
            } else {
                res.status(400).json({error: "Erro desconhecido"});
            }
        }
    };

    async userRegister(req: Request, res: Response) {
        try {
            // Sua lógica de registro
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({error: error.message});
            } else {
                res.status(400).json({error: "Erro desconhecido"});
            }
        }
    }
}
