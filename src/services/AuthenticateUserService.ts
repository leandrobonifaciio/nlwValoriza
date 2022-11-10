import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories";



interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories)

        //Verificar se email existe
        const user = await userRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password Incorrect!")
        }

        //Verificar se senha esta correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password Incorrect!")
        }


        //Gerar Token
        const token = sign({
            email: user.email
        }, "b6ae01d47048e1dbe297ed31fe035966", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;

    }
}

export { AuthenticateUserService }