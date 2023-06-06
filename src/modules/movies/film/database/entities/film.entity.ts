import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  film_id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  releaseYear: number

  @Column()
  language_id: number

  @Column()
  rental_duration: number

  @Column("float")
  rental_rate: number

  @Column()
  length: number

  @Column("float")
  replacement_cost: number

  @Column()
  rating: string

  @Column()
  last_update: Date

  @Column()
  special_features: string

  @Column()
  fulltext: string
}
