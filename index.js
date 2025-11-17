// Função para envio do formulário de contato para WhatsApp e e-mail
document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementById('contatoForm');
	if(form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			var nome = document.getElementById('nome').value;
			var email = document.getElementById('email').value;
			var telefone = document.getElementById('telefone').value;
			var mensagem = document.getElementById('mensagem').value;
			var texto = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
			// WhatsApp
			window.open(`https://wa.me/5527981538302?text=${texto}`, '_blank');
			// E-mail
			var mailto = `mailto:kauaputtin@gmail.com?subject=Contato do site&body=Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
			window.open(mailto, '_blank');
		});
	}
});
