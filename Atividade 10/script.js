function tratamendoDeErroEspecifico() {
    try {
       
       let idade = -10;
       if (idade < 0) {
           throw new Error("Idade inválida! Não pode ter uma idade negativa.");
           
       }
       else {
        throw new Error("Idade Inválida! menor que zero: " + idade);
         }
    } catch (error) {
        console.log("Erro ao cadastrar: " + error.message);
        
    }
}