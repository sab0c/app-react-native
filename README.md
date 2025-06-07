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
- MSW (Mock Service Worker)

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
- `auth.test.tsx`: Testes do contexto de autenticação
- `auth.service.test.ts`: Testes do serviço de autenticação

### Funcionalidades Testadas

#### Testes de Login
- ✓ Login realiza com sucesso e exibe mensagem de boas-vindas
- ✓ Login falha com credenciais inválidas
- ✓ Exibe mensagem de erro quando login falha
- ✓ Mostra indicador de loading durante o processo de login
- ✓ Remove indicador de loading após conclusão do login

#### Testes de Logout
- ✓ Realiza logout com sucesso
- ✓ Limpa dados do usuário após logout
- ✓ Exibe mensagem de confirmação após logout
- ✓ Exibe mensagem de erro quando logout falha

#### Testes de Inicialização
- ✓ Carrega usuário do storage ao iniciar o app
- ✓ Inicia sem usuário quando storage está vazio

#### Testes do Serviço de Autenticação
- ✓ Salva token e dados do usuário no AsyncStorage
- ✓ Recupera dados do usuário do AsyncStorage

#### Testes de Componentes
- ✓ App renderiza corretamente com todos os providers
- ✓ Navegação funciona corretamente
- ✓ Sistema de temas funciona
- ✓ Toast messages são exibidas corretamente

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
- Mock Service Worker (MSW) para simular chamadas API

### Resumo da Cobertura
- **Total de Arquivos**: 3 arquivos principais de teste
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
npm install -g json-server

# Inicia o servidor na porta 3000
npm run server
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

O app possui alguns usuários pré-cadastrados que podem ser utilizados para teste:

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

### 5. Variáveis de Ambiente

O projeto utiliza um arquivo `.env` para configurações. Crie uma cópia do `.env.example`:

```bash
cp .env.example .env
```

Configurações necessárias no `.env`:
```
API_URL=http://localhost:3000
```

> ⚠️ **Nota**: Para dispositivos físicos Android, você precisará usar o IP da sua máquina no lugar de localhost

### 6. Executando em Modo de Desenvolvimento

Para desenvolvimento, você pode usar o modo de hot reload:

```bash
# Terminal 1 - Metro Bundler
npm start

# Terminal 2 - JSON Server
npm run server

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
│   └── services/               # Testes dos serviços
│       └── auth.service.test.ts
│
├── src/
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   └── ui/                 # Componentes de UI
│   │       └── gluestack-ui-provider/
│   │
│   ├── contexts/               # Contextos do React
│   │   └── auth.tsx            # Contexto de autenticação
│   │
│   ├── screens/                # Telas do aplicativo
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │
│   ├── services/              # Serviços e APIs
│   │   ├── api.ts             # Configuração do Axios
│   │   └── auth.service.ts    # Serviço de autenticação
│   │
│   ├── stores/                # Stores (gerenciamento de estado)
│   │   └── themeStore.ts      # Configuração do tema
│   │
│   └── utils/                 # Utilitários e helpers
│       └── storage.ts         # Funções de armazenamento
│
├── __mocks__/                 # Mocks para testes
│   ├── @gluestack-ui/
│   ├── react-native.js
│   └── react-native-toast-message.js
│
├── android/                   # Configurações Android
├── ios/                       # Configurações iOS
├── db.json                    # Banco de dados mock (JSON Server)
├── jest.config.js             # Configuração do Jest
├── jest.setup.js              # Setup dos testes
├── tsconfig.json              # Configuração do TypeScript
└── package.json               # Dependências e scripts
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