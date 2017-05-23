var SERIES = (function() {

	var context = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
	var scope = {};

  scope.init = function() {
		scope.loadTemplates();
	}

  scope.getSeason = function(serie, season) {
    //TODO Remove the code bellow and do an ajax request
    seriesSeason = {};
    seriesSeason.seasonNumber = season;
    episodeList = [];
    switch(serie) {
        case "at":
					seriesSeason.seriesName = "Adventure Time";
					if(season === "07"){
	          episodeList = [
	            {
								"formatedNumber": "S07E01",
	              "name": "Bonnie and Neddy",
	              "synopsis": "Um dos maiores segredos do Reino Doce é revelado graças ás ordens do Rei de Ooo sobre Finn e Jake.",
	              "path": "cartoon-network/adventure-time/7/1/index.html",
	              "titleCard": "seasons/cn/at/7/cards/1.png"
	            },
							{
								"formatedNumber": "S07E02",
	              "name": "Varmints",
	              "synopsis": "Bonnibel e Marceline passam um tempo juntas após Rei de Ooo tomar o controle do Reino Doce.",
	              "path": "cartoon-network/adventure-time/7/2/index.html",
	              "titleCard": "seasons/cn/at/7/cards/2.png"
	            },
	            {
								"formatedNumber": "S07E03",
	              "name": "Cherry Cream Soda",
	              "synopsis": "A vida de Cerejinha muda completamente após a chegada de um visitante.",
	              "path": "cartoon-network/adventure-time/7/3/index.html",
	              "titleCard": "seasons/cn/at/7/cards/3.png"
	            },
							{
								"formatedNumber": "S07E04",
	              "name": "Mama Said",
	              "synopsis": "Rei de Ooo faz Finn e Jake embarcarem em uma missão á procura de cogumelos voadores.",
	              "path": "cartoon-network/adventure-time/7/4/index.html",
	              "titleCard": "seasons/cn/at/7/cards/4.png"
	            },
							{
								"formatedNumber": "S07E05",
	              "name": "Football",
	              "synopsis": "BMO troca de lugar com Futebol por um dia.",
	              "path": "cartoon-network/adventure-time/7/5/index.html",
	              "titleCard": "seasons/cn/at/7/cards/5.png"
	            },
							{
								"formatedNumber": "S07E06",
	              "name": "Marceline, the Vampire Queen",
	              "synopsis": "Finn e Jake caçam um predador sombrio e Marceline pede um favor a Princesa Jujuba.",
	              "path": "cartoon-network/adventure-time/7/6/index.html",
	              "titleCard": "seasons/cn/at/7/cards/6.png"
	            }
	          ];
					}
    }

		seriesSeason.episodeList = episodeList;

    return seriesSeason;
  }

  scope.showSeason = function(event, serie, season) {
		$("#seasonEpisodes").hide();
		seriesSeason = scope.getSeason(serie, season);
		tablinks = document.getElementsByClassName("tablinks");
		$('.tablinks').removeClass('active');
    $("#seasonEpisodes").html($.tmpl(scope.seasonTemplate, seriesSeason));
		$("#seasonEpisodes").slideDown();
		event.currentTarget.className += " active";
  }

	scope.showPreviewModal = function(idx) {
		$( "[id^='modal-episodio']").fadeOut(250);
		$('#modal-episodio' + idx).fadeIn(250);
  }

  scope.loadTemplates = function(){
    $.ajax({
    		url: context + "/templates/season_template.html",
    		async: false,
    		cache : false,
    		success: function(content) {
    			scope.seasonTemplate = content;
    		},
    		error: function(status){
    			console.log('Error status: '+ status);
    		}
  	});
  }

 	return {
 		iniciarNovoChatById: scope.iniciarNovoChatById,
        init : scope.init,
        showSeason: scope.showSeason,
				showPreviewModal: scope.showPreviewModal
    };

})();
