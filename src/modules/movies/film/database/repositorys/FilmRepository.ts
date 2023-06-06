import { Repository } from "typeorm"

import { Film } from "../entities/film.entity"
import { IFilmRepository } from "./IFilmRepository"
import { CreateFilmDTO } from "../../dtos/CreateFilmDTO"
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO"
import { AppDataSource } from "@config/database/typeorm/data-source"

export class FilmRepository implements IFilmRepository {
  private readonly typeormRepository: Repository<Film>

  constructor() {
    this.typeormRepository = AppDataSource.getRepository(Film)
  }

  async findAll(): Promise<Film[]> {
    return await this.typeormRepository.find()
  }

  async findById(film_id: number): Promise<Film> {
    return await this.typeormRepository.findOneBy({ film_id })
  }

  async create(data: CreateFilmDTO): Promise<Film> {
    const film = this.typeormRepository.create(data)
    return await this.typeormRepository.save(film)
  }

  async update(film_id: number, film: UpdateFilmDTO): Promise<Film> {
    await this.typeormRepository.update(film_id, film)
    return await this.findById(film_id)
  }

  async delete(film_id: number): Promise<Film> {
    await this.typeormRepository.delete(film_id)
    return await this.findById(film_id)
  }
}
