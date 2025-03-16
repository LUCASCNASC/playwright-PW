export class Login {

    constructor(page) {
        this.page = page
    }

    //Validando Logo da empresa
    async logoEmpresaLogin (selector) {

        //Validar o logo da empresa
        await page.locator('.logo').toBeVisible()
    }

    //Validando Ícone do computador
    async iconeComputadorLogin (selector) {

        //Ícone do computador
        await page.locator('[ng-click="clienteStatsOpen()"] > .ng-binding').toBeVisible()
    }

    //Validando texto usuário, acima do campo usuário e validando ícone do usuário
    async usuarioTextoIcone (selector) {

        //Validando Texto "Usuário" acima do campo informe sue usuário
        await expect(page.locator('label[for="txtusername"]')).toBeVisible().toHaveText('Usuário')

        //Ícone do campo informe seu usuário
        await page.locator(':nth-child(3) > .name').toBeVisible()
    }

    //Validando texto Senha, acima do campo usuário e validando ícone da Senha
    async senhaTextoIcone (selector) {
        
        //Validando Texto "Senha" acima do campo informe sua senha
        await expect(page.locator('label[for="txtpassword"]')).toBeVisible().toHaveText('Senha')

        //Ícone de senha
        await expect(page.locator('.md-icon-right > .name')).toBeVisible()
    }

    //Ícone de visualizar senha
    async iconeOlhosSenha (selector) {

        //ícone de olho, para ver a senha
        await expect(page.locator('.md-icon-right > .md-primary')).toBeVisible().not.toHaveAttribute('disabled')
    }

    //Botão Esqueceu Senha
    async botaoEsqueceuSenha (selector) {

        //Botão/mensagem "Esqueceu a senha?"
        await expect(page.locator('div[ng-click="modalSenhaNovaOpen()"]')).toBeVisible().not.toHaveAttribute('disabled')
    }

    //Botão entrar habilitado
    async botaoEntrarHabilitado (selector) {

        //Botão ENTRAR
        await expect(page.locator('.test_btnSalvarCliente')).toBeVisible().toHaveText('Entrar').not.toHaveAttribute('not.disabled')
    }

    //Botão entrar desabilitado
    async botaoEntrarDesabilitado (selector) {

        //Botão ENTRAR
        await expect(page.locator('.test_btnSalvarCliente')).toBeVisible().toHaveText('Entrar').not.toHaveAttribute('disabled')
        cy.get('.test_btnSalvarCliente')
            .should('be.visible')
            .and('have.text','Entrar')
            .and('not.have.attr', 'not.disabled')
    }

    //Clicar no botão entrar
    async clicarBotaoEntrar (selector) {

        //Clicar no botão ENTRAR
        await page.click('.md-list-test_btnSalvarCliente-text')
    }

    //Mensagem Entrando no sistema
    async mensagemEntrandoSistema (selector) {

        //Mensagem "Entrando no sistema"
        await expect(page.locator('.ng-scope > .ng-binding')).toBeVisible().toHaveText('Entrando no sistema')
    }

    //botao INICIAR ATENDIMENTO - validando que entrou no sistema
    async botaoIniciarAtendimento (selector) {

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        await expect(page.locator('.md-raised > .truncate')).toBeVisible()
    }

    //validando mensagem de Login ou senha estão incorretos
    async messLoginSenhaIncorreto (selector) {

        //Mensagem de senha errada
        await expect(page.locator('.toast')).toBeVisible()

        //Mensagem "Atenção"
        await expect(page.locator('.toast-title')).toBeVisible().toHaveText('Atenção').not.toHaveAttribute('disabled')

        //Mensagem "Login ou Senha do usuário está incorreto."
        await expect(page.locator('.toast-message')).toBeVisible().toHaveText('Login ou Senha do usuário está incorreto.').not.toHaveAttribute('disabled')

        //Botão X para fechar mensagem
        await expect(page.locator('.toast-close-button')).toBeVisible()
    }

    // Card de expira acesso - "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
    async expiraAcessoCardValidar (selector) {

        //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
        await expect(page.locator('.md-dialog-content-body > .ng-binding')).toBeVisible().toHaveText('Falta(m) "1" dia(s) para sua Senha expirar.\r\nDeseja trocar sua Senha agora?')

        //Card de expira acesso - NÃO
        await expect(page.locator('.md-cancel-button')).toBeVisible().toHaveText('NÃO').not.toHaveAttribute('disabled')

        //Card de expira acesso - SIM
        await expect(page.locator('.md-confirm-button')).toBeVisible().toHaveText('SIM').not.toHaveAttribute('disabled')
    }

    //Card de expira acesso - clicar em SIM
    async clicarSIMExpira (selector) {

        //Card de expira acesso - clicar em SIM
        await page.click('.md-confirm-button')

        //Mensagem "Aguarde carregando...", após clicarmos em SIM
        await expect(page.locator('center')).toBeVisible().toHaveText('Aguarde carregando...')
    }

    //Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
    async regrasNovaSenhaAntes (selector) {

        //Validar a primeira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        await expect(page.locator('span', { hasText: 'Ao menos 1 letra maiúscula ou minúscula.' })).toBeVisible().toHaveCSS('color', 'rgb(204, 0, 0)')

        //Validar a terceira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        await expect(page.locator('span', { hasText: 'Ao menos 1 algarismo.' })).toBeVisible().toHaveCSS('color', 'rgb(204, 0, 0)')

        //Validar a quarta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        await expect(page.locator('span', { hasText: 'Ao menos 1 caractere especial.' })).toBeVisible().toHaveCSS('color', 'rgb(204, 0, 0)')

        //Validar a quinta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        await expect(page.locator('span', { hasText: 'A nova senha não pode ser a atual.' })).toBeVisible().toHaveCSS('color', 'rgb(204, 0, 0)')

        //Validar a sexta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        await expect(page.locator('span', { hasText: 'As novas senhas informadas são iguais.' })).toBeVisible().toHaveCSS('color', 'rgb(204, 0, 0)')
    }

    //Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
    async regrasNovaSenhaDepois (selector) {

        //Validar a primeira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
        await expect(page.locator('span', { hasText: 'Ao menos 8 caracteres' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')

        //Validar a segunda Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
        await expect(page.locator('span', { hasText: 'Ao menos 1 letra maiúscula ou minúscula' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')

        //Validar a terceira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
        await expect(page.locator('span', { hasText: 'Ao menos 1 algarismo' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')

        //Validar a quarta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
        await expect(page.locator('span', { hasText: 'Ao menos 1 caractere especial' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')

        //Validar a quinta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
        await expect(page.locator('span', { hasText: 'A nova senha não pode ser a atual' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
        await expect(page.locator('span', { hasText: 'As novas senhas informadas são iguais' })).toBeVisible().toHaveCSS('color', 'rgb(0, 100, 0)')
    }

    //validar card "Sua Senha expirou" quando a senha do usuário está expirada
    async messSenhaUsuarioExpirada (selector) {

        //Mensagem "Seu acesso ao sistema expirou."
        await expect(page.locator('.md-dialog-content-body')).toBeVisible().toHaveText('Sua Senha expirou...')

        //Botão OK da mensagem "Seu acesso ao sistema expirou."
        await expect(page.locator('md-dialog-actions > .md-primary')).toBeVisible().toHaveText('Ok').not.toHaveAttribute('disabled')

        //Clicar no botão OK da mensagem "Seu acesso ao sistema expirou."
        await page.click('.md-dialog-actions > .md-primary')
    }
}