//fazer login no pedido web, com o usuário 393
export async function login(page, username, password) {

    await page.goto('/');
    await page.fill('#txtusername', 'sabium.automacao');
    await page.fill('#txtpassword', '123.automacao');
    await page.click('.test_btnSalvarCliente');
    await expect(page.locator('text=INICIAR ATENDIMENTO')).toBeVisible()//Validando se realmente fez o login
}

//validar url após logarmos no pedido web
export async function validateUrlAposLogin(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/');
}

//validar título da página após logarmos no pedido web - título da aba do navegador
Cypress.Commands.add('tituloPagina', (username, password) => {

cy.title()
    .should('eq', 'Sabium Mobile') //Validando título da página
});