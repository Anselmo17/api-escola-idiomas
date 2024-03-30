import { Request, Response } from "express";
import { UserRepository } from "../repositorys/UserRepository";


const dependecy = {
    userRepository: new UserRepository()
}

export class UserController {


    async getAll(request: Request, response: Response,) {
        const users = await dependecy.userRepository.getAll();
        return response.json(users);
    }

    async createUser(request: Request, response: Response) {
        const user = await dependecy.userRepository.createUser(request.body);
        return response.json(user);
    }

    async updateUser(request: Request, response: Response) {
        try {
            const user = await dependecy.userRepository.updateUser(request.body);
            if (!user) {
                return response.status(404);
            }
            return response.json(user);
        } catch (error) {
            return response.status(400).json({ status: '400', message: error });
        }
    }

    async removeUser(request: Request, response: Response) {
        try {
            const user = await dependecy.userRepository.removeId(request.body);
            return response.json(user);
        } catch (error:any) {
            const message = error.code === 'P2025'? error?.meta?.cause : 'Houve um erro';
            const status = error.code === 'P2025'? 400 : 500;
            return response.status(status).json({ status , message });
        }
    }
}