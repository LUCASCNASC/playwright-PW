//Comando personalizado para validar url da opção menu Departamentos
export async function validateUrlDepartamento(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/departamentos/');
}

//Comando personalizado para validar url da opção menu Serviços
export async function validateUrlServicos(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/servicos');
}

//Comando personalizado para validar url da opção menu Pedidos pendentes
export async function validateUrlPedidosPendentes(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/vendedor/pedidos');
}

//Comando personalizado para validar url da opção menu Cliente
export async function validateUrlCliente(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/cliente/cliente-cadastro');
}

//Comando personalizado para validar url da opção menu Cliente Completo
export async function validateUrlClienteCompleto(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/clienteCompleto');
}

//Comando personalizado para validar url da opção menu Pós venda
export async function validateUrlPosVenda(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/posvenda');
}

//Comando personalizado para validar url da opção menu Intenção de compra
export async function validateUrlIntencaoCompra(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/intencoescompra');
}

//Comando personalizado para validar url da opção menu Configurações
export async function validateUrlConfiguracoes(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/customizacao');
}

//Comando personalizado para validar url da opção menu Minha performance
export async function validateUrlMinhaPerformance(page) {

    const path = new URL(page.url()).pathname;
    expect(path).toBe('/#!/vendedor');
}