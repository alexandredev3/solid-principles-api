import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string){
    Object.assign(this, props);

    /* Se não for passado um id, e porque estamos criando um user, então ele vai
    cair nesse if, e adicionar um id. */
    if (!id) {
      this.id = uuid();
    }
  }
}