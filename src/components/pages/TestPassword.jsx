import ResultTestPassword from "../ResultTestPassword"

function TestPassword() {

    function validarSenhaForca(){
        var senha = document.getElementById('senhaForca').value;
        var forca = 0;
        document.getElementById("impSenha").innerHTML = "Senha " + senha;
    
        if((senha.length >= 4) && (senha.length <= 7)){
            forca += 10;
        }else if(senha.length > 7){
            forca += 25;
        }
    
        if((senha.length >= 5) && (senha.match(/[a-z]+/))){
            forca += 10;
        }
    
        if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
            forca += 20;
        }
    
        if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
            forca += 25;
        }
    
        if(senha.match(/([1-9]+)\1{1,}/)){
            forca += -25;
        }
    
        mostrarForca(forca);
        alert('teste')
    }
    
    function mostrarForca(forca){
        document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;
    
        if(forca < 30 ){
            document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
        }else if((forca >= 30) && (forca < 50)){
            document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700'>Média</span>";
        }else if((forca >= 50) && (forca < 70)){
            document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7FFF00'>Forte</span>";
        }else if((forca >= 70) && (forca < 100)){
            document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #008000'>Excelente</span>";
        }
        alert('teste')
    }


    return (
        <div class="container">
            <h2 className="text-center">Test your password strength</h2>
            <input className="form-control" type="text" placeholder="Enter your password" />

<ResultTestPassword />

     <form action=""> <div id="impSenha"></div> 
        <div id="impForcaSenha"></div>  
        <div id="erroSenhaForca"></div> 
        Senha: 
        <input type="password" name="senhaForca" id="senhaForca" onkeyup="validarSenhaForca()" /></form>
       
    



        </div>
    )
}

export default TestPassword
