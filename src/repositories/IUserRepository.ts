import { User } from "../entities/User";

export interface IUsersRepository {
  // metodos que vão existir dentro do repositorio:
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}