chat = {

	global:{
		userName: 'yo',
		debug: true,

		chatBar: $('#chatBar')
	},

	/*
	* Iniciar servidor de Chat.
	*/
	initChat: function(){
		var self = this;
		//escuchar servidor
		socket = io.connect('http://localhost:8080/chat');

		socket.on('connect', function () {
          if (self.global.debug) console.log('connected');
          
          //status
          $('#myStatus').addClass('greenOnline');
        });
	},

	/*
	* Cerrar servidor de Chat.
	*/
	closeChat: function(){
		var self = this;
		//no escuchar servidor
		socket.on('disconnect', function() {
          if (self.global.debug) console.log('disconnected');

          //status
          $('#myStatus').removeClass('greenOnline');
        });
	},

	/*
	* Cuando se selecciona un usuario conectado,
	* se inicia un nuevo "channel" con ese user.
	*/
	startConversation: function(){
		var self = this;
		$('.user > li').on('click', function(){
			var el = $(this);

			socket.emit('join', channel, function (err) {
				if (err) return lines.append($('<p>').append($('<em>').text(err)));
				lines.append($('<p>').append($('<em>').text('You joined ' + channel)));
			});
		});
	},

	/*
	* Cuando se cierra la pantalla de conversacion,
	* se cierra esa sala.
	*/
	leaveConversation: function(){
		var self = this;
		$('.close').on('click',function(){

		});
	}
}