import { IMailProvider, IMassage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2f0b75cd4dbb89',
        pass: '23534303fa5403'
      }
    })
  }

  async sendMail(message: IMassage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
// implements IMailProvider: Ele vai precisar seguir um contrato(protocolo) que e IMailProvider.
// depois de fazer essa implementação ja vou ter acesso ao sendMail que esta dentro do IMailProvider.