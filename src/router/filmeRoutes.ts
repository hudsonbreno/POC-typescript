import { Router } from "express"
import { filmeController } from "@/controller/filmeController"

const filmeRouter = Router()

filmeRouter.get("/filme",filmeController.getFilme)

export default filmeRouter