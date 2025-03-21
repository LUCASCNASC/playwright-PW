import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../gerarDados';
import { gerarChavePixTelefone } from '../../gerarDadosPIX'

export class ClicarClienteCompleto {

    constructor(page) {
        this.page = page
    }

    //Validar e clicar no menu de opções
    async iconeMenuOpcoes (selector) {

        //Ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
                
        //Clicar ni ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .click({force:true})
    }

    //Escolher opção cliente no menu de opções
    async opcaoClienteCompleto (selector) {

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('have.attr', 'aria-label', 'Cliente completo')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .scrollIntoView()
            .click({force:true})
    }

    //Validar e clicar no botão para salvar cadastro de cliente
    async salvarCliente (selector) {

        //Botão SALVAR
        cy.get('.btn')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.have.attr', 'disabled')
        
        //Clicar no botão SALVAR
        cy.get('.btn')
            .click({force:true})
    }

    //clicar para salvar cadastro de cliente completo
    async salvarClienteCompleto (selector) {

        cy.get('.btn > .ng-scope')
            .click({force:true})
    }

    //dentro do cadastro de cliente completo, clicar no menu para aparecer as opções dentro do cadastro
    async menuCadastroClienteCompleto (selector) {

        cy.get('#menu_click_pri')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        cy.get('#menu_click_pri')
            .click()
    }

    //validar e clicar na aba Referencias - mais de um arquivo usa essa função, então precisamos deixar aqui
    async abaReferencias (selector) {

        //validando nome da aba
        cy.get('#menu_items_pri > :nth-child(5)')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
            //.and('have.text', 'Referências')

        cy.intercept('GET', '/views/cliente/refEtapaPessoalLista.html').as('api_referencias')
        //clicar para entrar na aba referencias
        cy.get('#menu_items_pri > :nth-child(5)')
            .click()
        cy.wait('@api_referencias', { timeout: 40000 })
    }
}