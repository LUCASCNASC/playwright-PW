import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { PedExclusiva } from '../../../../pages/para_pedidos/para_pedidos_exclusiva.js'
import { ProdutoExclusiva } from '../../../../pages/produtos/prd_exclusiva.js'
import { GeralPedido } from '../../../../pages/para_pedidos/gerais_pedidos.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_produto.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        //cenário dependente - não colocar no fluxo
        it.skip('1. Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            ProdutoExclusiva.PrimeiroNormal() //PRODUTO EXCLUSIVA
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() 
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            ProdutoExclusiva.kitSemSaldoAgendamento() //PRODUTO KIT
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto()
            GeralPedido.trocarFilialFaturamento()
            GeralProduto.clicarAdicionarProduto()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('2. Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            ProdutoExclusiva.PrimeiroNormal() //PRODUTO
            GeralProduto.escolherProdutoPesquisa()      
            GeralProduto.clicarVoltagemProduto() 
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            ProdutoExclusiva.kitVolumes() //PRODUTO KIT
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto()
            GeralProduto.clicarAdicionarProduto()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        //cenário dependente - não colocar no fluxo
        it.skip('3. Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            ProdutoExclusiva.SaldoReceber() //PRODUTO
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() 
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('4. Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            ProdutoExclusiva.SaldoRecebDuasLinhas() //PRODUTO
            PedExclusiva.saldoRemotoAReceber()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() 
            GeralPedido.trocarFilialFaturamento()
            PedExclusiva.aumentarQuantVendaCinco()
            GeralProduto.clicarAdicionarProduto()
            ProdutoExclusiva.SaldoRecebDuasLinhas() //SEGUNDO PRODUTO
            PedExclusiva.saldoRemotoAReceber()
            GeralProduto.escolherProdutoPesquisa()  
            GeralProduto.clicarVoltagemProduto() 
            GeralPedido.trocarFilialFaturamento()
            PedExclusiva.aumentarQuantVendaDez()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('5. Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            ProdutoExclusiva.PrimeiroNormal() //PRODUTO EXCLUSIVA
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto()
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})