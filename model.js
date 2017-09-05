
matcherModel = {

	size: 4,
	cardValues: [ "R", "S", "T", "U", "W", "X", "Y", "Z" ],
	cards: [],
	numGuesses: 0,
	matchedCards: 0,
	currentId: 1,
	selectedCard: null,

	init: function( size ) {
		this.size = size || this.size;
		var numPairs = Math.pow( this.size, 2 ) / 2;
		for( var i = 0; i < numPairs ; i++ ) {
			var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length ) ];
			this.cards.push( new this.Card( this.getId(), value )  );
			this.cards.push( new this.Card( this.getId(), value ) );
		}
		this.shuffle();
	},

	getId: function(  ) {
		var id = this.currentId;
		this.currentId++;
		return id;
	},

	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},

	shuffle: function(  ) {
		var currentIndex = this.cards.length, rand, temp;

		while( currentIndex > 0 ) {
			rand = Math.floor( Math.random() * currentIndex );
			currentIndex--;

			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

	sameCard: function( id ) {
		return this.selectedCard && this.selectedCard.id === id;
	},


	getCard: function( id ) {
		for( var index in this.cards ) {
			if( this.cards[index].id === id ) return this.cards[index];
		}
		console.log('miss');
		return null;
	},

	setSelectedCard: function( id ) {
		this.selectedCard = this.getCard(id);
	},

	checkGuess: function( id ) {
		this.numGuesses++;
		var correct = this.selectedCard.value === this.getCard(id).value;

		this.selectedCard = null;
		if( correct ) this.matchedCards += 2;

		if( this.matchedCards === this.cards.length ) {
			this.gameStateText = "congratulations, you win!"
		}
		return correct;
	},
};



