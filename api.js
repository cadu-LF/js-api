// let requisicao = new XMLHttpRequest() -> trasfere entre dados do cliente(html) e o servidor
// JSON -> formato que 
// req.open('GET', url, true)
//      GET -> método de consulta
//      url do servidor
//      true -> é assíncrono(não simultânea, momentos diferentes), abre conexão e podemos realizar outras tarefas
// req.send() -> envia a requisição, por ser assincrona, pq vai acontecer independentemente se o open for concluido
// readyState == 4 -> significa que o servidor retornou uma resposta para o cliente
// requisicao.status >= 200 -> 