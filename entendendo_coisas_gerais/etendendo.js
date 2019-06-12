class animais{
    constructor(nome){
        this.nome = nome
        console.log("chamou o construtor")
    }
    caminhar(){
        console.log(this.nome + "caminha")
    }
}



class pessoas extends animais{
    constructor(nome) {
        super(nome)
        this.props = {
            nome: nome
        }
        this.nome = nome
        console.log(this)

    }


    mostra_nome() {
        console.log(this.props.nome)
     }

     caminhar(){
         console.log(this.nome + "é um humano e caminha com 2 patas")
     }

}
