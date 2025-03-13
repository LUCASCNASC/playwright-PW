export class Produto {

    constructor(page) {
        this.page = page
    }

    //Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NFe)
    async primeiro (selector) {

        const primeiro_produto_normal = '1860'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_normal);
    }

    //Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NFe)
    async segundo (selector) {

        const segundo_produto_normal = '1870'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', segundo_produto_normal);
    }

    //Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitPrimeiro (selector) {

        const primeiro_kit_normal = '1862'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_kit_normal);
    }

    //Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NFe)
    async semSaldo (selector) {

        const produto_sem_saldo = '1869'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_sem_saldo);
    }

    //Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NFe)
    async cdPrimeiro (selector) {

        const primeiro_produto_CD = '1880'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_produto_CD);
    }

    //Escolher segundo produto normal - 1881 0 0
    async cdSegundo (selector) {

        const segundo_produto_CD = '1881'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', segundo_produto_CD);
    }

    //Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NFe)
    async remotoComCD (selector) {

        const remoto_saldo_CD = '1883'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', remoto_saldo_CD);
    }

    //Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NFe)
    async remotoSemCD (selector) {

        const remoto__sem_saldo_CD = '1882'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', remoto__sem_saldo_CD);
    }

    //Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NFe)
    async arredondarCimaBaixo (selector) {

        const produto_arredondar = '1908'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_arredondar);
    }

    //Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NFe)
    async descontoCifrao (selector) {

        const produto_desconto_cifrao = '1912'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_desconto_cifrao);
    }

    //Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NFe)
    async descontoPercentual (selector) {

        const produto_desconto_percentual = '1913'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_desconto_percentual);
    }

    //Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NFe)
    async descontoValorFixo (selector) {

        const produto_desconto_valorfixo = '1914'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_desconto_valorfixo);
    }

    //Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitDesconto (selector) {

        const primeiro_kit_desconto = '1909'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_kit_desconto);
    }

    //Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NFe)
    async kitRemoto (selector) {

        const primeiro_kit_remoto = '1915'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', primeiro_kit_remoto);
    }

    //Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPartida (selector) {

        const produto_promocao_partida = '1868'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_promocao_partida);
    }

    //Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPrazoEntrada (selector) {

        const produto_promocao_prazo_entrada = '1866'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_promocao_prazo_entrada);
    }

    //Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NFe)
    async promoPrazoParcelado (selector) {

        const produto_promocao_prazo_parcelado = '1867'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_promocao_prazo_parcelado);
    }

    //Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
    async primeiroPrazoParcela (selector) {

        const produto_codigo = '1891'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_codigo);
    }

    //Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
    async segundoPrazoParcela (selector) {

        const produto_codigo = '1895'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_codigo);
    }

    //Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
    async terceiroPrazoParcela (selector) {

        const produto_codigo = '1893'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_codigo);
    }

    //Pedido com promoção a prazo/parcelas (promoção 161): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)
    async quartoPrazoParcela (selector) {

        const produto_codigo = '1894'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_codigo);
    }
}