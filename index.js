class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new heroi("Dumbledore", 150, "mago");
let guerreiro = new heroi("Heitor", 32, "guerreiro");
let monge = new heroi(" Ernesto", 49, "monge");
let ninja = new heroi("Shisui", 23, "ninja");

mago.atacar(); 
guerreiro.atacar();
monge.atacar(); 
ninja.atacar(); 
