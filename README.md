# Buscador-Github


Primeiramente, muito obrigado pela oportunidade. Gostei muito do desafio!

Não conseguia entender como pegar a API dos tópicos. Os documentos no Github não eram claros. Pouco antes de enviar o trabalho consegui pegar os dados da API (como mostro abaixo), porem não tive tempo de corrigir alguns erros e terminar o trabalho usando essa API.

	$(document).ready(function(){
  		$('#buscaTopicos').on('keyup', function(e){
    	let busca = e.target.value;
	
    var settings = {
    	"async":true,
    	"crossDomain": true,
    	"url":"https://api.github.com/search/topics?q="+busca,
    	"method":"GET",
    	"headers":{
    		"accept": "application/vnd.github.mercy-preview+json"
    	}
    }

Assim, fiz um app para pesquisar usuários do Github. A API era pega direta pela URL, diferentemente da API para os tópicos.

O modo de testar o trabalho é copiando os arquivos e salvando-os com os respectivos nomes. Apenas digitar na barra de pesquisa já mostrará o resultado da busca de modo dinâmico.

O trabalho apresentado não é exatamente o que foi pedido, mas de certa forma similar.


