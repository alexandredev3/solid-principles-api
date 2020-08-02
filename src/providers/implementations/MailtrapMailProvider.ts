import { IMailProvider, IMassage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

import dotenv from 'dotenv';

dotenv.config();

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT as unknown as number,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
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