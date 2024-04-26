let url="dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("carros").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="nacionais"Nacionais</p> <img class="foto"src="'+ $(this).find("id").text() +'.png"><p class="cores">Preto ou Amarelo</p> <p class="ano">'+ $(this).find("ano").text() +'</p> <p>'+ $(this).find("modelo").text()+'<\p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(this).find("preço").text()+' </p><p> cor:'+ $(this).find("cor").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })

   


    var url_string = window.location.href;
    var url1 = new URL(url_string);
    var id = parseInt(url1.searchParams.get("id"));

    $.ajax(url)
    .done(function(xml){
            $(xml).find("pirata").each(function(){
                var pos = parseInt($(this).find("id").text())
                if(id == pos){
                $("#individual").append('<div class="card"><p class="carros">carros</p> <img class="foto"src="'+ $(this).find("id").text() +'.png"><p class="cores">Preto ou Amarelo</p> <p class="ano">'+ $(this).find("ano").text() +'</p> <p>'+ $(this).find("modelo").text()+'<\p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(this).find("preço").text()+' </p><p> cor:'+ $(this).find("cor").text()+' </p><\div>');
                }
            });
        
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })
