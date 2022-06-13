// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let n = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio
        
while(n != -1) { 
        if (  n===0    ) 
            print(   n  ); 
        else 
            print(  --n   );        
        n = parseInt(gets()); 
    }