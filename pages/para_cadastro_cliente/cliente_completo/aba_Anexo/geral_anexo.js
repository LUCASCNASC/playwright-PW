import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'


export class GeralAnexo {

    constructor(page) {
        this.page = page
    }
    
    //Validar e clicar na aba Telefone
    async clicarAbaAnexo (selector) {

        // Validando aba Telefones
        const abaTelefones = page.locator('#menu_mais_pri > :nth-child(4)');
        await expect(abaTelefones).toBeVisible();
        await expect(abaTelefones).not.toHaveAttribute('disabled', '');

        // Interceptar a requisição GET para '/services/v3/dados_tabela/tipoanexo'
        await page.route('**/services/v3/dados_tabela/tipoanexo', route => route.continue());

        // Clicar na aba Telefones
        await abaTelefones.click();

        // Esperar pela requisição interceptada
        await page.waitForResponse(response => response.url().includes('/services/v3/dados_tabela/tipoanexo') && response.status() === 200, { timeout: 40000 });
    }

    //validando informações da tela antes de fazer upload do arquivo anexo
    async validarAbaAnexoVazia (selector) {

        // Título "Anexos" quando entramos na aba
        const tituloAnexos = page.locator('[ng-controller="ListaDeAnexosController"] > :nth-child(1)');
        await expect(tituloAnexos).toBeVisible();
        await expect(tituloAnexos).toHaveText('Anexos');

        // Campo Tipo anexo
        const campoTipoAnexo = page.locator('#ComboTipoAnexo');
        await expect(campoTipoAnexo).toBeVisible();
        await expect(campoTipoAnexo).not.toHaveAttribute('disabled', '');

        // Mensagem "Tipo de anexo" dentro do campo tipo de anexo
        const labelTipoAnexo = page.locator('label[for="ComboTipoAnexo"]');
        await expect(labelTipoAnexo).toHaveText('Tipo de anexo');

        // Validando botão de anexar arquivo, desabilitado
        const botaoAnexarArquivo = page.locator('.area-botoes > .md-primary');
        await expect(botaoAnexarArquivo).toBeVisible();
        await expect(botaoAnexarArquivo).toHaveAttribute('disabled', '');

        // Mensagem "Não foi encontrado nenhum registro" quando ainda não há nada
        const mensagemNenhumRegistro = page.locator('.text-align-center');
        await expect(mensagemNenhumRegistro).toBeVisible();
        await expect(mensagemNenhumRegistro).toHaveText('Não foi encontrado nenhum registro');

        // Botão Salvar
        const botaoSalvar = page.locator('.btn');
        await expect(botaoSalvar).toBeVisible();
        await expect(botaoSalvar).not.toHaveAttribute('disabled', '');
    }

    //selecionando o tipo de anexo que quero colocar
    async selecionarPrimeiroTipoAnexo (selector) {

        // Clicar no campo Tipo de Anexo para abrir as opções
        const campoTipoAnexo = page.locator('#ComboTipoAnexo');
        await campoTipoAnexo.click();

        // Selecionar a opção de tipo de anexo
        const opcaoTipoAnexo = page.locator('div.md-text.ng-binding', { hasText: 'Assinatura do Termo de Adesão do Titular' });
        await opcaoTipoAnexo.click();
    }

    //clicando em SIM na mensagem "Deseja enviar o arquivo selecionado?"
    async confirmEnvioArquivo (selector) {

        // Mensagem "Deseja enviar o arquivo selecionado?" do modal
        const mensagemConfirmacao = page.locator('.md-title');
        await expect(mensagemConfirmacao).toBeVisible();
        await expect(mensagemConfirmacao).toHaveText('Deseja enviar o arquivo selecionado?');

        // Validando botão NÃO
        const botaoNao = page.locator('.md-cancel-button');
        await expect(botaoNao).toBeVisible();
        await expect(botaoNao).toHaveText('Não');
        // .invoke('css', 'Color') // Obtém a cor do elemento
        // .should('equal', 'rgb(65, 12, 224)')

        // Validando botão SIM
        const botaoSim = page.locator('.md-confirm-button');
        await expect(botaoSim).toBeVisible();
        await expect(botaoSim).toHaveText('Sim');
        // .invoke('css', 'color') // Obtém a cor do elemento
        // .should('equal', 'rgb(65, 12, 224)')

        // Clicar no botão SIM
        await botaoSim.click();
    }

    //mensagem de anexo incluído com sucesso
    async messAnexoIncluidoSucesso (selector) {

        // Card Endereço incluído com sucesso.
        const toast = page.locator('.toast');
        await expect(toast).toBeVisible();

        // Card Endereço incluído com sucesso. - Aviso
        const toastTitle = page.locator('.toast-title');
        await expect(toastTitle).toBeVisible();
        await expect(toastTitle).toHaveText('Aviso');

        // Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
        const toastMessage = page.locator('.toast-message');
        await expect(toastMessage).toBeVisible();
        await expect(toastMessage).toHaveText('Anexo cadastrado com sucesso!');
    }

    //validar se o anexo realmente foi adicionado
    async validarAnexoInserido (selector) {

        const hoje = new Date();
        const dataAtual = hoje.toLocaleDateString('pt-BR');

        // Card em geral
        const cardGeral = page.locator('.md-whiteframe-2dp');
        await expect(cardGeral).toBeVisible();

        // Mensagem "Anexo inserido em"
        const mensagemAnexoInserido = page.locator('small.list-title');
        await expect(mensagemAnexoInserido).toBeVisible();
        await expect(mensagemAnexoInserido).toContainText('Anexo inserido em');
        await expect(mensagemAnexoInserido).toContainText(dataAtual);
    }
}


