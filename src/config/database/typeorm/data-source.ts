import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "dvdrental2",
  synchronize: true,
  logging: false,
  entities: ["src/modules/**/entities/*.entity.ts"],
  subscribers: [],
  migrations: [],
})
