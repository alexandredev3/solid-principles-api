// Responsabilidade: Receber requisição do CreateUserUseCase usando o protocolo HTTP, e devolver uma resposta.

import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(
    private createUserCase: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserCase.execute({
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error, Try again...'
        // O message e aquela message do Throw Error
        // se não cai naquele Error, ele vai retorna essa mensagem.
      })
    }
  }
}