const botaoTema = document.getElementById('botao-tema');
const body = document.body;

const temaSalvo = localStorage.getItem('tema') === 'dark' ? 'dark' : 'light';
aplicarTema(temaSalvo);

function aplicarTema(tema) {
    body.classList.remove('light', 'dark');
    body.classList.add(tema);
}

botaoTema.addEventListener('click', () => {
    const novoTema = body.classList.contains('dark') ? 'light' : 'dark';
    aplicarTema(novoTema);


    localStorage.setItem('tema', novoTema);
});
