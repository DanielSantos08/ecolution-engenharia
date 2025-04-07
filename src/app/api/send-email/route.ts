import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporte de email
    // Nota: Em produção, use variáveis de ambiente para estas credenciais
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'seu-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'sua-senha-ou-app-password'
      }
    });

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'seu-email@gmail.com',
      to: process.env.EMAIL_TO || 'contato@ecolutionengenharia.com.br',
      subject: `Novo contato do site - ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone || 'Não informado'}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Envio do email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
