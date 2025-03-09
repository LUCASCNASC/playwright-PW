import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'

describe('Gerar pedidos com Garantia e com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFCe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
        GeralProduto.clicarVoltagemProduto() //PRODUTO
        GeralProduto.clicarAdicionarProduto()
        Servico.validarModalServVinc() //SERVICOS
    })   

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            Servico.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            Servico.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega() 
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            Servico.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega() 
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc() //SERVIÇOS
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            GeralEntrega.escolherTransportadora()
            AvancarNormal.parcelasEntrega()
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