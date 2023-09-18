import { filmeRepository } from "@/repository/filmeRepository" 

async function getFilme(id) {
    const filme = await filmeRepository.getFilmeById(id)
}

export const filmeService = { getFilme }