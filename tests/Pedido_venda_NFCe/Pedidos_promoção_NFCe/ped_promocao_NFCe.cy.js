import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { RecebimentoPromo } from '../../../../pages/para_pedidos/processos/processo_recebimento_promo.js'
import { Promocao } from '../../../../pages/para_pedidos/promocao/promocao.js'

describe('Gerar pedidos com promoção com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFCe()
        EscolherCliente.comRota()
    })

    context('Com entrega /com promoção/ processo 9890 - caminho feliz', () => {

        //verificar 
        it.skip('1. Ped venda com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Produto.promoPartida() //PRODUTO
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao() 
            GeralProduto.clicarVoltagemProduto()
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.pagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    
        //verificar 
        it.skip('2. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Produto.promoPrazoEntrada() //PRODUTO
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao() 
            GeralProduto.clicarVoltagemProduto()
            Promocao.selecionarPrimeiraPromoProduto() //PROMOÇÃO
            RecebimentoPromo.pagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()

            //"GERAR PAGAMENTO"
            cy.get('.layout-wrap > .md-primary').scrollTo('top').wait(200)
            cy.contains('.md-select-value', 'Forma de pagamento').click()
            // cy.get('.white > :nth-child(3)').click({force:true})
            // cy.contains('3861 - T.A. A Receber A Vista').click({force:true})

            // GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            // Recebimento.principal()()
            // EscolherParcelaReceb.duas()
            // AvancarNormal.final()
            // FinalizarPed.clicarFinalizarPed() //RESUMO
            // FinalizarPed.validarPedGerado()
        })

        //verificar 
        it.skip('3. Ped venda com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Produto.promoPrazoParcelado() //PRODUTO
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto()
            Promocao.selecionarPrimeiraPromoProduto() //PROMOÇÃO
            RecebimentoPromo.pagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })  
    })
})