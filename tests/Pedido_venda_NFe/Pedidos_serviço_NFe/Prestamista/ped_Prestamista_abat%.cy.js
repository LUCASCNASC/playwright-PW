import { ProcessoVenda } from '../../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../../pages/produtos/gerais_pedido.js'
import { Servico } from '../../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { AgruparReceb } from '../../../../pages/para_pedidos/pagamento/agrupar_recebimento.js'
import { Recebimento } from '../../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { RecebimentoPromo } from '../../../../../pages/para_pedidos/processos/processo_recebimento_promo.js'
import { ValidarServico } from '../../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { Promocao } from '../../../../../pages/para_pedidos/promocao/promocao.js'
import { TicketPrestamista } from '../../../../../pages/para_pedidos/validar_tela/prestamista.js'


describe('Gerar pedidos com serviço Prestamista Abatimento % (158)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })   

    context('Sem entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('1. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.futPrestComJuros()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.primeiro()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.presentePrest()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('3. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
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
            Recebimento.futPrestSemJuros()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
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
            Recebimento.futPrestComJuros()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.futPrestSemJuros()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('6. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            GeralPagamento.clicarGerarParcelas() //GERAR PARCELAS
            GeralPagamento.carregandoFormaPagamento()
            Recebimento.presentePrest()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('7. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('8. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('9. Ped venda: produto 1918 0 0 (promoção a prazo 167), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('10. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            GeralPagamento.inserirDataAmanha1Vencimento()
            cy.wait(4000)
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            EscolherParcelaReceb.uma()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            avancAvancarNormal.finalarFinal()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('11. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            cy.wait(4000)
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            EscolherParcelaReceb.uma()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
        
        it('12. Ped venda: produto 1920 0 0 (promoção partida 169), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.partPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            TirarEntrega.primeiro()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Sem entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('13. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntTirarEntrega.primeirorega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('14. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirData31Dias1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.futPrestComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.agruparLancamentos()
            ValidarServico.messPrestRemovido()
            ValidarServico.addSeguroPrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('15. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('16. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            TirarEntrega.segundo()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirData31Dias1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futPrestSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.agruparLancamentos()
            ValidarServico.messPrestRemovido()
            ValidarServico.addSeguroPrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('17. Ped venda: produto 1921 0 0 (promo a prazo 170), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            TirarEntrega.primeiro()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('18. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('19. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirData31Dias1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futPrestComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.agruparLancamentos()
            ValidarServico.messPrestRemovido()
            ValidarServico.addSeguroPrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('20. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.principal()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('21. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.prazoFutSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS)
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirData31Dias1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futPrestSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.agruparLancamentos()
            ValidarServico.messPrestRemovido()
            ValidarServico.addSeguroPrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('22. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3874), prestamista 158, 4 parcelas no recebimento Presente.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.partPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirDataAmanha1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.segundaForma()
            EscolherParcelaReceb.uma()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('23. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3875 agrupar), prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; Promocao.ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            Promocao.selecionarPrimeiraPromoProduto()
            RecebimentoPromo.partPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc() //SERVIÇOS)
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            ValidarServico.garantiaNaoSep()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.quatro()
            ValidarServico.okSeguroPrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.inserirData31Dias1Vencimento()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.presentePrest()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.agruparLancamentos()
            ValidarServico.messPrestRemovido()
            ValidarServico.addSeguroPrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})