### Framework structure:

- JavaScript: language
- [Webdriverio](https://webdriver.io/): Test framework
- [Appium](http://appium.io/): Mobile service
- [Allure report](https://docs.qameta.io/allure/): Test report framework
- [Mocha framework](https://mochajs.org/): Test framework
- Node 14

### Setup

1. Setup your machine to use the node 14:
````
##Check current node version
node -v
##Check for available node versions
brew search node 
##Unlink the current version
brew unlink node
##Install node 14
brew install node@14
##Link node 14 as current version
brew link node@14
````

2. Install project dependencies:

````
npm install
````

### Run test
- Local:  npx wdio

### Open allure report
- Local:  allure serve allure-results

### Plano de testes e evidencias
- Acesse a pasta: PlanoTeste_Evidencias
- [Acessar relatorio testes](https://builders-test-front-appium.netlify.app/)