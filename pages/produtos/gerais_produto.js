export class GeralProduto {

    constructor(page) {
        this.page = page
    }

    //Clicar para selecionar o produto que queremos adicionar ao pedido
    async escolherProdutoPesquisa (selector) {

        //Clicar para adicionar no carrinho
        await page.click('.md-list-item-text')
    }

    //Clicar para selecionar a voltagem que queremos adicionar ao pedido
    async clicarVoltagemProduto (selector) {

        //Card de voltagem - clicar
        await page.click(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
    }

    //Botão adicionar produto após selecionar voltagem do produto
    async clicarAdicionarProduto (selector) {

        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        await page.click('[style="padding: 0px 5px;"] > .md-accent')
    }
}