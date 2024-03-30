import { prismaClient } from "../database/prismaClient";
import { User } from "../models/User.model";
import { DateFormat } from "../utils/DateUtil";

export class UserRepository {

    private util: DateFormat;

    constructor() {
        this.util = new DateFormat();
    }

    public async getAll() {
        const users = await prismaClient.user.findMany();
        const count = await prismaClient.user.count();
        return { totalUsers: count, users };
    }


    public async createUser(user: User) {
        const { name, email } = user;
        const result = await prismaClient.user.create({
            data: {
                name,
                email,
                created: this.util.formatDate(new Date()),
                updated: ''
            }
        });
        return result;
    }


    public async updateUser(user: User) {
        const { id } = user;
        const result = await prismaClient.user.update({
            where: {
                id
            },
            data: {
                ...user,
                updated: this.util.formatDate(new Date())
            },
        });
        return result;
    }


    public async removeId(user: User) {
        const { id } = user;
        const result = await prismaClient.user.delete({
            where: { id },
        });
        return result;
    }
};
