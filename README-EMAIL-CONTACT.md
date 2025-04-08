# Formulário de Contato - Apenas Email

Este documento explica como funciona o formulário de contato do site da Ecolution Engenharia.

## Visão Geral

O formulário de contato envia uma mensagem por email quando o usuário submete o formulário:

1. Envia um email para o endereço configurado em `EMAIL_TO`

## Como Funciona

### Envio de Email

O email é enviado através da API `/api/send-email`, que utiliza o Nodemailer para enviar emails via SMTP.

## Configuração

As configurações são feitas através de variáveis de ambiente no arquivo `.env.local`:

```
# Credenciais de email
EMAIL_USER=seu-email@yahoo.com
EMAIL_PASS=sua-senha-ou-app-password
EMAIL_TO=contato@ecolutionengenharia.com.br
```

## Fluxo de Execução

1. Usuário preenche o formulário e clica em "Enviar mensagem"
2. O sistema envia o email
3. O usuário recebe uma mensagem de sucesso

## Solução de Problemas

### Problemas com o Envio de Email

Se o email não estiver sendo enviado:

1. Verifique se as credenciais estão corretas no arquivo `.env.local`
2. Para contas Yahoo, certifique-se de usar uma "Senha de Aplicativo" conforme explicado no arquivo README-YAHOO-EMAIL.md
3. Verifique os logs do servidor para mensagens de erro específicas
