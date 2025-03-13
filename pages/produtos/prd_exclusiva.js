export class ProdutoExclusiva {

    constructor(page) {
        this.page = page
    }

    //produto normal com saldo, para exclusiva - 1896 0 0 - com intercept
    async primeiroNormal (selector) {

        const produto_exclusiva = '1896' 

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_exclusiva);
    }

    //produto kit normal sem saldo, para exclusiva e sem saldo a receber - 1900 0 0 - com intercept
    async kitSemSaldoAgendamento (selector) {

        const kit_semsaldo = '1900'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', kit_semsaldo);
    }

    //produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber - 1903 0 0 - com intercept
    async kitVolumes (selector) {

        const kit_volumes = '1903'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', kit_volumes);
    }

    //produto normal com saldo a receber, para exclusiva - 1905 0 0 - com intercept
    async saldoReceber (selector) {

        const produto_saldoreceber = '1905'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_saldoreceber);
    }

    //produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
    async saldoRecebDuasLinhas (selector) {

        const produto_saldoreceber_duaslinhas = '1906'

        //Prenchendo campo Buscar produto
        await page.fill('#searchText', produto_saldoreceber_duaslinhas);
    }
} 