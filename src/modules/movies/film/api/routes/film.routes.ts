import express from "express"

import { FilmController } from "../controllers/FilmController"
import { FilmService } from "../../business/services/FilmService"
import { FilmRepository } from "../../database/repositorys/FilmRepository"

const router = express.Router()
const filmRepository = new FilmRepository()
const filmService = new FilmService(filmRepository)
const filmController = new FilmController(filmService)

router.get("/", (req, res) => filmController.findAll(req, res))
router.get("/:film_id", (req, res) => filmController.findById(req, res))
router.post("/", (req, res) => filmController.create(req, res))
router.put("/:film_id", (req, res) => filmController.update(req, res))
router.delete("/:film_id", (req, res) => filmController.delete(req, res))

export default router
