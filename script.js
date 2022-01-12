//Quebrando a Maldiçao

    console.log("olá, mundo!")


// O JAVASCRIPT TEM UMA ORDEM QUE É  DE CIMA PARA BAIXO

/* Exemplo dessa ordem */

    console.log("Primeiro")
    console.log("Segundo")


//DECLARANDO VARIÁVEIS

    //VAR - global, quase nao é usada.

    //LET - local, e é bastante usada.

    //CONST - constante, valores não mutaveis, ou seja valores nao nao mudam, como, cpf, rg e etc.



/* Podemos dizer que respectivas varias são gavetas */

    /* Exemplo asseguir */

        let meias = "Pretas com bolinhas"
        let blusas = 28
        let joias = "prata"

        const cpf = 123456789-12
        let name = "Igor"

//tipodevariavel nomeDeVariável = valor


// TIPO DE DADOS

    // dados textuais 

        let string =  "esse texto aqui é uma string"
        let string2 = 'e pode conter qualquer caractere'

            let templeString = `oi, ${string} ${string2}`
            
            /* Se colocarmos uma templeString com o (``), podemos usanr outras string com o (  ${string}  )  */

        console.log(templeString)

    //dados numéricos


        let number = 856

        console.log(typeof number)

        /* O (typeof) serve para vermos se é uma string, number e etc*/
        

    // dados booleanos

        // sempre vai receber true ou false 

            let booleanos = true

            console.log(8 > 2)

    // dados vazios

        /* Se criamos uma let e colocarmos que ela recebe uma null, estamos dizendo que ela esta vazia. null = Vazio */

        /* Exemplo */

            let chocolate = null



    // dados indefinido

        /* Se colocarmos uma let sem receber valor nenhum, ela ja tem um padrao undefined, ou seja, indefinida. */

        /* Exemplo */

            let flor = undefined

            let caixa
            console.log(caixa)
            caixa = "air"
            console.log(caixa)


// NOME DAS VARIAVEIS

    /* primeira palavra deve ser escrita toda minúscula e a primeira letra da segunda palavra deve ser escrita em maiúscula */

    /* Exemplo */

    let guardaChuva = "azul"
    let guardachuva = "vermelho"

    console.log(guardaChuva)
    console.log(guardachuva)

    /* Essas duas let são coisas diferentes */