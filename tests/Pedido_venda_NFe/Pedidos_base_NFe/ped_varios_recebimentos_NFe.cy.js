import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { AgruparReceb } from '../../../../pages/para_pedidos/pagamento/agrupar_recebimento.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'

describe('Gerar pedido com mais de uma forma de pagamento', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            AgruparReceb.primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.DebitoPOS()
            EscolherParcelaReceb.uma()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal() //SEGUNDA FORMA DE PAGAMENTO
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            GeralPagamento.escolherEntradaFormaPagamento()
            GeralPagamento.clicarGerarPagamento()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal() //SEGUNDA FORMA DE PAGAMENTO
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            AgruparReceb.primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal() //SEGUNDA FORMA DE PAGAMENTO
            EscolherParcelaReceb.uma()
            AgruparReceb.naoAgruparLancamentos()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            AgruparReceb.primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal() //SEGUNDA FORMA DE PAGAMENTO
            EscolherParcelaReceb.uma()
            AgruparReceb.agruparLancamentos()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            AgruparReceb.primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal() //SEGUNDA FORMA DE PAGAMENTO
            EscolherParcelaReceb.uma()
            AgruparReceb.naoAgruparLancamentos()
            AgruparReceb.selecionarLancAgrupar()
            AgruparReceb.clicarAgrupar()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})