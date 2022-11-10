class RegisterScreen {
    get InputCellPhone() {
        return $("~insira o numero de celular")
    }

    get nextButton() {
        return $("~Botao Avancar")
    }

    get inputNameField() {
        return $("~Insira o nome completo")
    }

    get inputCodeConfirmation() {
        return $('~Confirmacao Codigo')
    }

}
module.exports = new RegisterScreen()