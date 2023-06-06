import { Request, Response } from "express"

import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO"
import { CreateFilmDTO } from "../../dtos/CreateFilmDTO"

import { IFilmService } from "../../business/services/IFilmService"
import { IFilmController } from "./IFilmController"

export class FilmController implements IFilmController {
  private readonly filmService: IFilmService

  constructor(filmService: IFilmService) {
    this.filmService = filmService
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const films = await this.filmService.findAll()
    return res.json(films)
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { film_id } = req.params
    const film = await this.filmService.findById(Number(film_id))
    return res.json(film)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const film = await this.filmService.create(req.body as CreateFilmDTO)
    return res.json(film)
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { film_id } = req.params
    const film = await this.filmService.update(
      Number(film_id),
      req.body as UpdateFilmDTO
    )
    return res.json({ message: "Record updated successfully" })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { film_id } = req.params
    const film = await this.filmService.delete(Number(film_id))
    return res.json({ message: "Record deleted successfully" })
  }
}
