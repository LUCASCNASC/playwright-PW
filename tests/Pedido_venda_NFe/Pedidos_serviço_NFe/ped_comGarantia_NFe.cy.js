import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'
import { ValidarServico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'

describe('Gerar pedidos com Garantia', () => {

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
        GeralProduto.clicarVoltagemProduto() //PRODUTO
        GeralProduto.clicarAdicionarProduto()
        Servico.validarModalServVinc()
    })   

    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS 
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc()
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

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS - SEGUNDO PRODUTO
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
    
        it('3. Ped venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
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

        it('4. Ped venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS - SEGUNDO PRODUTO
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
    
        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            Servico.maoObraNaoDestSepaProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif()
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

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraNaoDestSepaProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS - SEGUNDO PRODUTO
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

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc()
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

        it('8. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc() //SERVIÇOS
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

        it('9. Ped venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
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

        it('10. Ped venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc() //SERVIÇOS
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

        it('11. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            Servico.maoObraNaoDestSepaProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif()
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

        it('12. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.maoObraNaoDestSepaProcDif() //Marcar Garantia separa titulo em um processo diferente
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc() //SERVIÇOS
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