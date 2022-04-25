
// declarando a função 
function buscarfilme() {
    // pegando o nome do filme 
    const nome_filme = document.getElementById("Pesquisa").value;
    // pegando o nome e inserindo o link da api
    const link_api = `http://www.omdbapi.com/?t=${nome_filme}&apikey=790af7bc`;
    // ele é o que faz a requisição (a pesquisa do filme)
    fetch(link_api)
        // vai pegar os dados e retornar se existe ou não
        .then(function (response) {
            return response.json();
        }
        )

        .then(function (data) { 
            
            if(data.Response == 'False'){
                // os dados irão ficar fazio para se caso não encontrar o filme
                document.getElementById("título").innerHTML = "Nenhum filme foi encontrado";
                document.getElementById("legenda1").innerHTML = '';
                document.getElementById("texto3").innerHTML = '';
                document.getElementById("texto2").innerHTML = '';
                document.getElementById("texto1").innerHTML = '';
                document.getElementById("legenda3").innerHTML = '';
                document.getElementById("legenda2").innerHTML = '';
                document.getElementById("forma").innerHTML = '';
                document.getElementById("banner").style.backgroundImage = `url(choro.png)`;


        }   else{
       
                    // pegando um elemento pelo id em um documento
                    // em vez de deixar vazio, está pegando os dados da api
                document.getElementById("título").innerHTML = data.Title; 
                document.getElementById("legenda1").innerHTML = data.Plot;
                document.getElementById("texto3").innerHTML = data.Runtime;
                document.getElementById("texto2").innerHTML = data.Genre;
                document.getElementById("texto1").innerHTML = data.Year;
                document.getElementById("legenda3").innerHTML = "<strong>Dirigido por:</strong>"+` ${data.Director}`;
                document.getElementById("legenda2").innerHTML = "<strong>Escrito por:</strong>"+` ${data.Writer}`;
                document.getElementById("forma").innerHTML = data.imdbRating;
                document.getElementById("banner").style.backgroundImage = `url(${data.Poster})`;
        }}
        )
}
