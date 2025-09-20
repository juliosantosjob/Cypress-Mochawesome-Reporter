import page from "../../pages-instance";
import creator from "../utils/dataGenerators";

describe("Cadastração de Usuário", () => {
    let person = creator.generatePerson();

    it("Cadastração com dados corretos", () => {
        page.register.openRegisterPage();
        page.register.fillData(person);
        page.register.submitAccountCreation();
        page.register.verifyMessage("Account Created!");
    });

    it("Cadastração com email invalido", () => {
        person.email = "invalid_email.com";

        page.register.openRegisterPage();
        page.register.fillEmailAndName(person);
        page.register.submitSignUp();
        page.login.stayOnLogin();
    });

    it("Cadastração com email ja utilizado", () => {
        person.email = Cypress.env("SECRET_EMAIL");

        page.register.openRegisterPage();
        page.register.fillEmailAndName(person);
        page.register.submitSignUp();
        page.register.verifyMessage("Email Address already exist!");
    });

    it("Cadastração com email em branco", () => {
        person.email = "";

        page.register.openRegisterPage();
        page.register.fillEmailAndName(person);
        page.register.submitSignUp();
        page.login.stayOnLogin();
    });

    it("Cadastração com nome em branco", () => {
        person.name = "";

        page.register.openRegisterPage();
        page.register.fillEmailAndName(person);
        page.register.submitSignUp();
        page.login.stayOnLogin();
    });
});