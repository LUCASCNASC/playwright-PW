export class ProdutoPromo {

    constructor(page) {
        this.page = page
    }

    //Escolher produto prestamista abatimento % - 1918 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
    async prazoParcelaPrest (selector) {

        const primeiro_produto_normal = '1918'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher produto prestamista abatimento % - 1919 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
    async segPrazoParcelaPrest (selector) {

        const primeiro_produto_normal = '1919'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher prestamista abatimento % com promoção a prazo - 1920 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
    async partPrest (selector) {

        const primeiro_produto_normal = '1920'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher prestamista abatimento % normal - 1921 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento %
    async terPrazoParcelaPrest (selector) {

        const primeiro_produto_normal = '1921'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher prestamista abatimento Valor Fixo - 1922 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
    async prazoPrestPrimAbatVF (selector) {

        const primeiro_produto_normal = '1922'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher prestamista abatimento Valor Fixo - 1923 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
    async prazoPrestSegAbatVF (selector) {

        const primeiro_produto_normal = '1923'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produtoprimeiro_produto_normal_codigo);
    }

    //Escolher prestamista abatimento Valor Fixo - 1924 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo
    async prazoPrestTercAbatVF (selector) {

        const primeiro_produto_normal = '1924'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher prestamista abatimento Valor Fixo - 1925 0 0 - com Intercept - processo venda 9860 (NFe) - prestamista abatimento Valor Fixo - Origem produto
    async prazoPrestTercAbatVFOS (selector) {

        const primeiro_produto_normal = '1925'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }
}