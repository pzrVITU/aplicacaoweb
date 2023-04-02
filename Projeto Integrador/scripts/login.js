/*
    Essa função checkIfAnyRoleIsCheck verifica se pelo menos um dos radio buttons com o nome "role" foi selecionada
    Primeiro, a função usa o método "document.getElementsByName()" para obter uma lista de todos os radio buttons com o nome "role". 
    Em seguida, a função inicializa uma variável "counter" com um valor zero.
    Em seguida, a função usa um loop "for" para iterar sobre cada radio button na lista e verifica se o botão está marcado ou não. Se o botão não estiver marcado (checked === false), a variável "counter" é incrementada.
    Depois de iterar por todos os botões de rádio, a função compara o valor da variável "counter" com o comprimento da lista de botões de rádio. 
    Se o valor for diferente, significa que pelo menos um dos botões de rádio foi marcado, então a função retorna "true". Caso contrário, a função retorna "false".
*/
function checkIfAnyRoleIsChecked(){
    let list = document.getElementsByName("role");
    let counter = 0;

    for(let radioButton of list){
        if(radioButton.checked === false){
            counter++;
        }
    }

    return counter !== list.length;
}

/*
    Função cadastrar um novo usuário
*/
function cadastrar() {
    // Checa se alguma role foi checada.
    if(checkIfAnyRoleIsChecked() === false){
        // Caso nenhum role esteja checada, exibe uma janela modal de alerta usando a biblioteca SweetAlert2 (Swal)
        // Ela recebe três argumentos: o título da janela ("Algo deu errado..."), a mensagem de erro a ser exibida ("Marque alguma role!") e o tipo de ícone de erro que deve ser exibido na janela ("error").
        Swal.fire(
            'Algo deu errado...',   
            'Marque alguma role!',
            'error'
          )
        return; 
    }


    /*
    Inicia a massa de dados (payload):
        role: verifica se o primeiro botão de rádio com o nome "role" está marcado ou não. Se estiver marcado, define a propriedade "role" como 'dev', caso contrário, define como 'cliente'.
        fullName: obtém o valor do elemento HTML de entrada com o ID "#fullName" e atribui esse valor à propriedade "fullName".
        birthdate: obtém o valor do elemento HTML de entrada com o ID "#birthdate" e atribui esse valor à propriedade "birthdate".
        email: obtém o valor do elemento HTML de entrada com o ID "#email" e atribui esse valor à propriedade "email"
        password: obtém o valor do elemento HTML de entrada com o ID "#password" e atribui esse valor à propriedade "password".
    */
    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'cliente',
        fullName: document.querySelector("#fullName").value,
        birthdate: document.querySelector("#birthdate").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    /* 
        Faz uma requisição POST para a API usando o método fetch(). Ele envia um objeto JavaScript chamado payload que foi montado acima como corpo da requisição, que é transformado em uma string JSON usando a 
        função JSON.stringify(). Além disso, ele define um cabeçalho Content-Type para application/json.
        Depois que a resposta é recebida, o código converte o resultado em um objeto JavaScript usando o método json() da resposta. Em seguida, ele exibe uma mensagem de sucesso usando uma biblioteca 
        de alerta chamada "SweetAlert" (também conhecida como "Swal"), com um ícone de sucesso.
        Quando o usuário confirma a mensagem de sucesso, o código armazena algumas informações do usuário no armazenamento local do navegador usando a API localStorage do JavaScript. Ele também redireciona
        o usuário para uma página de listagem de usuários, definindo window.location.href como a URL da página de listagem.
    */ 
    fetch("https://64239ac6001cb9fc20423db3.mockapi.io/api/users", {
        method: 'POST',
        body: JSON.stringify(payload), // Transformando em string para enviar
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json()) // Transforma a resposta em formato json
    .then(response => {
        Swal.fire({
            title: 'Bom trabalho!',
            text: "Usuário cadastrado com sucesso",
            icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("userName", response.fullName);
                localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
                localStorage.setItem("idClient", response.id);
        
                // Redirect para Listagem
                window.location.href = "list.html"; 
            }
        })
    })
}  
