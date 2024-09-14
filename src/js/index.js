// Objetivo 1: Quando passar o mouse em cima do personagem, devemos seleciona lo
// passo 1: pegar os personagens no JS pra poder verificar quando o usuário passar o mouse por cima de algum deles
const personagens = document.querySelectorAll('.personagem')

//passo 2: adicionar a classe selecionada no personagem quando o usuário passar o cursor
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'})
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        if (personagemSelecionado && personagemSelecionado !== personagem) {
            personagemSelecionado.classList.remove('selecionado');
        }

        personagem.classList.add('selecionado');

        
//Objetivo 2: Quando passar o mouse em cima do personagem, trocar a imagem, o nome e a classificação e a desc
// Passo 1: pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //Passo 2: alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //Passo 3: alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4: alterar a descrição do personagem grande

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})
