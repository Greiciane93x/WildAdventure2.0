
function apresentacao(){

              
    var mensagem = document.querySelector('p'); 
    mensagem.textContent = 'Por favor, escolha o cenário que pretende participar...'

    document.body.style.backgroundImage = "url('https://f.i.uol.com.br/fotografia/2018/06/19/15294504855b298ff57b3d1_1529450485_3x2_md.jpg')";
  

    let cenario = document.querySelector('#decisao-cenario'); 
    cenario.style.display = 'block';

    let decideComerCervo = document.querySelector("#condicao"); 
    decideComerCervo.style.display = 'none'; 

    let continuar = document.querySelector("#continuacao"); 
    continuar.style.display = 'none';
  
}

function textoCenario(decisaoCenario){

        var descricao = document.querySelector('p');
        if(decisaoCenario == 1){
            
            descricao.textContent = `Você enfrentará o Deserto da Namíbia, na África Subsaariana.` 
            descricao.textContent += ` A África subsariana ou subsaariana , antes impropriamente chamada África negra, corresponde à parte do continente africano situada ao sul do Deserto do Saara.`
            descricao.textContent += ` É constituída de quarenta e oito Estados, cujas fronteiras resultaram da descolonização.`
            descricao.textContent += ` O clima tropical predomina na maior parte da África, tanto na zona tropical, úmida no verão e seca no inverno, quanto na zona equatorial, com temperaturas elevadas e chuvas abundantes.`
            descricao.textContent += ` Você encontrou uma carcaça inteira de um Alce  `
            descricao.textContent += ` O Alce está com vestígios de que estava babando de raiva, o que pode ser perigoso.`
            descricao.textContent += `  DECIDE SE ALIMENTAR DELE??`

        }else if(decisaoCenario == 2){

            descricao.textContent = ` Você enfrentará a Floresta de Coníferas.`
            descricao.textContent += ` Situa-se no hemisfério norte, abrangendo a Ásia (Sibéria, Japão), América do Norte (Alasca, Canadá, sul da Groenlândia) e Europa (parte da Noruega, Suécia).`
            descricao.textContent += ` O clima nessa região é subártico, caracterizado por inverno muito frio, longo e seco com temperaturas que chegam a -50º C.  `
            descricao.textContent += ` O verão é curto e úmido, os dias são mais longos e as temperaturas podem chegar a 20º C. `
            descricao.textContent += ` As chuvas são pouco frequentes. Durante o verão ocorre degelo, formando lagos, pântanos e brejos. O solo é raso, pobre em nutrientes e coberto por folhas. `                
            descricao.textContent += ` Você encontrou uma carcaça inteira de um Alce  `
            descricao.textContent += `  O Alce está com vestígios de que estava babando de raiva, o que pode ser perigoso  `
            descricao.textContent += `  DECIDE SE ALIMENTAR DELE??`

        }else if(decisaoCenario == 3){

            descricao.textContent = `Bem vindo a Floresta Tropical de Daintree Rainforest, na Austrália. `
            descricao.textContent += `Além de ser considerada a floresta tropical mais antiga do mundo, o lugar se diferencia dos demais por ser ponto de encontro entre a floresta e a barreira de corais.`
            descricao.textContent += ` Você encontrou uma carcaça inteira de um Alce.  `
            descricao.textContent += ` O Alce está com vestígios de que estava babando de raiva, o que pode ser perigoso.`
            descricao.textContent += `  DECIDE SE ALIMENTAR DELE??`


        }

}



function decidirComer(decisao){
    var decideComerCervo = document.querySelector('p');
    
                    
    if (decisao == '1') {
        
        decideComerCervo.textContent = ` Você está apresentando um estado de confusão mental, desorientação, agressividade, alucinações.`
        decideComerCervo.textContent += ` A equipe do programa teve que te socorrer às pressas, o que te deu um ASP nota -5.`
        decideComerCervo.textContent += `       ||END GAME||`
        decideComerCervo.textContent += `     Deseja jogar novamente?   `
      

        let decideComer = document.querySelector('#condicao'); 
        let continuar = document.querySelector('#continuacao'); 
        decideComer.style.display = 'none'; 
        continuar.style.display = 'block'; 

    }
    else if (decisao =='2'){
        
   
        decideComerCervo.textContent = `Você achou uma larva e passas ricas em magnésio.`
        decideComerCervo.textContent += ` Ao comer o que encontrou, pode encontrar um caminho que tinha uma caverna cheia de babuínos mortos.`
        decideComerCervo.textContent += ` O que te levou a imaginar se não tinha um leopardo os guardando na caverna.`
        decideComerCervo.textContent += ` Ao encontrar os babuínos negros, pode perceber que não podia ficar muito tempo, pois de noite poderia encontrar o seu predador voltando à caverna.`
        decideComerCervo.textContent += ` Você pode se alimentar e abasteceu uma mochila com comida para pelo menos 2 dias.`
        decideComerCervo.textContent += ` Ao sair dali, encontrou a rota do fim do jogo.`
        decideComerCervo.textContent += ` Você recebeu um ASP nota 10`
        decideComerCervo.textContent += `     ||VOCÊ GANHOU!!||    `
        decideComerCervo.textContent += `     Deseja jogar novamente?   `

        let continuar = document.querySelector('#continuacao'); 
        let decideComer = document.querySelector("#condicao"); 
        decideComer.style.display = 'none'; 
        continuar.style.display = 'block'; 
      
        
        
    }
 
    
}

function desejaContinuar(jogarNovamente){
                    
                    
    var continueJogo = document.querySelector('div#continuacao');
    
    continueJogo.style.display = 'block';                
    var mensagem = document.querySelector('div#wildadventure'); 
 
   
    if(jogarNovamente == '1'){  
       apresentacao(); 
      

    }else if(jogarNovamente == '2'){
        document.body.style.backgroundImage = "url('https://rawthrills.com/wp-content/uploads/2015/02/JP_hi_res_4.jpg')"
        
        var texto = document.getElementById('corpo'); 
        texto.textContent = `FIMMMM!!!`
        continueJogo.style.display = 'block';
        
        
    }
    
    
}


function cenario(decisaoCenario){
    //cenario - deserto da namíbia 
    if(decisaoCenario == 1){
        //imagem 
        document.body.style.backgroundImage = "url('imagens_wildAdventure/76027330_elfront-viagem-namibia-shutterstock.jpg')";
      
            let cenario = document.querySelector("#decisao-cenario")
            cenario.style.display = 'none'; 

            let decideComerCervo = document.querySelector("#condicao"); 
            decideComerCervo.style.display = 'block'; 

            let continuar = document.querySelector("#continuacao"); 
            continuar.style.display = 'none';

        
       
        textoCenario('1'); 
        let decideComer = document.querySelector("#condicao").value;

        if(decideComer == 1){
            decidirComer('1'); 
            decideComerCervo.style.display = 'none'; 
        }else if(decidirComer == 2){
            decidirComer('2')
            decideComerCervo.style.display = 'none'; 
               
        }
      

        let jogarNovamente = document.querySelector('#continuacao')
        
        
        if(jogarNovamente == 1){
            desejaContinuar('1'); 
        }else if(jogarNovamente == 2 ){
            desejaContinuar('2'); 
        }
       
        

        // floresta de coníferas 
    }else if(decisaoCenario == 2){

        document.body.style.backgroundImage = "url('imagens_wildAdventure/floresta-e-monte-das-coníferas-43591822.jpg')"; 
        
        let cenario = document.querySelector("#decisao-cenario")
            cenario.style.display = 'none'; 

            let decideComerCervo = document.querySelector("#condicao"); 
            decideComerCervo.style.display = 'block'; 

            let continuar = document.querySelector("#continuacao"); 
            continuar.style.display = 'none';

        
       
        textoCenario('1'); 
        let decideComer = document.querySelector("#condicao").value;

        if(decideComer == 1){
            decidirComer('1'); 
            decideComerCervo.style.display = 'none'; 
        }else if(decidirComer == 2){
            decidirComer('2')
            decideComerCervo.style.display = 'none'; 
               
        }
      

        let jogarNovamente = document.querySelector('#continuacao')
        
        
        if(jogarNovamente == 1){
            desejaContinuar('1'); 
        }else if(jogarNovamente == 2 ){
            desejaContinuar('2'); 
        }
        
       
        
      
        
        //floresta de daintree
    }else if(decisaoCenario == 3){


        document.body.style.backgroundImage = "url('imagens_wildAdventure/20200706floresta-australia.jpg')";
         
        let cenario = document.querySelector("#decisao-cenario")
            cenario.style.display = 'none'; 

            let decideComerCervo = document.querySelector("#condicao"); 
            decideComerCervo.style.display = 'block'; 

            let continuar = document.querySelector("#continuacao"); 
            continuar.style.display = 'none';

        
       
        textoCenario('1'); 
        let decideComer = document.querySelector("#condicao").value;

        if(decideComer == 1){
            decidirComer('1'); 
            decideComerCervo.style.display = 'none'; 
        }else if(decidirComer == 2){
            decidirComer('2')
            decideComerCervo.style.display = 'none'; 
               
        }
      

        let jogarNovamente = document.querySelector('#continuacao').value
        
        
        if(jogarNovamente == 1){
            desejaContinuar('1'); 
        }else if(jogarNovamente == 2 ){
            desejaContinuar('2'); 
        }
        
       
        
     
     
        
       
    }


}





apresentacao(); 