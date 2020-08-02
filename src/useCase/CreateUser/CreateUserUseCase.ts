// Responsabilidade: Criar usuario.

import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';
import { IMailProvider } from "../../providers/IMailProvider";

// CreateUserUseCase: Single responsibility principle. Essa classe tem responsabilidade APENAS para criar o usuario.
export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
    // usersRepository: Liskov substitution principle. 
    // mailProvider: Liskov substitution principle. 
  ) {
    // aplicando o conceito Dependency inversion principle;
  } 

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);
    // estou passando os datas para criação desse usuario.

    await this.usersRepository.save(user);

    // Ele so esta preocupado com o protocolo de comunicação. como ele vai enviar ? ele não sabe.
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe da Microsoft',
        email: 'microsoft@microsoft.com'
      },
      subject: 'Seja bem-vindo a plataforma da Microsoft',
      body: 'Agora você pode fazer o login na plataforma.'
    })
  }
}