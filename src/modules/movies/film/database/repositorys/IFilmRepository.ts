import { Film } from "../entities/film.entity"

import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO"
import { CreateFilmDTO } from "../../dtos/CreateFilmDTO"

export interface IFilmRepository {
  findAll(): Promise<Film[]>
  findById(film_id: number): Promise<Film>
  create(film: CreateFilmDTO): Promise<Film>
  update(film_id: number, film: UpdateFilmDTO): Promise<Film>
  delete(film_id: number): Promise<Film>
}
