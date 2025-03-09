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

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

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
    
        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
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

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
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

        it('3. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('4. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc() //SERVIÇOS - SEGUNDO PRODUTO
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

        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.clicarOKServVinc() //SERVIÇOS
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

        it('7. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
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

        it('8. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.primeiro() //ENTREGA
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVIÇOS
            Servico.clicarOKServVinc()
            TirarEntrega.segundo() //ENTREGA
            AvancarNormal.paraParcelas() 
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento() 
            Recebimento.principal()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('9. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('10. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('11. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('12. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('13. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
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

        it('14. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
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

        it('15. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('16. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('17. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('18. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('19. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
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

        it('20. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
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

        it('21. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('22. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('23. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('24. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('25. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
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

        it('26. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
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

        it('27. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('28. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('29. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('30. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('31. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
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

        it('32. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
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

        it('33. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('34. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
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

        it('35. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
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

        it('36. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
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
    })
})