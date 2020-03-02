'use strict';

// Ce module vérifie prépare l'objet data envoyé au plugin

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {

	return new Promise(function (resolve, reject) {

		for (var rule in Config.modules.Nest.rules) {
			var match = (0, _helpers.syntax)(state.sentence, Config.modules.Nest.rules[rule]);
			if (match) break;
		}

		// Décommentez si vous voulez rechercher une pièce dans la phrase.
		//let room = Avatar.ia.clientFromRule (state.rawSentence);

		setTimeout(function(){
			if (state.debug) info('Action Nest');

			state.action = {
				module: 'Nest',
				command: rule,
				sentence: state.sentence,
				rawSentence: state.rawSentence
			};
			resolve(state);
		}, 500);

	});
};
