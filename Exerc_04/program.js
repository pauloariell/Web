
function Pessoa(n,s,i){
  this.nome = n;
  this.sobrenome = s;
  this.idade = i;
  this.filhos = [];
  this.crescer = function(){
    return ++this.idade;
  }
}

function imprimir(){
  //nome, sobrenome, idade, qtdade de filhos
  var Art = document.createElement("article");
  Art.classList.add("pessoa");
  document.body.appendChild(Art);

  var Name = document.createElement("h4");
  Name.textContent = joao.nome + " " + joao.sobrenome; //fazer um for para imprimir todaas pessoas


  var Age  = document.createElement("li"); //nao usar lista, usar <P> e SPAN
  Age.textContent = joao.idade;

  var Child  = document.createElement("li");
  Child.textContent = joao.filhos.length;

  Art.appendChild(Name);
  Art.appendChild(Age);
  Art.appendChild(Child);
}

var joao = new Pessoa("João", "Patati", 98);
var ze = new Pessoa("Zé", "Patati", 60);
var clodoaldo = new Pessoa("Clodoaldo", "Patati", 63);
var julia = new Pessoa("Júlia", "Patati", 40);
var maria = new Pessoa("Maria", "Patati", 36);
var chico = new Pessoa("Chico", "Patati", 10);

joao.filhos.push(clodoaldo);
joao.filhos.push(ze);
clodoaldo.filhos.push(julia);
clodoaldo.filhos.push(maria);
maria.filhos.push(chico);

var pessoa = [];
pessoa.push(joao);
pessoa.push(ze);
pessoa.push(clodoaldo);
pessoa.push(julia);
pessoa.push(maria);
pessoa.push(chico);

console.imprimir();
