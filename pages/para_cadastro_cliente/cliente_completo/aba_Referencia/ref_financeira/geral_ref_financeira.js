import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'


//------referencia financeira - funções de geração de dados

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

export class GeralRefFinanceira {

    constructor(page) {
        this.page = page
    }

    //validar e clicar na aba Financeira, dentro de Referencias
    async clicarAba (selector) {

        //validando botão Financeira
        await expect(page.locator('#menu_items_sec > .on')).toBeVisible();
        await expect(page.locator('#menu_items_sec > .on')).not.toHaveAttribute('disabled', '');

        await page.route('**/views/cliente/refEtapaFinanceiraLista.html', route => route.continue());
        const [response] = await Promise.all([
        page.waitForResponse('**/views/cliente/refEtapaFinanceiraLista.html', { timeout: 40000 }),
        //clicando botão Financeira
        page.locator('#menu_items_sec > :nth-child(4)').click()
]);
    }

    //validando informações da tela antes de adicionar qualquer coisa - aba referencia Financeira
    async validarAbaVazia (selector) {

        //validando título quando entramos na aba Financeira
        await expect(page.locator('h3')).toBeVisible();
        await expect(page.locator('h3')).toHaveText('Referências / Financeira');

        //validando botão +
        await expect(page.locator('.layout-align-end-end > .md-fab')).toBeVisible();
        await expect(page.locator('.layout-align-end-end > .md-fab')).not.toHaveAttribute('disabled', '');

        //mensagem quando não tem nada adicionado na aba Financeira
        await expect(page.locator('.text-align-center')).toBeVisible();
        await expect(page.locator('.text-align-center')).toHaveText('Não foi encontrado nenhum registro');

        await expect(page.locator('.btn')).toBeVisible();
        await expect(page.locator('.btn')).not.toHaveAttribute('disabled', '');
        //.and('contain', 'SALVAR')
    }

    //clicar no botão + para adicionar uma nova referencia Financeira
    async clicarAddNova (selector) {

        await page.route('**/views/cliente/modalClienteRefFinanc.html', route => route.continue());
        const [response] = await Promise.all([
        page.waitForResponse('**/views/cliente/modalClienteRefFinanc.html', { timeout: 40000 }),
        page.locator('.layout-align-end-end > .md-fab').click()
]);
    }

    //validar informações do modal Referencia Financeira antes de preencher as informações
    async modalVazio (selector) {

        //título modal 
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .flex')).toHaveText('Referência financeira');

        //botão X
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).toBeVisible();
        await expect(page.locator('.md-dialog-fullscreen > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')).not.toHaveAttribute('disabled', '');

        //ícone calendário
        await expect(page.locator('.md-datepicker-button')).toBeVisible();
        await expect(page.locator('.md-datepicker-button')).not.toHaveAttribute('disabled', '');

        //campo Início exp. crédito
        await expect(page.locator('text=Início exp. crédito')).toBeVisible();

        //informativo campo Início exp. crédito
        await expect(page.locator('label[for="txtIniExpCred"]')).toHaveText('Início exp. crédito');

        //campo Local Experiência
        await expect(page.locator('#txtLocExp')).toBeVisible();
        await expect(page.locator('#txtLocExp')).toHaveValue('');
        await expect(page.locator('#txtLocExp')).not.toHaveAttribute('disabled', '');

        //informativo campo Local Experiência
        await expect(page.locator('label[for="txtLocExp"]')).toHaveText('Local Experiência');

        //campo Plano experiência
        await expect(page.locator('#txtPlExp')).toBeVisible();
        await expect(page.locator('#txtPlExp')).toHaveValue('');
        await expect(page.locator('#txtPlExp')).not.toHaveAttribute('disabled', '');

        //informativo campo Plano experiência
        await expect(page.locator('label[for="txtPlExp"]')).toHaveText('Plano experiência');

        //informativo campo possui cartão
        await expect(page.locator('label[for="txtPossuiCartao"]')).toHaveText('Possui cartão');

        //campo Valor prestação
        await expect(page.locator('#txtVlrPrest')).toBeVisible();
        await expect(page.locator('#txtVlrPrest')).toHaveValue('');
        await expect(page.locator('#txtVlrPrest')).not.toHaveAttribute('disabled', '');

        //informativo campo Valor prestação
        await expect(page.locator('label[for="txtVlrPrest"]')).toHaveText('Valor prestação');

        //validar botão SALVAR, desabilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).toHaveAttribute('disabled', '');
            }

    //clicar para salvar Referencia Financeira
    async clicarSalvar (selector) {

        await expect(page.locator('button:has-text("Salvar")')).toBeVisible();

        //validando botão salvar habilitado
        await expect(page.locator('#btnModalAddRefPessoal')).toBeVisible();
        await expect(page.locator('#btnModalAddRefPessoal')).not.toHaveAttribute('disabled', '');

        //clicar no botão SALVAR
        await page.locator('#btnModalAddRefPessoal').click();
    }

    // validando mensagem Referencia Financeira incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Financeira
    async messRefFinanceiraIncluidaSucesso (selector) {

        //Card Endereço incluído com sucesso.
        await expect(page.locator('.toast-success')).toBeVisible();

        //Card Endereço incluído com sucesso. - Aviso
        await expect(page.locator('.toast-success > .toast-title')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-title')).toHaveText('Aviso');

        //Card Endereço incluído com sucesso. - Referência Comercial incluída com sucesso.
        await expect(page.locator('.toast-success > .toast-message')).toBeVisible();
        await expect(page.locator('.toast-success > .toast-message')).toHaveText('Referência Financeira incluída com sucesso.');
    }

    //validando informações que foram adicionadas no cadastro de referencia Financeira
    async infosRefFinanceiraAdicionada (selector) {

        //data
        await expect(page.locator('.flex-gt-sm-70 > :nth-child(1) > .ng-binding')).toBeVisible();

        //plano de experiencia
        await expect(page.locator('[ng-show="(item.planoexperiencia)"]')).toBeVisible();

        //local de experiencia
        await expect(page.locator('[ng-show="(item.localexperiencia)"]')).toBeVisible();

        //valor prestação
        await expect(page.locator('.layout-align-gt-sm-center-end > .list-title > b')).toBeVisible();

        //quantidade do valor prestação 
        await expect(page.locator('.layout-align-gt-sm-center-end > .list-title')).toBeVisible();
    }
}
