import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { GeralMuitosPrd } from '../../../../pages/para_pedidos/ped_muitos_produtos/geral_muitos_produtos.js'
import { AddMuitosProdutos } from '../../../../pages/para_pedidos/ped_muitos_produtos/produtos_muitos_produtos.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'

describe('Gerar pedido normal - sem serviço vinculado e tirar a entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })

    context('Sem enterga/ processo 9860 - caminho feliz - produtos sem serviço', () => {

        //verificar 
        it.skip('1. Ped venda: produto 1907 e suas voltagens 1 1 a 40 40', () => {

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto1() //produto - 1907 1 1

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto2() //produto - 1907 2 2

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto3() //produto - 1907 3 3

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto4() //produto - 1907 4 4

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto5() //produto - 1907 5 5

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto6() //produto - 1907 6 6

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto7() //produto - 1907 7 7

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto8() //produto - 1907 8 8

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto9() //produto - 1907 9 9

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto10() //produto - 1907 10 10

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto11() //produto - 1907 11 11

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto12() //produto - 1907 12 12

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto13() //produto - 1907 13 13 

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto14() //produto - 1907 14 14

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto15() //produto - 1907 15 15

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto16() //produto - 1907 16 16

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto17() //produto - 1907 17 17

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto18() //produto - 1907 18 18

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto19() //produto - 1907 19 19

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto20() //produto - 1907 20 20

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto21() //produto - 1907 21 21

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto22() //produto - 1907 22 22

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto23() //produto - 1907 23 23

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto24() //produto - 1907 24 24

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto25() //produto - 1907 25 25

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto26() //produto - 1907 26 26

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto27() //produto - 1907 27 27

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto28() //produto - 1907 28 28

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto29() //produto - 1907 29 29

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto30() //produto - 1907 30 30

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto31() //produto - 1907 31 31

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto32() //produto - 1907 32 32

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto33() //produto - 1907 33 33

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto34() //produto - 1907 34 34

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto35() //produto - 1907 35 35

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto36() //produto - 1907 36 36

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto37() //produto - 1907 37 37

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto38() //produto - 1907 38 38

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto39() //produto - 1907 39 39

            GeralMuitosPrd.prdPrincipal() //pesquisa de produto
            GeralMuitosPrd.escolherPrdPesquisa()
            AddMuitosProdutos.addproduto40() //produto - 1907 40 40

            
        })
    })

    // afterEach(() => {
    //     FinalizarPed.clicarFinalizarPed() //RESUMO
    //     FinalizarPed.validarPedGerado()
    //   });
})