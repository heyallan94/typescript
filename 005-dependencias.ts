/**
 Ao criar uma aplicação em Ts, ao digitar
 tsc --init
 
 tsconfig.json é criado
 Ali está todas as configurações

 Na linha 
 "rootDir": "./", 
 AQUI DEVE ser onde você está CRIANDO O SCRIPT
 Ou seja, o arquivo TS, original, está ai dentro

 Na linha
 "outDir": "./",  você deve colocar o carminho onde o html vai procurar o arquivo

 Na linha 
 "target": "ES2023", você está dizendo a qual versão do js o seu código type vai.
 É importante notar que, se for atual, talvez alguns navegadores não rodem direito, pois algumas atualizações
 por parte do site talvez não foram implementadas, ou seja, usar o código na versão antiga, não é má ideia.
 

 Com tudo no local certo, digite "tsc" no terminal do arquivo Typescript que você tem

 O comando "tsc -w", ao salvar seu typescript, já salva no js
 */