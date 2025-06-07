# App de Autenticação React Native

Um aplicativo de autenticação elegante e moderno desenvolvido com React Native CLI, utilizando Context API para gerenciamento de estado, Axios para requisições HTTP e uma API simulada com json-server.

## 🚀 Tecnologias

- React Native CLI
- Context API
- Axios
- React Native Toast Message
- AsyncStorage
- json-server

## 📋 Pré-requisitos

Para executar este projeto, você precisa ter instalado:

- Node.js
- npm ou yarn
- Android Studio e SDK Android (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)
- json-server (para simular a API)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sab0c/app-react-native
cd appAuth
```

2. Instale as dependências do projeto:
```bash
npm install
# ou
yarn
```

3. Instale o json-server globalmente:
```bash
npm install -g json-server
# ou
yarn global add json-server
```

## 📝 Configuração do IP

Para dispositivos físicos, configure o IP correto:

1. Encontre seu IP local:
   - No Windows: Execute `ipconfig` no terminal
   - No Mac/Linux: Execute `ifconfig` no terminal

2. Configure o arquivo `src/services/api.ts`:
```typescript
export const api = axios.create({
  baseURL: 'http://SEU_IP:3000',
});
```

## 📦 Banco de Dados

O arquivo `db.json` na raiz do projeto contém os dados de usuário:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Sabrina Clemente",
      "email": "sabrina.clemente@gmail.com",
      "password": "123456"
    }
  ]
}
```

## ⚠️ Observações Importantes

1. O dispositivo/emulador e o computador devem estar na mesma rede
2. Inicie o json-server antes de executar o app
3. Verifique se a porta 3000 não está bloqueada pelo firewall
4. Para iOS, execute `pod install` na pasta `ios` antes de iniciar

## 🚀 Executando o Projeto

1. Inicie a API mock:
```bash
npm run api
# ou
yarn api
```

2. Inicie o Metro Bundler:
```bash
npm start
# ou
yarn start
```

3. Execute o app:
```bash
# Android
npm run android
# ou
yarn android

# iOS
npm run ios
# ou
yarn ios
```

## 🔑 Dados para Teste

Use estas credenciais para testar o login:

- Email: sabrina.clemente@gmail.com
- Senha: 123456

## 📱 Funcionalidades

- Sistema de login com validação
- Persistência de sessão
- Notificações toast para feedback
- Tela de loading durante autenticação
- Ícone personalizado com design 3D
- Interface moderna e responsiva

## 🎨 Design e Interface

O app apresenta um design moderno com:
- Ícone 3D em tons de azul e verde
- Animações suaves de transição
- Mensagens toast para feedback
- Layout clean e intuitivo
- Experiência de usuário otimizada

## 📂 Estrutura do Projeto

```
appAuth/
├── src/
│   ├── contexts/
│   │   └── auth.tsx
│   ├── services/
│   │   └── api.ts
│   └── screens/
│       ├── Home.tsx
│       └── Login.tsx
├── android/
├── ios/
└── db.json
```