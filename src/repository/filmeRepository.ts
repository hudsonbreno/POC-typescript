import { db } from "@/database/databaseConnection"
import { Filme } from "@/protocols"

async function getFilmeById(id: number): Promise<Filme>{
    const filme = await db.query<Filme>(`SELECT * FROM filme WHERE id=$1;`, [id])
    return filme.rows[0]
}

export const filmeRepository = { getFilmeById }