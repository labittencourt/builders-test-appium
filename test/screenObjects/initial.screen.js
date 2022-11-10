class InitialScreen {
    get RegisterButton() {
        return $('~Cadastrar')
    }

    get EnterButton() {
        return $('~Entrar');
    }
}
module.exports = new InitialScreen()