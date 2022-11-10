const HomeScreen = require("../../test/screenObjects/home.screen")
const expectChai = require('chai').expect
const InitialScreen = require("../../test/screenObjects/initial.screen")
const RegisterScreen = require("../../test/screenObjects/register.screen")
const allureReporter = require('@wdio/allure-reporter').default
const Constants = require("../constants/constants")

describe('Viewing the application home screen', ()=> {
    beforeEach(async () => {
        await driver.launchApp()
    });

    it('Validate data on app home screen', async ()=> {
        await InitialScreen.EnterButton.click()
        let result = await HomeScreen.districtName
        await expectChai(result).to.have.string("Bairro do Clima Bom")
        await HomeScreen.exitButton.click()
    });

    it('Validate home title writing', async ()=> {
        await InitialScreen.EnterButton.click()
        let result = await HomeScreen.principalTitle
        await expectChai(result).to.have.string(Constants.titlePrincipal)
        await HomeScreen.exitButton.click()
    });

    it('Validate registration flow until code confirmation screen', async ()=> {
        allureReporter.addFeature('Validate registration flow until code confirmation screen')
        await InitialScreen.RegisterButton.click()
        await RegisterScreen.InputCellPhone.click()
        await RegisterScreen.InputCellPhone.setValue(Constants.cellPhoneNumber)
        await RegisterScreen.InputCellPhone.click()
        await RegisterScreen.nextButton.click()
        await RegisterScreen.inputCodeConfirmation.isDisplayed()
        await RegisterScreen.inputNameField.click()
        await RegisterScreen.inputNameField.setValue(Constants.nameForRegister)
        await RegisterScreen.nextButton.click()
    });
})