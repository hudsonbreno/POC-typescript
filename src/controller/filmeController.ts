import { filmeService } from "@/services/filmeService"
import { Request, Response } from "express"

async function getFilme(req:Request, res: Response) {
    const id = req.params
    const filme = await filmeService.getFilme(id);
    res.send(filme)
}

export const filmeController = { getFilme }