
//criando uma const "formulario" para pegar a id do "form"
const formulario = document.getElementById("form")

//tirando o padrao do form,ou seja,nao deixando ele voltar para a pagina inicial apos enviar os dados do formulario 
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

})

//criando uma funcao para pegar cada elemento do html e ejetar com o innerHTML
function enviarDados() {

    let list = document.getElementById('tableEjetar').innerHTML

    let text = document.getElementById("txtNome").value;
    let data = document.getElementById("txtData").value;
    let sexo = document.getElementById("txtSexo").value;
    let endereco = document.getElementById("txtEndereco").value;
    let celular = document.getElementById("tel").value;
    let email = document.getElementById("txtEmail").value;
    
    //criando a listagem dos dados na tabela

    list += "<td>" + text + "</td>"
    list += "<td>" + data + "</td>"
    list += "<td>" + sexo + "</td>"
    list += "<td>" + endereco + "</td>"
    list += "<td>" + celular + "</td>"
    list += "<td>" + email + "</td>"

    document.getElementById('tableEjetar').innerHTML = list;

    limparcampos()
}

function limparcampos(){
    document.getElementById("txtNome").value = "";
    document.getElementById("txtData").value = "";
    document.getElementById("txtSexo").value = "";
    document.getElementById("txtEndereco").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("txtEmail").value = "";
    
    
}


























