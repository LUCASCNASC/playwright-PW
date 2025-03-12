import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { PedServicoAvulso } from '../../../../pages/para_pedidos/para_servicos_avulsos.js'

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.vendaServicoAvulso()
        EscolherCliente.comRota()
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('1. Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            PedServicoAvulso.iconeMenuOpcoes()
            PedServicoAvulso.clicarServicosMenu()
            PedServicoAvulso.produtoServicoHost() //PRODUTO
            PedServicoAvulso.escolherServicoPesquisa()
            PedServicoAvulso.escolherValorRecarga()
            PedServicoAvulso.clicarCarrinhoCompras() //CARRINHO COMPRAS
            PedServicoAvulso.botaoAvancarPedido()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})