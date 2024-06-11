import express, {Router} from "express";
import { addUser, getOneUser, getUser, editUser, deleteUser } from "../controller/user-controller.js";



const router = express.Router();

router.post("/add", addUser)
router.get("/all", getUser)
router.get("/:id", getOneUser)
router.post("/:id", editUser)
router.delete("/:id", deleteUser)

export default router;