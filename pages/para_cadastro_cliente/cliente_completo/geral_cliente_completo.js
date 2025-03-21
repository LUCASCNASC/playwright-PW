import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../gerarDados';
import { gerarChavePixTelefone } from '../../gerarDadosPIX'

export class GeralClienteCompleto {

    constructor(page) {
        this.page = page
    }

    //validar botão salvar sem ter os campos obrigatórios, ou seja, tem que estar desabilitado
    async botaoSalvarDesabilitado (selector) {

        //Validando botão SALVAR, antes de preencher os campos obrigatórios
        cy.get('#btnModalAddEndereco')
            .should('be.visible')
            .and('not.have.attr', 'not.disabled')
    }

    //clicar para salvar cadastro de cliente completo
    async clicarSalvarClienteCompleto (selector) {

        cy.get('.btn > .ng-scope')
            .click({force:true})
    }

    //validar menssagem Um endereço do tipo padrão é obrigatório, quanto tento salvar cadastro sem informar endereço
    async messAlertaEnderecoObrigatorio (selector) {

        //Card Um endereço do tipo padrão é obrigatório
        cy.get('.toast')
            .should('be.visible')

        //Card Um endereço do tipo padrão é obrigatório - Alerta
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text', 'Alerta')

        //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Um endereço do tipo padrão é obrigatório.')
    }

    //validando modal de Aguarde carregando.. - após clicar para salvar o cadastro 
    async modalAguardeCarregando (selector) {

        //Modal Aguarde carregando...
        cy.get('.layout-align-center-center > h3')
            .should('be.visible')
            .and('have.text', 'Aguarde carregando...')
    }

    //validando mensagem Registro salvo com sucesso! - após clicar para salvar o cadastro 
    async messRegistroSalvoSucesso (selector) {

        //Mensagem Registro salvo com sucesso!
        cy.get('.toast-success')
            .should('be.visible')

        //Mensagem Registro salvo com sucesso! - Aviso
        cy.get(':nth-child(1) > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Mensagem Registro salvo com sucesso! - Registro salvo com sucesso!
        cy.get('.toast-success > .toast-message')
            .should('be.visible')
            .and('have.text', 'Registro salvo com sucesso!')
    }
}