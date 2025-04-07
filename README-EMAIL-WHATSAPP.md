# Configuração de Email e WhatsApp

Este documento explica como configurar o envio de email e WhatsApp no site da Ecolution Engenharia.

## Configuração de Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para armazenar informações sensíveis como credenciais de email e número de WhatsApp. Estas variáveis estão definidas no arquivo `.env.local` na raiz do projeto.

### Configuração para Desenvolvimento

1. Renomeie o arquivo `.env.local.example` para `.env.local` (ou crie um novo arquivo `.env.local` se não existir).
2. Preencha as variáveis com seus valores:

```
# Credenciais de email
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-ou-app-password
EMAIL_TO=contato@ecolutionengenharia.com.br

# Número do WhatsApp (acessível no cliente)
NEXT_PUBLIC_WHATSAPP_NUMBER=5571999470541
```

### Configuração para Produção

Em ambiente de produção, configure estas variáveis no painel de controle do seu provedor de hospedagem (Vercel, Netlify, etc.).

## Configuração do Email

O sistema utiliza o Nodemailer com o serviço Gmail para envio de emails. Para que funcione corretamente:

1. Use um email Gmail para `EMAIL_USER`.
2. Para `EMAIL_PASS`, você tem duas opções:
   - Se sua conta tiver autenticação de dois fatores ativada, você precisará criar uma "Senha de App" específica para o aplicativo.
   - Se não tiver autenticação de dois fatores, você pode usar sua senha normal, mas precisará ativar a opção "Permitir apps menos seguros" nas configurações de segurança da sua conta Google.

### Criando uma Senha de App no Gmail

1. Acesse sua Conta Google.
2. Selecione Segurança.
3. Em "Como fazer login no Google", selecione Senhas de app.
   - Nota: Se você não vir esta opção, pode ser porque:
     - A verificação em duas etapas não está configurada para sua conta.
     - A verificação em duas etapas está configurada apenas para chaves de segurança.
     - Sua conta é gerenciada por trabalho, escola ou outra organização.
     - Você ativou o Acesso de app avançado.
4. Na parte inferior, selecione Selecionar app e escolha Outro (Nome personalizado).
5. Digite "Ecolution Website" e clique em Gerar.
6. Siga as instruções para inserir a senha do app. A senha do app é o código de 16 caracteres que aparece na tela.
7. Selecione Concluído.
8. Use esta senha no arquivo `.env.local` para a variável `EMAIL_PASS`.

## Configuração do WhatsApp

O sistema utiliza a API do WhatsApp Web para envio de mensagens. Para configurar:

1. Defina o número de WhatsApp no formato internacional (com código do país) sem espaços ou caracteres especiais.
   - Exemplo: `5571999470541` para um número brasileiro (55) com DDD 71.
2. Este número deve estar associado a uma conta WhatsApp ativa e deve ser o número que receberá as mensagens do formulário de contato.

## Testando o Envio

Para testar se a configuração está funcionando:

1. Inicie o servidor de desenvolvimento: `npm run dev`
2. Acesse a página de contato: http://localhost:3000/contato
3. Preencha o formulário e envie
4. Verifique:
   - Se o email foi recebido no endereço configurado em `EMAIL_TO`
   - Se o WhatsApp foi aberto com a mensagem pré-preenchida

## Solução de Problemas

### Problemas com Envio de Email

- Verifique se as credenciais estão corretas
- Confirme se a conta Gmail permite o acesso de aplicativos menos seguros ou se a senha de app está configurada corretamente
- Verifique os logs do servidor para mensagens de erro específicas

### Problemas com WhatsApp

- Certifique-se de que o número está no formato correto
- Verifique se o navegador não está bloqueando popups
- Teste o link diretamente: `https://wa.me/5571999470541?text=Teste`
