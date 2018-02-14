// // Espera o carregamento do documento
// $(document).ready(function (){
// 	// cria variável com referência para o elemento com o id = 'conheca-me'
// 	var $btnConhecame = $('#conheca-me');
// 	// adiciona ação ao clique do botão
// 	$btnConhecame.on('click', function(){
// 		var conf = confirm('Você será redirecionada(o) para o meu curriculum online? Deseja continuar?');
// 		// if(conf){
// 		// 	alert('=)')
// 		// }else{
// 		// 	alert(':(');
// 		// }
// 	});

	$('.scroll-animate').on('click', function(event) {
		var $element, option, duration;
		// evita que a ação padrão do botão seja chamada.
		event.preventDefault();
		// pega o elemento clicado
		$element = $($.attr(this, 'href'));
		// opções de animação
		options = {
			scrollTop: $element.offset().top
		};
		// Duração em milisegundos
		duration = 700;
		// add efeito de animação
		$('html, body').animate(options, duration);
	});
// });