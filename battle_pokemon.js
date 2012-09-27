(function($) {

	$(document).ready(function() {

		var _pokemonFullList;
		var _pokemonCompare;
		var _pokemonLeftSelected;
		var _pokemonRightSelected;

		(function() {

			$.ajax({
	    
			    type: 'GET',
			    url: 'http://localhost:8080/pokedex/pokemon/generation/5?count=649&sortOrder=asc&sortBy=metadata.name&fields=metadata.name,metadata.nationalId',
			    dataType: 'json',

			    success: function(data) {
						
					_pokemonFullList = data;
					pokemonSelect(_pokemonFullList);

			    },

			    error: function(jqXHR, textStatus, errorThrown) {
			        data = {
			            error: true,
			            jqXHR: jqXHR,
			            textStatus: textStatus,
			            errorThrown: errorThrown
			        };
			        if(callback)
			        	callback.call(this, data)
			    }

			});

		})();

		function pokemonSelect(_pokemonFullList) {
			
			var outputLeftSelector = 
			"<form id='left-side-selector-list-form'>"+
				"<ul class='left-side-selector-list-selected'>";

				for (var pokemon in _pokemonFullList) {
					
					var leftSidePokemon = _pokemonFullList[pokemon];
					var leftSidePokemon_Name = leftSidePokemon.metadata.name;
					var leftSidePokemon_ID = leftSidePokemon.metadata.nationalId;

					outputLeftSelector += 
					"<li>"+
						"<div>"+
							"<input type='radio' name='pokemon-left' value='" + leftSidePokemon_ID + "' id='pokemon-left' />"+
							"<label for='" + leftSidePokemon_Name + "' id='" + leftSidePokemon_ID + "'>" + leftSidePokemon_Name + '<span>#' + leftSidePokemon_ID + "</span></label>"+
						"</div>"+
					"</li>";
				};

			outputLeftSelector += 
				"</ul>"+
			"</form>";
			$('#left-side-selector-list').html(outputLeftSelector);

			function randomPokemonLeft_Start() {
				var numPokemon = _pokemonFullList.length;
				var numRandom = Math.floor(Math.random() * numPokemon)
				$(':input[name=pokemon-left]:radio:eq('+ numRandom + ')').attr('checked', 'checked');
				_pokemonLeftSelected = $("#pokemon-left:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonLeftSelected) {
						var pokemonLeftSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonLeftSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonLeftID = "<span>#" + pokemonLeftSelected_ID + "</span>";
				$('#left-side-card-footer_id').html(pokemonLeftID);

				var pokemonLeftName = "<span>" + pokemonLeftSelected_Name + "</span>";
				$('#left-side-card-footer_name').html(pokemonLeftName);

				var pokemonLeftPic = "<div id='left-side-card-pic'></div>";
				$('#left-side-card-pic-container').html(pokemonLeftPic);
				$('#left-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonLeftSelected_ID + ".png')");
			};

			$("#left-side-selector-list-form").click(function() {
				
				_pokemonLeftSelected = $("#pokemon-left:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonLeftSelected) {
						var pokemonLeftSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonLeftSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonLeftID = "<span>#" + pokemonLeftSelected_ID + "</span>";
				$('#left-side-card-footer_id').html(pokemonLeftID);

				var pokemonLeftName = "<span>" + pokemonLeftSelected_Name + "</span>";
				$('#left-side-card-footer_name').html(pokemonLeftName);

				var pokemonLeftPic = "<div id='left-side-card-pic'></div>";
				$('#left-side-card-pic-container').html(pokemonLeftPic);
				$('#left-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonLeftSelected_ID + ".png')");

			});

			var outputRightSelector = 
			"<form id='right-side-selector-list-form'>"+
				"<ul class='right-side-selector-list-selected'>";

				for (var pokemon in _pokemonFullList) {
					var rightSidePokemon = _pokemonFullList[pokemon];
					var rightSidePokemon_Name = rightSidePokemon.metadata.name;
					var rightSidePokemon_ID = rightSidePokemon.metadata.nationalId;

					outputRightSelector += 
					"<li>"+
						"<div>"+
							"<label for='" + rightSidePokemon_Name + "'>" + rightSidePokemon_Name + '<span>#' + rightSidePokemon_ID + "</span></label>"+
							"<input type='radio' name='pokemon-right' value='" + rightSidePokemon_ID + "' id='pokemon-right' />"+
						"</div>"+
					"</li>";
				};

			outputRightSelector += 
				"</ul>"+
			"</form>";
			$('#right-side-selector-list').html(outputRightSelector);

			$("#right-side-selector-list-form").click(function() {
				
				_pokemonRightSelected = $("#pokemon-right:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonRightSelected) {
						var pokemonRightSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonRightSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonRightID = "<span>#" + pokemonRightSelected_ID + "</span>";
				$('#right-side-card-footer_id').html(pokemonRightID);

				var pokemonRightName = "<span>" + pokemonRightSelected_Name + "</span>";
				$('#right-side-card-footer_name').html(pokemonRightName);

				var pokemonRightPic = "<div id='right-side-card-pic'></div>";
				$('#right-side-card-pic-container').html(pokemonRightPic);
				$('#right-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonRightSelected_ID + ".png')");

			});

			function randomPokemonRight_Start() {
				var numPokemon = _pokemonFullList.length;
				var numRandom = Math.floor(Math.random() * numPokemon)
				$(':input[name=pokemon-right]:radio:eq('+ numRandom + ')').attr('checked', 'checked');
				_pokemonRightSelected = $("#pokemon-right:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonRightSelected) {
						var pokemonRightSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonRightSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonRightID = "<span>#" + pokemonRightSelected_ID + "</span>";
				$('#right-side-card-footer_id').html(pokemonRightID);

				var pokemonRightName = "<span>" + pokemonRightSelected_Name + "</span>";
				$('#right-side-card-footer_name').html(pokemonRightName);

				var pokemonRightPic = "<div id='right-side-card-pic'></div>";
				$('#right-side-card-pic-container').html(pokemonRightPic);
				$('#right-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonRightSelected_ID + ".png')");

			};

			randomPokemonLeft_Start();
			randomPokemonRight_Start();

		};

		$('#footer-battle-button, #footer-battle-reset-button').on('mouseenter', function() {
			$('#vs-pokeball').addClass('rotate-90');
			$('#vs').hide();
			$('#battle').show();
		}).on('mouseleave', function() {
			$('#vs-pokeball').removeClass('rotate-90');
			$('#battle').hide();
			$('#vs').show();
		});

		$('#footer-battle-button').click(function() {
			battle(_pokemonLeftSelected, _pokemonRightSelected);
			battleButton();
		});

		$('#footer-shuffle-button').click(function() {
			shufflePokemon();
		});

		function shufflePokemon() {
			
			var numPokemon = _pokemonFullList.length;
				var numRandom = Math.floor(Math.random() * numPokemon)
				$(':input[name=pokemon-left]:radio:eq('+ numRandom + ')').attr('checked', 'checked');
				_pokemonLeftSelected = $("#pokemon-left:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonLeftSelected) {
						var pokemonLeftSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonLeftSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonLeftID = "<span>#" + pokemonLeftSelected_ID + "</span>";
				$('#left-side-card-footer_id').html(pokemonLeftID);

				var pokemonLeftName = "<span>" + pokemonLeftSelected_Name + "</span>";
				$('#left-side-card-footer_name').html(pokemonLeftName);

				var pokemonLeftPic = "<div id='left-side-card-pic'></div>";
				$('#left-side-card-pic-container').html(pokemonLeftPic);
			$('#left-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonLeftSelected_ID + ".png')");
			
			var numPokemon = _pokemonFullList.length;
				var numRandom = Math.floor(Math.random() * numPokemon)
				$(':input[name=pokemon-right]:radio:eq('+ numRandom + ')').attr('checked', 'checked');
				_pokemonRightSelected = $("#pokemon-right:checked").val();

				for(var i = 0; i < _pokemonFullList.length; i++) {
					if (_pokemonFullList[i].metadata.nationalId == _pokemonRightSelected) {
						var pokemonRightSelected_ID = _pokemonFullList[i].metadata.nationalId;
						var pokemonRightSelected_Name = _pokemonFullList[i].metadata.name;
					}
				}

				var pokemonRightID = "<span>#" + pokemonRightSelected_ID + "</span>";
				$('#right-side-card-footer_id').html(pokemonRightID);

				var pokemonRightName = "<span>" + pokemonRightSelected_Name + "</span>";
				$('#right-side-card-footer_name').html(pokemonRightName);

				var pokemonRightPic = "<div id='right-side-card-pic'></div>";
				$('#right-side-card-pic-container').html(pokemonRightPic);
			$('#right-side-card-pic').css("background-image", "url('file:///Users/rfairclough/poke/pokedex_frontend/public/img/sugimori/" + pokemonRightSelected_ID + ".png')");
		};

		function battleButton() {
			
			$('#footer-battle-button').hide();
			$('#footer-shuffle-button').hide();
			$('#vs-pokeball-container').hide();
			$('#vs-left-side-pokemon').stop().animate({
				left: '-130'
			}, { duration: 500,
			});
			$('#vs-right-side-pokemon').stop().animate({
				left: '520'
			}, { duration: 500,
			});
		};

		function battleReset() {
			$('#footer-battle-reset-button').click(function() {
				$('#footer-battle-reset-button').hide();
				$('#vs-left-side-pokemon').stop().animate({
					left: '0'
				}, 500);
				$('#vs-right-side-pokemon').stop().animate({
					left: '390'
				}, 500, function() {
					$('#footer-battle-button').show();
					$('#footer-shuffle-button').show();
					$('#vs-pokeball-container').show();
					$('#vs-matchup-slider').stop().animate({
						left: '260'
					}, 0);
						$('#vs-left-side-card').stop().animate({
						top: '0'
					}, 500);
					$('#vs-right-side-card').stop().animate({
						top: '0'
					}, 500);
				});
			});
		};

		var sortPokemansById = function(li1, li2) {
			var a = $(li1).find('input').attr("value");
			var b = $(li2).find('input').attr("value");
			return a - b;
		}

		var sortPokemansByName = function(li1, li2) {
			var a = $(li1).find('label').attr("for");
			var b = $(li2).find('label').attr("for");
			  if(a < b) return -1;
			    if(a > b) return 1;
			    	return 0;
		}

		// A Jeremy Weeks Joint..

		var sortPokemans = function(col, field) {
			var arr = $('#' + col + '-side-selector-list ul li');
			if(field == 'id') {
				arr.sort(sortPokemansById);
			} else {
				arr.sort(sortPokemansByName);
			}
			$('#' + col + '-side-selector-list ul').html(arr);
		};

		$('#left-side-selector-sort-id').click(function(){
			sortPokemans('left', 'id');
			$(this).addClass('highlight');
			$('#left-side-selector-sort-name').removeClass('highlight');
		});

		$('#left-side-selector-sort-name').click(function(){
			sortPokemans('left', 'name');
			$(this).addClass('highlight');
			$('#left-side-selector-sort-id').removeClass('highlight');
		});

		$('#right-side-selector-sort-id').click(function(){
			sortPokemans('right', 'id');
			$(this).addClass('highlight');
			$('#right-side-selector-sort-name').removeClass('highlight');
		});

		$('#right-side-selector-sort-name').click(function(){
			sortPokemans('right', 'name');
			$(this).addClass('highlight');
			$('#right-side-selector-sort-id').removeClass('highlight');
		});


		function battle(_pokemonLeftSelected, _pokemonRightSelected) {

			$.ajax({
	    
			    type: 'GET',
			    url: 'http://localhost:8080/pokedex/comparator?pokemonIds=' + _pokemonLeftSelected + ',' + _pokemonRightSelected,
			    dataType: 'json',

			    success: function(data) {
						
					_pokemonCompare = data;
					pokemonBattle(_pokemonCompare);

			    },

			    error: function(jqXHR, textStatus, errorThrown) {
			        data = {
			            error: true,
			            jqXHR: jqXHR,
			            textStatus: textStatus,
			            errorThrown: errorThrown
			        };
			        if(callback)
			        	callback.call(this, data)
			    }

			});

		};

		function pokemonBattle(_pokemonCompare) {
					
			var battleStats = _pokemonCompare;
	
			pokeball(battleStats);

		};

		function pokeball(battleStats) {

			var leftSidePokemon = battleStats.pokemon1;
			var leftSidePokemon_ID = battleStats.pokemon1.metadata.nationalId;
			var leftSidePokemon_Type = battleStats.pokemon1.metadata.type.type_1;
			var leftSidePokemon_Type2 = battleStats.pokemon1.metadata.type.type_2;
			var rightSidePokemon = battleStats.pokemon2;
			var rightSidePokemon_ID = battleStats.pokemon2.metadata.nationalId;
			var rightSidePokemon_Type = battleStats.pokemon2.metadata.type.type_1;
			var rightSidePokemon_Type2 = battleStats.pokemon2.metadata.type.type_2;
			var battleScore = battleStats.score;
			var message = battleStats.outcomeMessage;
			var winner = battleStats.winner;

			// Left Pokemon stats..
			var leftSidePokemon_HP = battleStats.pokemon1.metadata.hp;
			var leftSidePokemon_HPWidth = (leftSidePokemon_HP / 255) * 100;

			var leftSidePokemon_ATT = battleStats.pokemon1.metadata.attack;
			var leftSidePokemon_ATTWidth = (leftSidePokemon_ATT / 255) * 100;

			var leftSidePokemon_DEF = battleStats.pokemon1.metadata.defense;
			var leftSidePokemon_DEFWidth = (leftSidePokemon_DEF / 255) * 100;

			var leftSidePokemon_SPD = battleStats.pokemon1.metadata.speed;
			var leftSidePokemon_SPDWidth = (leftSidePokemon_SPD / 255) * 100;

			var leftSidePokemon_SPATT = battleStats.pokemon1.metadata.specialAttack;
			var leftSidePokemon_SPATTWidth = (leftSidePokemon_SPATT / 255) * 100;

			var leftSidePokemon_SPDEF = battleStats.pokemon1.metadata.specialDefense;
			var leftSidePokemon_SPDEFWidth = (leftSidePokemon_SPDEF / 255) * 100;

			// Right Pokemon stats..
			var rightSidePokemon_HP = battleStats.pokemon2.metadata.hp;
			var rightSidePokemon_HPWidth = (rightSidePokemon_HP / 255) * 100;

			var rightSidePokemon_ATT = battleStats.pokemon2.metadata.attack;
			var rightSidePokemon_ATTWidth = (rightSidePokemon_ATT / 255) * 100;

			var rightSidePokemon_DEF = battleStats.pokemon2.metadata.defense;
			var rightSidePokemon_DEFWidth = (rightSidePokemon_DEF / 255) * 100;

			var rightSidePokemon_SPD = battleStats.pokemon2.metadata.speed;
			var rightSidePokemon_SPDWidth = (rightSidePokemon_SPD / 255) * 100;

			var rightSidePokemon_SPATT = battleStats.pokemon2.metadata.specialAttack;
			var rightSidePokemon_SPATTWidth = (rightSidePokemon_SPATT / 255) * 100;

			var rightSidePokemon_SPDEF = battleStats.pokemon2.metadata.specialDefense;
			var rightSidePokemon_SPDEFWidth = (rightSidePokemon_SPDEF / 255) * 100;

			var outputLeftBattleStats =
			"<div id='slider-stats-battle-hp-left'>"+
				"<div id='hp-left'><div id='hp-left-bar' style='width:" + leftSidePokemon_HPWidth + "px'></div><div id='hp-left-num'>" + leftSidePokemon_HP + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-att-left'>"+
				"<div id='att-left'><div id='att-left-bar' style='width:" + leftSidePokemon_ATTWidth + "px'></div><div id='att-left-num'>" + leftSidePokemon_ATT + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-def-left'>"+
				"<div id='def-left'><div id='def-left-bar' style='width:" + leftSidePokemon_DEFWidth + "px'></div><div id='def-left-num'>" + leftSidePokemon_DEF + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spatt-left'>"+
				"<div id='spatt-left'><div id='spatt-left-bar' style='width:" + leftSidePokemon_SPATTWidth + "px'></div><div id='spatt-left-num'>" + leftSidePokemon_SPATT + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spdef-left'>"+
				"<div id='spdef-left'><div id='spdef-left-bar' style='width:" + leftSidePokemon_SPDEFWidth + "px'></div><div id='spdef-left-num'>" + leftSidePokemon_SPDEF + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spd-left'>"+
				"<div id='spd-left'><div id='spd-left-bar' style='width:" + leftSidePokemon_SPDWidth + "px'></div><div id='spd-left-num'>" + leftSidePokemon_SPD + "</div></div>"+
			"</div>";
			$('#slider-stats-battle-left').html(outputLeftBattleStats);

			var outputLeftInfo =
			"<div id='output-left-info'>"+
				"<div>"+
					"<span>Generation:</span> " + battleStats.pokemon1.metadata.generation +
				"</div>"+
				"<div>"+
					"<span>Height:</span> " + battleStats.pokemon1.metadata.height + "m" +
				"</div>"+
				"<div>"+
					"<span>Weight:</span> " + battleStats.pokemon1.metadata.weight + "kg" +
				"</div>"+
				"<div id='type-left'>"+
					"<span>Type:</span> " + leftSidePokemon_Type +
				"</div>"+
			"</div>";
			$('#left-side-card-pic-more-info').html(outputLeftInfo);
			
			if (leftSidePokemon_Type2) {
				$('#type-left').html("<span>Type:</span> " + leftSidePokemon_Type + "/" + leftSidePokemon_Type2);
			};

			var outputRightBattleStats =
			"<div id='slider-stats-battle-hp-right'>"+
				"<div id='hp-right'><div id='hp-right-bar' style='width:" + rightSidePokemon_HPWidth + "px'></div><div id='hp-right-num'>" + rightSidePokemon_HP + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-att-right'>"+
				"<div id='att-right'><div id='att-right-bar' style='width:" + rightSidePokemon_ATTWidth + "px'></div><div id='att-right-num'>" + rightSidePokemon_ATT + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-def-right'>"+
				"<div id='def-right'><div id='def-right-bar' style='width:" + rightSidePokemon_DEFWidth + "px'></div><div id='def-right-num'>" + rightSidePokemon_DEF + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spatt-right'>"+
				"<div id='spatt-right'><div id='spatt-right-bar' style='width:" + rightSidePokemon_SPATTWidth + "px'></div><div id='spatt-right-num'>" + rightSidePokemon_SPATT + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spdef-right'>"+
				"<div id='spdef-right'><div id='spdef-right-bar' style='width:" + rightSidePokemon_SPDEFWidth + "px'></div><div id='spdef-right-num'>" + rightSidePokemon_SPDEF + "</div></div>"+
			"</div>"+
			"<div id='slider-stats-battle-spd-right'>"+
				"<div id='spd-right'><div id='spd-right-bar' style='width:" + rightSidePokemon_SPDWidth + "px'></div><div id='spd-right-num'>" + rightSidePokemon_SPD + "</div></div>"+
			"</div>";
			$('#slider-stats-battle-right').html(outputRightBattleStats);

			var outputRightInfo =
			"<div id='output-right-info'>"+
				"<div>"+
					"<span>Generation:</span> " + battleStats.pokemon2.metadata.generation +
				"</div>"+
				"<div>"+
					"<span>Height:</span> " + battleStats.pokemon2.metadata.height + "m" +
				"</div>"+
				"<div>"+
					"<span>Weight:</span> " + battleStats.pokemon2.metadata.weight + "kg" +
				"</div>"+
				"<div id='type-right'>"+
					"<span>Type:</span> " + rightSidePokemon_Type +
				"</div>"+
			"</div>";
			$('#right-side-card-pic-more-info').html(outputRightInfo);

			if (rightSidePokemon_Type2) {
				$('#type-right').html("<span>Type:</span> " + rightSidePokemon_Type + "/" + rightSidePokemon_Type2);
			};

			compareHP();
			compareATT();
			compareDEF();
			compareSPATT();
			compareSPDEF();
			compareSPD();

			function compareHP() {
				if(leftSidePokemon_HP > rightSidePokemon_HP) {
					$('#hp-left-bar').addClass('advantage');
					$('#hp-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_HP < rightSidePokemon_HP) {
					$('#hp-right-bar').addClass('advantage');
					$('#hp-left-bar').addClass('disadvantage');
				} else {
					$('#hp-left-bar').addClass('disadvantage');
					$('#hp-right-bar').addClass('disadvantage');
				}
			};

			function compareATT() {
				if(leftSidePokemon_ATT > rightSidePokemon_ATT) {
					$('#att-left-bar').addClass('advantage');
					$('#att-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_ATT < rightSidePokemon_ATT) {
					$('#att-right-bar').addClass('advantage');
					$('#att-left-bar').addClass('disadvantage');
				} else {
					$('#att-left-bar').addClass('disadvantage');
					$('#att-right-bar').addClass('disadvantage');
				}
			};

			function compareDEF() {
				if(leftSidePokemon_DEF > rightSidePokemon_DEF) {
					$('#def-left-bar').addClass('advantage');
					$('#def-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_DEF < rightSidePokemon_DEF) {
					$('#def-right-bar').addClass('advantage');
					$('#def-left-bar').addClass('disadvantage');
				} else {
					$('#def-left-bar').addClass('disadvantage');
					$('#def-right-bar').addClass('disadvantage');
				}
			};

			function compareSPATT() {
				if(leftSidePokemon_SPATT > rightSidePokemon_SPATT) {
					$('#spatt-left-bar').addClass('advantage');
					$('#spatt-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_SPATT < rightSidePokemon_SPATT) {
					$('#spatt-right-bar').addClass('advantage');
					$('#spatt-left-bar').addClass('disadvantage');
				} else {
					$('#spatt-left-bar').addClass('disadvantage');
					$('#spatt-right-bar').addClass('disadvantage');
				}
			};

			function compareSPDEF() {
				if(leftSidePokemon_SPDEF > rightSidePokemon_SPDEF) {
					$('#spdef-left-bar').addClass('advantage');
					$('#spdef-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_SPDEF < rightSidePokemon_SPDEF) {
					$('#spdef-right-bar').addClass('advantage');
					$('#spdef-left-bar').addClass('disadvantage');
				} else {
					$('#spdef-left-bar').addClass('disadvantage');
					$('#spdef-right-bar').addClass('disadvantage');
				}
			};

			function compareSPD() {
				if(leftSidePokemon_SPD > rightSidePokemon_SPD) {
					$('#spd-left-bar').addClass('advantage');
					$('#spd-right-bar').addClass('disadvantage');
				} else if (leftSidePokemon_SPD < rightSidePokemon_SPD) {
					$('#spd-right-bar').addClass('advantage');
					$('#spd-left-bar').addClass('disadvantage');
				} else {
					$('#spd-left-bar').addClass('disadvantage');
					$('#spd-right-bar').addClass('disadvantage');
				}
			};

			if (battleScore == 50) {
				var rotate = 'zero'
				winner = leftSidePokemon.metadata.name;
			} else if (winner == leftSidePokemon_ID) {
				var rotate = 'negative-45';
				winner = leftSidePokemon.metadata.name;
			} else {
				var rotate = 'positive-45';
				winner = rightSidePokemon.metadata.name;
			};

			var outputWinner = 
			"<div id='slider-pokeball-winner-rotate'>"+
				"<img src='images/pokeball_rotate.png' alt='pokeball' id='pokeball' />"+
			"</div>"+
			"<div id='slider-pokeball-winner-battlescore'>"+
				battleScore +
			"</div>"+
			"<div id='slider-pokeball-winner-pokemon'>"+
				winner +
			"</div>"+
			"<div id='slider-pokeball-winner-message'><span>"+
				message +
			"<span></div>";
			$('#slider-pokeball-winner').html(outputWinner);

			$('#slider-pokeball-header').click(function() {
				$('#vs-matchup-slider').stop().animate({
					left: '0'
				}, 500);
			});

			$('#slider-stats-header').click(function() {
				$('#vs-matchup-slider').stop().animate({
					left: '260'
				}, 500);
				$('#vs-left-side-card').stop().animate({
					top: '0'
				}, 500);
				$('#vs-right-side-card').stop().animate({
					top: '0'
				}, 500);
			});

			setTimeout(function() {
				$('#pokeball').addClass(rotate);
			}, 500);

			setTimeout(function() {
				battleReset(); 
				$('#footer-battle-reset-button').show();
			}, 1500);

			$('#slider-pokeball-header').click(function() {
				$('#vs-left-side-card').stop().animate({
					top: '-221'
				}, 500);
				$('#vs-right-side-card').stop().animate({
					top: '-221'
				}, 500);
			});

		};

	});

})(jQuery);