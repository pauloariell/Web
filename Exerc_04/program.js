var pessoas = [];

function Pessoa(n,s,i){
  this.nome = n;
  this.sobrenome = s;
  this.idade = i;
  this.filhos = [];
  this.crescer = function(){
    return ++this.idade;
  }
  //pessoas.push(this);
}

/*Pessoa("Joao", "Patot", 30);  //verificar por que a push está dando errado.
Pessoa("Maria Jose", "Patot", 15);
Pessoa("Jose Maria", "Patot", 15);
Pessoa("Joasimonson", "Patot Pereira", 1);
Pessoa("Joacir", "Pereira", 25);
Pessoa("Joana", "Almeida", 102);*/



function imprimir(){
  //nome, sobrenome, idade, qtdade de filhos
  for (i = 0; i < pessoas.length; i++) {
    var Art = document.createElement("article");
    Art.classList.add("pessoa");
    document.body.appendChild(Art);

    var Name = document.createElement("h4");
    Name.textContent = "Nome:"+pessoas[i].nome + " " + pessoas[i].sobrenome; //fazer um for para imprimir todaas pessoas


    var Age  = document.createElement("p"); //nao usar lista, usar <P> e SPAN
    Age.textContent = "Idade:"+pessoas[i].idade;

    var Child  = document.createElement("p");
    Child.textContent = "Qtde Filhos:"+pessoas[i].filhos.length;

    Art.appendChild(Name);
    Art.appendChild(Age);
    Art.appendChild(Child);
  }
}


//pessoa[2].filho.push()

var joao = new Pessoa("Joao", "Patati", 98);
var ze = new Pessoa("Ze", "Patati", 60);
var clodoaldo = new Pessoa("Clodoaldo", "Patati", 63);
var julia = new Pessoa("Julia", "Patati", 40);
var maria = new Pessoa("Maria", "Patati", 36);
var chico = new Pessoa("Chico", "Patati", 10);

joao.filhos.push(clodoaldo);
joao.filhos.push(ze);
clodoaldo.filhos.push(julia);
clodoaldo.filhos.push(maria);
maria.filhos.push(chico);


pessoas.push(joao);
pessoas.push(ze);
pessoas.push(clodoaldo);
pessoas.push(julia);
pessoas.push(maria);
pessoas.push(chico);
