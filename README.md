# App de Autenticação React Native

Este é um aplicativo de autenticação desenvolvido em React Native, demonstrando boas práticas de desenvolvimento, testes e gerenciamento de estado.

## 🚀 Tecnologias Utilizadas

### Core
- React Native
- TypeScript
- Context API (Gerenciamento de Estado)
- React Navigation

### Backend e Dados
- Axios (Requisições HTTP)
- JSON Server (API Mock)
- AsyncStorage (Persistência Local)

### UI/UX
- @gluestack-ui/themed (UI Components)
- React Native Toast Message
- React Native SVG
- Animated API (Animações)

### Testes
- Jest
- React Testing Library
- @testing-library/react-hooks

### Desenvolvimento
- ESLint
- Prettier
- Babel
- Metro

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS, apenas macOS)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sab0c/app-react-native
cd appAuth
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🧪 Testes

### Executando os Testes

Para executar todos os testes:
```bash
npm test
# ou
yarn test
```

Para executar os testes em modo watch:
```bash
npm test -- --watch
# ou
yarn test --watch
```

### Cobertura de Testes

### Arquivos Testados
- `App.test.tsx`: Teste do componente principal
- `contexts/auth.test.tsx`: Testes do contexto de autenticação
- `services/auth.service.test.ts`: Testes do serviço de autenticação
- `components/Toast.test.tsx`: Testes de notificações toast

### Funcionalidades Testadas

#### Testes de Login (auth.test.tsx)
- ✓ Login realiza com sucesso e exibe mensagem de boas-vindas
- ✓ Login falha com credenciais inválidas
- ✓ Exibe mensagem de erro quando login falha
- ✓ Mostra indicador de loading durante o processo de login
- ✓ Remove indicador de loading após conclusão do login

#### Testes de Logout (auth.test.tsx)
- ✓ Realiza logout com sucesso
- ✓ Limpa dados do usuário após logout
- ✓ Exibe mensagem de confirmação após logout
- ✓ Exibe mensagem de erro quando logout falha

#### Testes de Inicialização (auth.test.tsx)
- ✓ Carrega usuário do storage ao iniciar o app

#### Testes do Serviço de Autenticação (auth.service.test.ts)
- ✓ Login realiza com sucesso e salva dados
- ✓ Falha corretamente com credenciais inválidas
- ✓ Remove dados do usuário no logout
- ✓ Recupera usuário do storage
- ✓ Retorna null quando não há usuário armazenado
- ✓ Recupera token do storage

#### Testes de Notificações (Toast.test.tsx)
- ✓ Exibe toast de sucesso corretamente
- ✓ Exibe toast de erro corretamente
- ✓ Exibe toast de info corretamente
- ✓ Esconde o toast quando solicitado

### Detalhes Técnicos dos Testes

#### Mocks Implementados
- AsyncStorage para persistência de dados
- Toast para notificações
- Componentes do Gluestack UI
- Navegação
- SVG e animações

#### Ferramentas Utilizadas
- Jest como framework principal
- React Testing Library para testes de componentes
- @testing-library/react-hooks para testes de hooks

### Resumo da Cobertura
- **Total de Arquivos**: 4 arquivos principais de teste
- **Total de Testes**: 17 testes implementados
- **Status**: ✅ 100% dos testes passando

## 📝 Notas de Desenvolvimento

- Os testes foram desenvolvidos seguindo as melhores práticas do React Testing Library
- Utilizamos TypeScript para maior segurança e melhor experiência de desenvolvimento
- O projeto segue um padrão de arquitetura baseado em contextos e serviços

## ⚠️ Troubleshooting

Se você encontrar o erro "Cannot read properties of undefined (reading 'getStoredUser')", verifique se:
1. O mock do AuthService está corretamente configurado
2. As importações estão corretas
3. O arquivo jest.setup.js está sendo carregado

## 🏃‍♂️ Rodando o Projeto

### 1. Iniciando o Backend (JSON Server)
```bash
# Instala o JSON Server globalmente (se ainda não tiver)
npm install -g json-server

# Inicia o servidor na porta 3000
npm run api
# ou
json-server --watch db.json --port 3000
```

### 2. Iniciando o App

#### Android
```bash
# Inicia o Metro Bundler
npm start
# Em outro terminal, inicia o app no Android
npm run android
```

#### iOS
```bash
cd ios
pod install
cd ..
npm run ios
```

### 3. Credenciais para Teste

O app possui um usuário pré-cadastrado que pode ser utilizado para teste:

#### Usuário de Teste
```
Email: sabrina.clemente@gmail.com
Senha: 123456
```

### 4. Endpoints da API

O JSON Server disponibiliza os seguintes endpoints:

- `POST /login`: Autenticação de usuários
- `GET /users`: Lista de usuários
- `GET /users/:id`: Detalhes de um usuário específico

### 5. Configuração do IP

> ⚠️ **Nota**: Para dispositivos físicos Android, você precisará usar o IP da sua máquina no lugar de localhost

> ⚠️ **Nota para iOS**: Para rodar no iOS, você precisa substituir 'localhost' pelo seu IPv4 no arquivo `src/services/api.ts`. 
> Para encontrar seu IPv4 no MacOS, use o comando:
> ```bash
> ipconfig getifaddr en0
> ```
> Então substitua a URL no arquivo api.ts de:
> ```typescript
> http://localhost:3000
> ```
> para:
> ```typescript
> http://SEU_IPV4:3000
> ```

### 6. Executando em Modo de Desenvolvimento

Para desenvolvimento, você pode usar o modo de hot reload:

```bash
# Terminal 1 - Metro Bundler
npm start

# Terminal 2 - JSON Server
json-server --watch db.json --port 3000

# Terminal 3 - App (escolha um)
npm run android
# ou
npm run ios
```

## 📁 Estrutura do Projeto

```
appAuth/
├── __tests__/                  # Testes
│   ├── App.test.tsx            # Testes do componente principal
│   ├── contexts/               # Testes dos contextos
│   │   └── auth.test.tsx       # Testes do contexto de autenticação
│   ├── services/               # Testes dos serviços
│   │   └── auth.service.test.ts
│   └── components/             # Testes dos componentes
│       └── Toast.test.tsx
│
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   └── ui/                 # Componentes de UI
│   │
│   ├── contexts/               # Contextos do React
│   │   └── auth.tsx            # Contexto de autenticação
│   │
│   ├── screens/                # Telas do aplicativo
│   │   ├── Home.tsx
│   │   └── Login.tsx
│   │
│   ├── services/              # Serviços e APIs
│   │   ├── api.ts             # Configuração do Axios
│   │   └── auth.service.ts    # Serviço de autenticação
│   │
│   ├── stores/                # Stores de estado
│   │   └── theme.store.ts     # Store do tema
│   │
│   └── themes/                # Configuração de temas
│       ├── index.ts
│       ├── light.ts
│       └── dark.ts
```

### 📚 Principais Diretórios

#### `/src`
- `components/`: Componentes React reutilizáveis
- `contexts/`: Contextos do React para gerenciamento de estado
- `screens/`: Componentes de tela do aplicativo
- `services/`: Serviços e integrações com APIs
- `stores/`: Gerenciamento de estado global

#### `/__tests__`
- Estrutura espelha a estrutura do `/src`
- Arquivos de teste com extensão `.test.tsx` ou `.test.ts`
- Mocks e configurações de teste

#### `/__mocks__`
- Mocks globais para módulos externos
- Configurações de mock para testes

## 📱 Demonstração

App iOS DEMO:

![App Demo](https://i.imgur.com/RtB8UAY.gif)

App Android DEMO:

![App Demo](https://i.imgur.com/1rjbuJt.gif)