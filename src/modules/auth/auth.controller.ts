import { Router } from "express";
import authServise from "./auth.servise";
const router = Router();
router.post('/register', authServise.register);

router.post('/login', authServise.login);

export default router;