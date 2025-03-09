import { PesquisaCliente } from '../../../pages/para_cadastro_cliente/para_pesquisa_cliente'

describe('Cadastrar cliente', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Pesquisa cliente por número', () => {

        it('1-Pesquisa por número CPF', () => {
    
            PesquisaCliente.inserirCPF()
            PesquisaCliente.clicarLupaPesquisaCliente()
            PesquisaCliente.cardClienteValidar()
            PesquisaCliente.digitarNovamenteCPF()
            PesquisaCliente.clicarCPFPesquisado()
            PesquisaCliente.mensagemAguardeCarregando()
            PesquisaCliente.numeroDescricaoCPFpesquisado()
        }) 

        it('2-Pesquisa por número CNPJ', () => {

            PesquisaCliente.inserirCNPJ()
            PesquisaCliente.clicarLupaPesquisaCliente()
            PesquisaCliente.cardClienteValidar()
            PesquisaCliente.digitarNovamenteCNPJ()
            PesquisaCliente.clicarLupaPesquisaCliente()
            PesquisaCliente.clicarCNPJPesquisado()
            PesquisaCliente.mensagemAguardeCarregando()
            PesquisaCliente.numeroDescricaoCNPJpesquisado()
        }) 
    })

    context('Pesquisa cliente por descrição', () => {

        it('3-Pesquisa por descrição CPF', () => {

            PesquisaCliente.inserirDescricaoCPF()
            PesquisaCliente.clicarLupaPesquisaCliente()
            PesquisaCliente.cardClienteValidar()
            PesquisaCliente.digitarNovamenteCPF()
            PesquisaCliente.clicarCPFPesquisado()
            PesquisaCliente.mensagemAguardeCarregando()
            PesquisaCliente.numeroDescricaoCPFpesquisado()
        }) 

        it('4-Pesquisa por descrição CNPJ', () => {

            PesquisaCliente.inserirDescricaoCNPJ()
            PesquisaCliente.clicarLupaPesquisaCliente()
            PesquisaCliente.cardClienteValidar()
            PesquisaCliente.digitarNovamenteCNPJ()
            PesquisaCliente.clicarCNPJPesquisado()
            PesquisaCliente.mensagemAguardeCarregando()
            PesquisaCliente.numeroDescricaoCNPJpesquisado()
        }) 
    })
})