# Configuração de Email Yahoo para o Site

Este documento explica como configurar corretamente o envio de emails usando uma conta Yahoo no site da Ecolution Engenharia.

## Problema: Erro de Autenticação

Se você estiver recebendo erros como `Invalid login: 535 5.7.0 (#AUTH005) Too many bad auth attempts.`, isso indica que há um problema com a autenticação da conta Yahoo.

## Solução: Gerar uma Senha de Aplicativo

O Yahoo, assim como muitos provedores de email, implementa medidas de segurança que podem bloquear o acesso de "aplicativos menos seguros". A solução é gerar uma "Senha de Aplicativo" específica para o site.

### Passos para Gerar uma Senha de Aplicativo no Yahoo:

1. Acesse sua conta Yahoo em [https://login.yahoo.com](https://login.yahoo.com)
2. Clique no seu nome/avatar no canto superior direito e selecione "Configurações da Conta"
3. No menu lateral, clique em "Segurança da Conta"
4. Role para baixo até encontrar "Senhas de Aplicativo" ou "Gerar Senha de Aplicativo"
5. Selecione "Outro Aplicativo" no menu suspenso
6. Digite um nome para identificar (ex: "Site Ecolution")
7. Clique em "Gerar"
8. O Yahoo exibirá uma senha de 16 caracteres. Copie esta senha.
9. Atualize o arquivo `.env.local` com esta nova senha:

```
EMAIL_USER=ecolutionengenhariaambiental@yahoo.com
EMAIL_PASS=sua-senha-de-aplicativo-aqui
EMAIL_TO=ecolutionengenhariaambiental@yahoo.com
```

10. Reinicie o servidor Next.js para que as alterações sejam aplicadas.

## Verificação de Configuração SMTP

As configurações SMTP para o Yahoo são:

- Host: `smtp.mail.yahoo.com`
- Porta: `465`
- Seguro: `true`

Estas configurações já estão aplicadas no código do site.

## Solução Alternativa: Usar Gmail

Se continuar tendo problemas com o Yahoo, considere usar uma conta Gmail, que geralmente tem um processo mais simples para configurar aplicativos externos.

Para Gmail, você precisaria:

1. Ativar a verificação em duas etapas na sua conta Google
2. Gerar uma senha de aplicativo
3. Atualizar o arquivo `.env.local` e o código para usar as configurações do Gmail

## Testando o Envio de Email

Após fazer as alterações, use a página de teste em [http://localhost:3000/test-email](http://localhost:3000/test-email) para verificar se o envio de email está funcionando corretamente.
