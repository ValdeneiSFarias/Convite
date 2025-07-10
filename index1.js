// Supondo que o botão 'inicio' tem id="inicio"
document.addEventListener('DOMContentLoaded', function() {
    const btnInicio = document.getElementById('inicio');
    if (btnInicio) {
        btnInicio.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
 /*botão final*/
document.addEventListener('DOMContentLoaded', function() {
    const btnFinal = document.getElementById('final');
    if (btnFinal) {
        btnFinal.addEventListener('click', function(e) {
            e.preventDefault();
            // Alterado para rolar até o final da página
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
    }
    // Botão confirmar presença (WhatsApp)
    const btnWhatsapp = document.querySelector('#whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', function(e) {
            e.preventDefault();

            // Seleciona todos os checkboxes marcados
            const selecionados = Array.from(document.querySelectorAll('.licheckbox:checked'));
            // Para cada checkbox marcado, pega o texto do span.textzimg irmão
            const itens = selecionados.map(cb => {
                const span = cb.parentElement.querySelector('.textzimg');
                return span ? span.innerText : '';
            }).filter(txt => txt.trim() !== '');

            // Monta a mensagem
            let mensagem = "Eu confirmo presença no chá de bebê do Ravi.%0ALevarei de Presente para ele:";
            if (itens.length > 0) {
                mensagem += "%0A- " + itens.join("%0A- ");
            } else {
                mensagem += "%0A(nenhum presente selecionado)";
            }

            // Número do WhatsApp (coloque o número desejado com DDD e código do país, ex: 5511999999999)
            const numero = "5511999999999";
            const url = `https://wa.me/${numero}?text=${mensagem}`;

            // Abre o WhatsApp
            window.open(url, '_blank');
        });
    }
});