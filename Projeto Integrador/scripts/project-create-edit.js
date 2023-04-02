// Pega os parametros da url -> ?id=1
const urlSearchParams = new URLSearchParams(window.location.search);
// O método Object.fromEntries() para converter o objeto urlSearchParams em um objeto JavaScript comum chamado params. O objeto params contém os parâmetros da URL como chaves e seus valores como valores.
const params = Object.fromEntries(urlSearchParams.entries());

/*
A variável screenType é definida com base no valor do parâmetro id na URL. Se id estiver presente na URL, isso significa que um serviço existente está sendo editado, portanto, screenType será definido como "edit". 
Caso contrário, significa que um novo serviço está sendo criado, então screenType será definido como "create".
*/
const screenType = params.id ? 'edit' : 'create';

// Funções chamadas ao carregar a página
window.onload = function(){
    setScreenTypeTexts();

    fillInputs();
}

/*
A função fillInputs funciona da seguinte forma, se screenType for "edit", a função faz uma solicitação GET para obter as informações do serviço da API usando o ID fornecido na URL. Em seguida, ele preenche os campos de entrada do 
formulário da página com as informações do serviço recuperadas. Se screenType for "create", a função não faz nada.
*/
function fillInputs(){
    if (screenType === 'edit')
    {
        fetch(`https://64239ac6001cb9fc20423db3.mockapi.io/api/services/${params.id}`)
        .then(response => response.json())
        .then(project =>{
            document.querySelector("#title").value = project.title;
            document.querySelector("#totalCost").value = project.totalCost;
            document.querySelector("#description").value = project.description;
        })
    }
}

/*
Esta função é responsável por definir o texto apropriado para o título principal da página e o botão de ação, com base no tipo de tela determinado anteriormente. 
Se screenType for "create", a função altera o texto do título principal para "Vamos cadastrar seu novo serviço" e o texto do botão de ação para "Cadastrar". 
Se screenType for "edit", a função altera o texto do título principal para "Editar serviço" e o texto do botão de ação para "Salvar". Isso é importante para fornecer instruções claras e precisas 
para o usuário sobre o que fazer na página, dependendo do tipo de tela em que eles estão.
*/
function setScreenTypeTexts()
{
    if (screenType == 'create')
    {
        document.querySelector('#main-title').innerText = "Vamos cadastrar seu novo serviço";
        document.querySelector('#action-button').innerText = "Cadastrar"
    }

    if (screenType == 'edit')
    {
        document.querySelector('#main-title').innerText = "Editar serviço";
        document.querySelector('#action-button').innerText = "Salvar"
    }
}

/*
Este trecho de código em JavaScript define uma função chamada createOrEdit() que é executada quando o usuário cria ou edita um serviço em uma página da web.
Ele começa criando um objeto JavaScript chamado payload, que contém as informações do serviço coletadas do formulário da página web. O objeto payload é enviado para a API como corpo da requisição usando o método fetch().
A URL da API que será chamada depende do valor da variável screenType. Se screenType for "edit", a URL será "https://64239ac6001cb9fc20423db3.mockapi.io/api/services/{id}", onde "{id}" é o ID do serviço que está sendo editado. 
Caso contrário, a URL será "https://64239ac6001cb9fc20423db3.mockapi.io/api/services".
Dependendo do valor de screenType, o método HTTP usado na requisição será "PUT" para editar um serviço existente ou "POST" para criar um novo serviço.
Depois que a resposta é recebida, o código converte o resultado em um objeto JavaScript usando o método json() da resposta. Em seguida, ele exibe uma mensagem de sucesso usando a biblioteca de alerta "SweetAlert" (também conhecida como "Swal"), com um ícone de sucesso.
Finalmente, o código redireciona o usuário para uma página de listagem de serviços, definindo window.location.href como a URL da página de listagem.
*/
function createOrEdit()
{
    let payload = {
        title: document.querySelector("#title").value,
        totalCost: document.querySelector("#totalCost").value,
        description: document.querySelector("#description").value,
        idClient: localStorage.getItem("idClient")
    }

    fetch(`https://64239ac6001cb9fc20423db3.mockapi.io/api/services${screenType === 'edit' ? ('/' + params.id) : ''}`, {
        method: screenType === 'edit' ? 'PUT' : 'POST',
        body: JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (screenType === 'edit') {
          Swal.fire({
            title: 'Bom trabalho!',
            text: "Serviço editado com sucesso",
            icon: 'success',
          }).then(() => {
            window.location.href = "list.html";
          });
        } else {
          Swal.fire({
            title: 'Bom trabalho!',
            text: "Serviço criado com sucesso",
            icon: 'success',
          }).then(() => {
            window.location.href = "list.html";
          });
        }
      })
}


 