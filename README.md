<h1 align="center">
    <img alt="Solar System Explorer logo" src="./public/docs/logo.svg" />
    <br>
    Solar System Explorer. Explore os principais planetas do Sistema Solar
</h1>

<div align="center">
  <img src="./public/docs/figma.JPG" alt="demonstração do projeto" >
</div>

# Sobre

Explore os principais planetas do Sistema Solar possui: Imagens, descrições e dados. Você pode favoritar os planetas que mais gostar!

<br />

Para criar o aplicativo combinei as APIs [Nasa API](https://api.nasa.gov/) e a [Solar System OpenData](https://api.le-systeme-solaire.net/en/), assim completando as informações. Utilizei o [React Query](https://react-query-v2.tanstack.com/) para fazer cache dos dados, então diminui bastante a quantidade de requisições durante o uso do app.

<br />

Nos favoritos, utilizei o [Redux](https://react-redux.js.org/) fazendo uma integração da store com o armazenamento local do device com o [Redux-Persit](https://www.npmjs.com/package/redux-persist), facilitando a criação e gerenciamento de estados persistidos.

# Ferramentas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Native Base](https://nativebase.io/)
- [React Native Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
- [Redux](https://react-redux.js.org/)
- [Redux-Persit](https://www.npmjs.com/package/redux-persist)


# Rodando o projeto

Você precisa ter o [Node](https://nodejs.org/en/), o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) || [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

Use o [ExpoGo](https://expo.dev/client) para rodar o app no seu dispositivo fisico ou no emulador.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/solar-system-explorer.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn || npm i

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn start || npm run start

4. Escaneie o QRCode ou digite a URL informada
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
