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
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.finanBaixaNFe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
    })
  
    context('Sem entrega/ processo 9863 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas() 
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.segundo() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.paraParcelas() 
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
    
    context('Com entrega/ processo 9863 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})