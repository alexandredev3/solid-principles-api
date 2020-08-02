//Contrado de envio de Email.

interface IAddress {
  email: string,
  name: string
}

// Quais são os tipos dos campos que vai na message.
export interface IMassage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

// responsavel por enviar o email
export interface IMailProvider {
  sendMail(message: IMassage): Promise<void>
  // sempre que ele e assíncrono ele retorna uma Promise, que retorna "void" ou seja retorna nada.
}