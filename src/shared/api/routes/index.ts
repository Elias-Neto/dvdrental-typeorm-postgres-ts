import { Router } from "express"

import filmRouter from "@modules/movies/film/api/routes/film.routes"

export const router = Router()

router.use("/films", filmRouter)
