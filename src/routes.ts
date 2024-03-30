import { Router } from "express";
import { UserController } from "./controllers/UserController";


const router = Router();

const findUsers = new UserController();

router.get("/user", findUsers.getAll);
router.post("/user", findUsers.createUser);
router.put("/user", findUsers.updateUser);
router.delete("/user", findUsers.removeUser);

export { router };