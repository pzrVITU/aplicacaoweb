/* Criação de uma variável let chamada lista, que será inicializada vazia */ 
let list = [];

/* Esse código define uma função que será executada quando a página for carregada no navegador, no caso, executará a função getProjects */ 
window.onload = function () {
    getServices();
}

/*  
    Essa função getServices seve basicamente para fazer um GET dos serviços que já foram cadastrados
    Nesse exemplo, utilizamos um fetch em uma API (essa api na verdade foi feita só um mock dela, só para ficar projetos cadastrados ao executar a aplicação, dito isso, só simula o funcionamento de um api)
    Logo após o fetch informando o URL da api, temos duas chamadas do método .then()
    A primeira chamada recebe um objeto response como argumento e converte o corpo da resposta em um objeto JSON utilizando o método .json()
    O resultando então da primeira chamada é retornada para a segunda chamada do método .then(), passando para a variável list que foi declarada acima o valor do objeto obtido no primeiro .then(), e, após
    isso, é realizado a chamada a uma função buildTable, que é uma função que serve basicamente para contruir a tabela
*/
function getServices() {
    fetch("https://64239ac6001cb9fc20423db3.mockapi.io/api/services")
    .then(response => response.json())
    .then(response => {
        list = response;
        buildTable();
    })
}

/* 
    A função goToEdit redireciona o usuário para a página "project-create-edit.html" passando um parâmetro "id" na URL.
    A URL é construída usando uma interpolação de string com o valor do parâmetro "id" passado como argumento da função.
*/
function goToEdit(id) {
    window.location.href = `project-create-edit.html?id=${id}`;
}

/*
    Essa função serve para fazer o DELETE de um serviço já cadastrado no mock da api que foi criada
    Basicamente, ela começa fazendo uma requisição através de fetch na URL da api, passando o Id como argumento da função
    Em seguida, temos dois métodos .then(), o primeiro .then() recebe o objeto response como argumento e converte o corpo da resposta em um objeto do tipo JSON através da utilização do método .json()
    Logo após, a segunda chamada do método .then() recebe o objeto do tipo JSON retornado na primeira chamada e atualiza a variável list, filtrando o serviço que possui o Id especificado
    Por fim, é realizado a chamada da função buildTable, que é uma função que serve basicamente para construir a tabela
*/
function deleteServices(id){
    fetch(`https://64239ac6001cb9fc20423db3.mockapi.io/api/services/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(response => {
        list = list.filter(service => service.id != id);

        buildTable();
    })
}

/* 
    A função buildTable é uma função que basicamente realizará a construção da tabela na página web
    A primeira parte da função limpa todo o código existente dentro do elemento HTML com o Id table-body
    Em seguida, é realizada um loop forEach dentro da variável list aonde, para cada elemento presente na lista, é construído um template através da variável template contendo os dados do elemento que 
    está sendo iterado, como o Título, Descrição e o Custo total. Ainda dentro do template, é contruído também uma div com a class actions, que basicamente conterá um ícone de um lápis para editar um projeto
    e um ícone de uma lixeira para deletar um projeto, que, ao serem clicados, realizará a chamada das funções deleteServices e goToEdit declaradas acima.
*/
function buildTable(){
    document.querySelector("#table-body").innerHTML = '';
    // const idClient = localStorage.getItem('idClient');

    // // Filtrar o serviço do cliente logado, ou seja, vai retornar só os serviços do cliente que está na plataforma
    // list = list.filter(el => el.idClient === idClient);

    list.forEach(el => {
        let template = `
            <div class="row">
                <div class="title-description">
                    <h6 class="title">${el.title}</h6>
                    <p class="description">${el.description}</p>
                </div>
                <div class="price">R$ ${el.totalCost}</div>
                <div class="actions">
                    <span class="edit material-symbols-outlined" onclick="goToEdit(${el.id})">
                        edit
                    </span>
                    <span class="delete material-symbols-outlined" onclick="deleteServices(${el.id})">
                        delete
                    </span>
                </div>
            </div>
        `

        document.querySelector("#table-body").insertAdjacentHTML("beforeend", template)
    });
}