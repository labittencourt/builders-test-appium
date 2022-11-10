class HomeScreen {
    get principalTitle() {
        return $("~Sowe").getText()
    }

    get districtName() {
        return $("~Bairro do Clima Bom").getText()
    }

    get exitButton(){
        return $('~Botão Sair')
    }
}
module.exports = new HomeScreen()