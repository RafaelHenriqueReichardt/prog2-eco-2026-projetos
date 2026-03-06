/*Implemente uma classe CarrinhoDeCompras com:

    Lista interna de itens (cada item com descricao, preco, quantidade).
    Métodos: adicionarItem, removerItem, calcularTotal, listarItens.

Regras:

    Não aceitar quantidade zero ou negativa.
    Esconder a lista interna (encapsulamento) e expor apenas métodos de acesso.*/

class Item{
    constructor(preco, qntd, desc){
          if(!preco || preco<0){  
            throw new Error("preço invalido");
        }
        if(!qntd || qntd<1){
            throw new Error("quantidade invalida");
        }
    }
}

class CarrinhoDeCompras{
    i=0;
    #lista=new Array(20); 

    adicionarItem(Item){
        this.#lista[this.i]=Item;
        this.i++;
    }
    calcularTotal(){
        let total=0;
        for(var j=0;j<=this.i;j++){
            //total=total+((this.#lista[j].Item.preco)*(this.#lista[j].qntd));
        }
        return total;
    }
    listarItens(){
        let j=0;
       while(j<=this.i+1){
            console.log('${this.#lista.qntd[j]} ${this.#lista.desc[j]}, ');
            j++;
        }
    }
    removerItem(n){
        let temp=0;
        this.#lista[n]=null;
        while((this.#lista[temp]!=null && this.#lista[temp++]!=null)|| temp!=this.i+1){
            this.#lista[temp]=this.#lista[temp++];
        }

        this.i--;
    }
}

car = new CarrinhoDeCompras();
id_111 = new Item('10,50','2','farinha_1kg');
id_112 = new Item('7','3','duzia de ovos');
id_113 = new Item('8.99','1','pacote de bolacha');

car.adicionarItem(id_111);
car.adicionarItem(id_112);
car.adicionarItem(id_113);

console.log(car.calcularTotal());
console.log(car.listarItens());
car.removerItem(2);
console.log('lista:',car.listarItens());