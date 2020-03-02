
exports.action = function(data, callback){

	var tblCommand = {
		setTemp : function() {
			if (!Avatar.exists("Google-Assistant")) {
				Avatar.speak("Je suis désolé, le plugin Google assistant n'existe pas", data.client, function(){
					Avatar.Speech.end(data.client);
				});
			} else {
					Avatar.trigger('GoogleHome',{ client: data.client, sentence: data.rawSentence, callback: function (values) {
						Avatar.speak(Config.modules.Nest.tts, data.client, function(){
							Avatar.Speech.end(data.client);
						});
					}});
				}
			}
	};

	// Info console
	info("Nest:", data.action.command, "From:", data.client);

	tblCommand[data.action.command]();
	callback();

}
