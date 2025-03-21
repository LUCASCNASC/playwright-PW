export class PreencherCampoAnexo {

    constructor(page) {
        this.page = page
    }

    //função para anexar arquivo dentro do cadastro de cliente completo
    async arquivoPFD (selector) {

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