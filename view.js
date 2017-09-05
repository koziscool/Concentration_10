

matcherView = {

	model: matcherModel,

	init: function(  ) {
		this.$grid = $("#matcher-grid");
		for( var i = 0; i < this.model.cards.length ; i++ ) {
			var card = this.model.cards[i];
			var $cardDiv = $('<div><div class="name">' + card.value  + '</div></div>');
			$cardDiv.addClass('card');
			$cardDiv.data('card-id', card.id);
			$cardDiv.attr('id', 'card-' + card.id);
			this.$grid.append( $cardDiv );
		}

		var width = 100 / this.model.size - 2;
		$('.card').css({
			width: width + "%"
		});

		$('.card').click( function(  ) {
			matcherController.selectCard( $(this).data('card-id') );	
		});

	},

	revealCard: function( id ) {
		console.log('reveal', id);
		$('#card-' + id).addClass('revealed');
	},

	setCorrect: function( id ) {
		$('#card-' + id).addClass('correct');
		$('#card-' + id).off('click');
	},

	hideCards: function(  ) {
		$('.card').not('.correct').removeClass('revealed');
	},

	updateGameState: function( args ) {
		$('#game-state-text').text( this.model.gameStateText );
		$('#matched-cards').text( this.model.matchedCards );
		$('#total-cards').text( this.model.cards.length );
		$('#num-guesses').text( this.model.numGuesses );
	},

};


