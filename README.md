# DevFlix

## Contexto:
Nosso projeto consiste na criação de um site de streaming que oferece conteúdos audiovisuais sob demanda.
O sistema precisa garantir uma reprodução contínua de vídeos, baixa latência e a capacidade de suportar
um grande volume de acessos simultâneos, especialmente durante picos de uso.
Além disso, os requisitos incluem:

<ul>
<li>Reprodução fluida de vídeos e sem interrupções;</li>
<li>Busca rápida e eficiente de conteúdos;</li>
<li>Escalabilidade horizontal, para lidar com vários usuários simultaneamente;</li>
<li>Manutenção modular, com atualizações frequentes de serviços sem impacto no sistema completo.</li>
</ul>

## Para rodar aplicação:
```shell
npm run dev
```

## Para configurar aplicação:
<strong>Baixar as dependências:</strong>
```shell
npm install
```

<strong>Criar a pasta:</strong>
```shell
uploads 
```

<strong>Criar o banco:</strong>
```shell
npx sequelize-cli db:create
```

<strong>Criar as tabelas e baixar as migrações:</strong>
```shell
npx sequelize-cli db:migrate
```

<strong>Troque nos arquivos sequelizeCli.js e index.ts por username e password da sua máquina:</strong>
```shell
username: "user"
password: "password"
```

## Arquitetura:
Optamos pela <strong>Arquitetura de Microsserviços</strong> devido à necessidade de escalabilidade e 
independência entre módulos. A aplicação será dividida em serviços especializados, cada um cuidando 
de uma responsabilidade específica:

<ol>
<li><strong>Serviço de Usuários:</strong> Gerencia o cadastro e autenticação de usuários.</li>
<li><strong>Serviço de Conteúdo:</strong> Responsável pela busca e organização dos vídeos disponíveis no catálogo.</li>
<li><strong>Serviço de Streaming:</strong> Entrega o conteúdo de vídeo diretamente aos usuários, garantindo baixa latência.</li>
<li><strong>Serviço de Monitoramento:</strong> Realiza o acompanhamento de acessos e identifica gargalos de performance em tempo real.</li>
</ol>

Cada serviço será desenvolvido de forma independente, utilizando React, Express e Bootstrap.

## Conclusão:
A <strong>Arquitetura de Microsserviços</strong> é a melhor opção para o site de streaming, pois permite que cada 
parte do sistema seja escalada e mantida de forma independente. Com essa abordagem, garantimos 
uma experiência estável e contínua aos usuários, mesmo em períodos de alta demanda, ao mesmo tempo 
que facilitamos o desenvolvimento e a evolução do sistema ao longo do tempo.


