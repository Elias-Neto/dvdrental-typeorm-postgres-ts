import { Film } from "../../database/entities/film.entity"

import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO"
import { CreateFilmDTO } from "../../dtos/CreateFilmDTO"

import { IFilmService } from "./IFilmService"
import { IFilmRepository } from "../../database/repositorys/IFilmRepository"

export class FilmService implements IFilmService {
  private readonly filmRepository: IFilmRepository

  constructor(filmRepository: IFilmRepository) {
    this.filmRepository = filmRepository
  }

  async findAll(): Promise<Film[]> {
    return this.filmRepository.findAll()
  }

  async findById(film_id: number): Promise<Film> {
    return this.filmRepository.findById(film_id)
  }

  async create(film: CreateFilmDTO): Promise<Film> {
    return this.filmRepository.create(film)
  }

  async update(film_id: number, film: UpdateFilmDTO): Promise<Film> {
    return this.filmRepository.update(film_id, film)
  }

  async delete(film_id: number): Promise<Film> {
    return this.filmRepository.delete(film_id)
  }
}
