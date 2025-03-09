import { GeralClienteCompleto } from '../../../../pages/para_cadastro_cliente/cliente_completo/geral_cliente_completo';
import { ClicarClienteCompleto } from '../../../../pages/para_cadastro_cliente/cliente_completo/clicar_cliente_completo';
import { GeralAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/geral_anexo';
import { PreencherCampoAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/preencher_anexo';
import { PreencherPessoa } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/preencher_pessoa';
import { GeralRefBancaria } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/geral_ref_bancaria';
import { PreencherRefBancaria } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/preencher_ref_bancaria';
import { GeralRefComercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/geral_ref_comercial';
import { PreencherRefComercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/preencher_ref_comercial';
import { GeralRefFinanceira } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/geral_ref_financeira';
import { PreencherRefFinanceira } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/preencher_ref_financeira';
import { GeralRefPessoal } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/geral_ref_pessoal';
import { PreencherRefPessoal } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/preencher_ref_pessoal';
import { GeralRota } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/geral_rota';
import { PreencherRota } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/preencher_rota';
import { GeralTelefone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/geral_telefone';
import { PreencherTelefone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/preencher_telefone';
import { GeralEndereco } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/geral_endereco';
import { PreencherEndereco } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/preencher_endereco';


describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Cadastro de cliente completo - básico ', () => {

        it('1. Cliente completo CPF', () => {

            GeralClienteCompleto.iconeMenuOpcoes() //PESSOA
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()

            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('2. Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()

            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClicarClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('3. Cliente completo CNPJ', () => {
    
            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cnpjCliente() //PESSOA
            PreencherPessoa.nomeCNPJ()
            PreencherPessoa.nomeFantasiaCNPJ()

            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4. Cliente completo CPF - caminho feliz', () => {GeralClienteCompleto.

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()

            ClicarClienteCompleto.menuCadastroClienteCompleto()
            GeralAnexo.clicarAbaAnexo() //CADASTRAR ANEXO 
            GeralAnexo.validarAbaAnexoVazia()
            GeralAnexo.selecionarPrimeiroTipoAnexo()
            PreencherCampoAnexo.anexarArquivoPFD()
            GeralAnexo.confirmarEnvioArquivo()
            GeralAnexo.messAnexoIncluidoSucesso()
            GeralAnexo.validarAnexoInserido()
            
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })
    })

    context('Cadastro de cliente completo - incluindo referencia bancária', () => {

        it('5. Cliente completo CPF - tipo de chave PIX Telefone correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()


            PreencherRefBancaria.tipoChavePixTelefone()
            PreencherRefBancaria.chavePixTelefone()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('6. Cliente completo CPF - tipo de chave PIX Email correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixEmail()
            PreencherRefBancaria.chavePixEmail()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('7. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixCpfCnpj()
            PreencherRefBancaria.chavePixCPF()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('8. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixAletoria()
            PreencherRefBancaria.chavePixAleatorio()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('9. Cliente completo CPF - validar tipo de chave PIX Telefone incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixTelefone()
            PreencherRefBancaria.chavePixTelefoneErrada()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixTelefoneInvalida()
        })  

        it('10. Cliente completo CPF - validar tipo de chave PIX Email incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixEmail()
            PreencherRefBancaria.chavePixEmailErrada()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixEmailInvalida()
        })  

        it('11.Cliente completo CPF - validar tipo de chave CPF CNPJ incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixCpfCnpj()
            PreencherRefBancaria.tipoChavePixAletoria()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixCpfCnpjInvalida()
        })  

        it('12.Cliente completo CPF - validar tipo de chave Aleatória incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixAletoria()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixAletoriaInvalida()
        })  
    })

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

        it('13. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefPessoal.clicarAbaRefPessoal()
            GeralRefPessoal.validarAbaRefPessoalVazia() //CADASTRAR REFERENCIA PESSOAL
            GeralRefPessoal.clicarAddNovaRefPessoal()
            PreencherRefPessoal.nome()
            PreencherRefPessoal.email()
            PreencherRefPessoal.telefone()
            PreencherRefPessoal.relacionamento()
            GeralRefPessoal.clicarSalvar()
            GeralRefPessoal.messRefPessoalIncluidaSucesso()
            GeralRefPessoal.infosAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia comercial', () => {

        it('14. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefComercial.clicarAbaRefComercial() //CADASTRAR REFERENCIA COMERCIAL
            GeralRefComercial.validarAbaRefComercialVazia()
            GeralRefComercial.clicarAddNovaRefComercial()
            PreencherRefComercial.empresa()
            PreencherRefComercial.contato()
            PreencherRefComercial.telefone()
            PreencherRefComercial.email()
            PreencherRefComercial.observacao()
            GeralRefComercial.clicarSalvarRefComercial()
            GeralRefComercial.infosRefComercialAdicionada()
            GeralRefComercial.messRefComercialIncluidaSucesso()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it('15. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefFinanceira.clicarAba() //CADASTRAR REFERENCIA FINANCEIRA
            GeralRefFinanceira.validarAbaVazia()
            GeralRefFinanceira.clicarAddNova()
            PreencherRefFinanceira.dataInicio()
            PreencherRefFinanceira.localExp()
            PreencherRefFinanceira.planoExp()
            PreencherRefFinanceira.valorPrest()
            GeralRefFinanceira.clicarSalvar()
            GeralRefFinanceira.messRefFinanceiraIncluidaSucesso()
            GeralRefFinanceira.infosRefFinanceiraAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo Empregatício', () => {

        it('16. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.tipoEndereco()
            GeralEndereco.clicarAbrirTipoEndereco()
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.clicarSalvarEndereco()
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //CADASTRAR ROTA
            GeralRota.clicarAdicionarNovaRota()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            GeralTelefone.messTelefoneIncluidoSucesso()

            GeralEmpregaticio.clicarAbaEmpregat() //CADASTRAR EMPREGATÍCIO
            GeralEmpregaticio.validarAbaEmpregatVazia()
            GeralEmpregaticio.clicarAddNovoEmpregat()
        }) 
    })
})