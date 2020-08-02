import { IUsersRepository } from "../IUserRepository";
import { User } from "../../entities/User";

export class PostgresUserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  // vai salvar no banco de dados.
  // como eu não quero me conectar com um banco de dados, vou salvar os usuarios em uma variavel privada.
  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}