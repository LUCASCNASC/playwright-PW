import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

//Início exp. crédito
function gerarDataReferenciaFinanceira() {

    // Data inicial: 01/01/2000
    const dataInicio = new Date('2000-01-01');

    // Data atual
    const dataAtual = new Date();

    // Gerar um valor aleatório entre as duas datas (em milissegundos)
    const dataAleatoria = new Date(dataInicio.getTime() + Math.random() * (dataAtual.getTime() - dataInicio.getTime()));

    // Extrair o dia, mês e ano
    const dia = String(dataAleatoria.getDate()).padStart(2, '0');
    const mes = String(dataAleatoria.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
    const ano = dataAleatoria.getFullYear();

    // Retornar no formato dd/mm/aaaa
    return `${dia}/${mes}/${ano}`;
}
//Valor prestação
function gerarValorDuasCasasAposVirgula() {

    // Gerar um número aleatório entre 100 e 999 (3 dígitos)
    const valorInteiro = Math.floor(Math.random() * 900) + 100;

    // Gerar uma parte decimal aleatória com duas casas decimais
    const valorDecimal = (Math.random()).toFixed(2).substring(2); // Gera as duas casas decimais após a vírgula

    // Concatenar a parte inteira com a parte decimal
    const valorFinal = `${valorInteiro}.${valorDecimal}`;

    return valorFinal;
}

export class PreencherRefFinanceira {

    constructor(page) {
        this.page = page
    }

    //referencia financeira - escolher Início exp. crédito
    async dataInicio (selector) {

        const data_inicio = gerarDataReferenciaFinanceira();

        //clicar para abrir as opções
        await page.locator('text=Início exp. crédito').locator('..').locator('input').fill(data_inicio);
    }

    //referencia financeira - escolher Local Experiencia
    async localExp (selector) {

        const local_experiencia = gerarNomeEmpresa();

        //clicar para abrir as opções
        await page.locator('#txtLocExp').fill(local_experiencia);
    }

    //referencia financeira - escolher Plano experiencia
    async planoExp (selector) {

        const plano_experiencia = '444';

        //clicar para abrir as opções
        await page.locator('#txtPlExp').fill(plano_experiencia);
    }

    //referencia financeira - escolher Valor prestação
    async valorPrest (selector) {

        const valor_prestacao = gerarValorDuasCasasAposVirgula();

        //clicar para abrir as opções
        await page.locator('#txtVlrPrest').fill(valor_prestacao);
    }
}
