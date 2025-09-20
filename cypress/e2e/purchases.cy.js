import page from "../../pages-instance";
import creator from "../utils/dataGenerators";

describe("Carrinho de Compras", () => {
    const {
        SECRET_EMAIL,
        SECRET_PASSWORD
    } = Cypress.env();

    const product = creator.randomProduct();

    beforeEach(() => page.login.doLogin(SECRET_EMAIL, SECRET_PASSWORD));

    it("Realiza busca de um produto", () => {
        page.purchases.openPurchasesPage();
        page.purchases.searchProduct(product.name);
        page.purchases.submitSearch();
        page.purchases.verifyProduct(product);
    });

    it("Adicionar produto no carrinho", () => {
        page.purchases.openPurchasesPage();
        page.purchases.searchItem(product.name);
        page.purchases.addProductToCart();
        page.purchases.goToCart();
        page.purchases.verifyProductOnCart(product);
    });
});