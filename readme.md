<!--
http://slides.com/caiodelgado/map-filter-reduce/
filter
    cria um novo array com todos os elementos que passaram no teste da função fornecida
    var newArray = arr.filter(callback[, thisArg])
map
    chama o callback para cada elemento e devolve um novo array com a mesma quantidade de itens
    var newArray = arr.map(callback[, thisArg])
        a diferença entre o foreach é que este não retrna um array, sendo necessário criar um. neste caso o map é mais elegante
reduce
    executa uma função para cada elemento retornando um unico valor de retorno
    var newArray = arr.map()callback[, valorinicial]
        caso precise usar um map e um filter o reduce é uma opção mais eficiente e elegante
-->