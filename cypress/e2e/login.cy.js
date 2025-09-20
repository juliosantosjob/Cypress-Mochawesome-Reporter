import page from "../../pages-instance";

describe("Autenticação de Usuário", () => {
    const {
        SECRET_EMAIL,
        SECRET_PASSWORD
    } = Cypress.env();

    it("Login com credenciais validas", () => {
        page.login.openLoginPage();
        page.login.fillCredents(SECRET_EMAIL, SECRET_PASSWORD);
        page.login.submit();
        page.login.atHome();
    });

    it("Login com email invalido", () => {
        page.login.openLoginPage();
        page.login.fillCredents("invalid_email@gmail.com", "Mudar@123");
        page.login.submit();
        page.login.verifyMessage("Your email or password is incorrect!");
    });

    it("Login com senha invalida", () => {
        page.login.openLoginPage();
        page.login.fillCredents("test123123@gmail.com", "invalid_password");
        page.login.submit();
        page.login.verifyMessage("Your email or password is incorrect!");
    });

    it("Login com ambas credenciais invalidas", () => {
        page.login.openLoginPage();
        page.login.fillCredents("invalid_email@gmail.com", "invalid_password");
        page.login.submit();
        page.login.verifyMessage("Your email or password is incorrect!");
    });

    it("Login com email vazio", () => {
        page.login.openLoginPage();
        page.login.fillCredents("", "Mudar@123");
        page.login.submit();
        page.login.stayOnLogin();
    });

    it("Login com senha vazia", () => {
        page.login.openLoginPage();
        page.login.fillCredents("test123123@gmail.com", "");
        page.login.submit();
        page.login.stayOnLogin();
    });

    it("Login com ambas credenciais vazias", () => {
        page.login.openLoginPage();
        page.login.submit();
        page.login.stayOnLogin();
    });
});