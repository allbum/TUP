var readline = require('readline-sync');

console.log('Danilo - TUP Cadastro de alunos');

let alunos = [
    {id:1, nome:"Allan", telefone   :"984700245","valor hora"  :"15", hora_de_trabalho: 0},
    {id:2, nome:"Luiz", telefone    :"998700245","valor hora"  :"100",hora_de_trabalho: 0},
    {id:3, nome:"Rodrigo", telefone :"984700233","valor hora"  :"30", hora_de_trabalho: 0},
    {id:4, nome:"Jonas", telefone   :"984700111","valor hora"  :"500", hora_de_trabalho: 0},
];
//console.log('Digite 1 ou escreva "sair" para finalizar');

while(true){
    console.log('\033[2J');
    console.log('Digite 1 ou escreva "sair" para finalizar ');
    console.log('Digite 2 para cadastrar ');
    console.log('Digite 3 para Alocar profissionais ');
    console.log('Digite 4 para listar profissionais ');
    cmd=readline.question(' ');
    if (cmd == 1 || cmd =='sair'){
        break;
    }else if(cmd==2){
        cadastrarAluno();
        
    }else if(cmd==3){
        //console.log('\033[2J');
        alocarProfissional();
    }
    else if(cmd==4){
        listaAlunos();
        readline.question("... ");
        //console.log('\033[2J');
    }
    
}

function alocarProfissional() {
    let nome_aluno = '';
    let profissional ='';
    while(true){
        console.log('\033[2J');
        console.log('Escolha o profissional');
        listaAlunos();
        nome_aluno = readline.question('Digite o nome do profissional ');
        indice = alunos.findIndex(aluno => aluno.nome == nome_aluno);
        console.log(indice);
        if(indice<0){
            console.log('Profissional ' + profissional + 'não cadastrado'); 
            readline.question('...');
            alocarProfissional();
        } 

        /*profissional = alunos.filter((aluno) => {
            return aluno.nome == nome_aluno;
            }); 

        console.log(profissional.length);
        if(!profissional.length) {
            console.log('Profissional ' + profissional + 'não cadastrado'); 
            readline.question('...');
            alocarProfissional();
        }
        */
        //profissional.hora_de_trabalho = 10;
       
        alunos[indice].hora_de_trabalho= readline.questionInt('Digite quantidade de horas de trabalho '); 
        console.log(alunos);
        listaAlunos();
        if (readline.question('Digite 1 voltar ao menu principal ou para continuar ') == '1'){
            return;
        }
    }
}
function cadastrarAluno() {
    alunos.push(
        {
            id            :Math.floor(Math.random() * (100 - 5 + 1)) + 5,
            nome          :readline.question("Digite o nome do aluno: "),
            telefone      :readline.questionInt("Telefone: "),
            "valor hora"  :readline.questionFloat("Valor por hora R$: "),
            hora_de_trabalho: 0
        });
}

function listaAlunos() {
    console.log(" \n ##################### Lista de Alunos ##################### \n"); 
    alunos.forEach((aluno) =>{console.log("Aluno: " + aluno.nome + "    "+"Telefone: " + aluno.telefone + "    Valor hora R$: " + aluno["valor hora"] + 
    '    hora_de_trabalho: ' + aluno.hora_de_trabalho +  "h" + "    total a pagar R$" + (aluno.hora_de_trabalho *aluno["valor hora"]).toFixed(2) )});
    console.log(`Total de alunos: ${alunos.length}`);    
}

