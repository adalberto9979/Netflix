var indeceFilme = 0; //Variável global para armazenar informação do filme selecionado.

//Rotina a ser acionada quando mouse passar pelo filme.
function passouMouse(cFilme){
    var cArquivo = nomeArquvivo(cFilme);
    
    window.document.getElementById('titulo').innerHTML = titulo(cFilme);
    window.document.getElementById('descricao').innerHTML = sinopse(cFilme);
    window.document.getElementById("filmeprincipal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url("+cArquivo+")";
}

//Retorna o título do filme selecionado.
function titulo(cFilme) {
    var cTitulo = new Array();
    cTitulo[1] = "House of cards";
    cTitulo[2] = "Mulher maravilha 1984";
    cTitulo[3] = "Abaixo de zero";
    cTitulo[4] = "Os pequenos vestígios";
    cTitulo[5] = "Zona de combate";
    cTitulo[6] = "Monster hanter";
    cTitulo[7] = "Violação";
    cTitulo[8] = "Crocodilo a morte te espera";
    cTitulo[9] = "Agentes vanguard";
    cTitulo[10] = "Vingadores guerra infinita";
    cTitulo[11] = "the umbrella academy";
    cTitulo[12] = "star wars a ascensão skywalker";
    cTitulo[13] = "Pokemon";
    cTitulo[14] = "Guerra civil capitão america";
    cTitulo[15] = "o robert a batalha dos cinco exércitos";
    cTitulo[16] = "breaking bad";
    cTitulo[17] = "Dr House";
    cTitulo[18] = "Sobrenatural";
    cTitulo[19] = "smallville as aventuras do superboy";
    cTitulo[20] = "Nova ordem espacial";
    
    return cTitulo[cFilme].toUpperCase();
}

//Retorna o gênero do filme e um pequeno comentário.
function sinopse(cFilme) {
    var cMensagem = new Array();
    cMensagem[1] = "Seriado dramático em sua sexta temporada.";
    cMensagem[2] = "Filme de ação e fantasia. A Mulher-Maravilha enfrenta dois novos inimigos: Max Lord e Mulher-Leopardo.";
    cMensagem[3] = "Filme de drama e suspense. Violento com um toque de horror.";
    cMensagem[4] = "Filme policial de suspense.";
    cMensagem[5] = "Filme policial futurístico.";
    cMensagem[6] = "Filme de ação e fantasia.";
    cMensagem[7] = "Filme de ação e ficção científica.";
    cMensagem[8] = "Filme de suspense e terror. Sequência de ‘Medo Profundo’.";
    cMensagem[9] = "Filme de ação policial e muita violência.";
    cMensagem[10] = "Filme de ação e ficção científica.";
    cMensagem[11] = "Seriado de ação está em sua segunda temporada.";
    cMensagem[12] = "Filme de ficção científica.";
    cMensagem[13] = "Desenho e animação 3D.";
    cMensagem[14] = "Filme de ação e aventura.";
    cMensagem[15] = "Filme de fantasia e aventura.";
    cMensagem[16] = "Seriado de crime em sua quinta temporada.";
    cMensagem[17] = "Seriado de drama em sua oitava temporada.";
    cMensagem[18] = "Seriado de terror em sua decima quinta temporada.";
    cMensagem[19] = "Seriado de ação em sua décima temporada.";
    cMensagem[20] = "Filme de ação e ficção científica. Com efeitos especiais grandiosos.";
    
    indeceFilme = cFilme;
    return cMensagem[cFilme];
}

//Rotina para abrir a página com o trailer do filme, quando o botão assistir for clicado.
function assitirVideo() {
    var cAssistir = new Array();

    if(indeceFilme > 0){
        cAssistir[1] = "https://www.youtube.com/watch?v=kasvV-XyzqU"; //House of cards
        cAssistir[2] = "https://www.youtube.com/watch?v=xXEwp0uQmjM"; //Mulher maravilha 1984
        cAssistir[3] = "https://www.youtube.com/watch?v=KplaWcFyrYU"; //Abaixo de zero
        cAssistir[4] = "https://www.youtube.com/watch?v=hTP2m32UKtk"; //Os pequenos vestígios
        cAssistir[5] = "https://www.youtube.com/watch?v=71QFeMSE3qU"; //Zona combate
        cAssistir[6] = "https://www.youtube.com/watch?v=3od-kQMTZ9M"; //Monster hanter
        cAssistir[7] = "https://www.youtube.com/watch?v=E80LH3GdeaM"; //Violação
        cAssistir[8] = "https://www.youtube.com/watch?v=2O4-17MFyw8"; //Crocodilo a morte te espera
        cAssistir[9] = "https://www.youtube.com/watch?v=ADE2z1Yean4"; //Agentes vanguard
        cAssistir[10] = "https://www.youtube.com/watch?v=4jGRyEa2jhE"; //Vingadores guerra infinita
        cAssistir[11] = "https://www.youtube.com/watch?v=0DAmWHxeoKw"; //the umbrella academy
        cAssistir[12] = "https://www.youtube.com/watch?v=W0squnw6Jp8"; //star wars a ascensão skywalker
        cAssistir[13] = "https://www.youtube.com/watch?v=wlullNUrRSI"; //Pokemon
        cAssistir[14] = "https://www.youtube.com/watch?v=FRLYZn5PGuA"; //Guerra civil capitão america
        cAssistir[15] = "https://www.youtube.com/watch?v=VKkFW5TTB6g"; //o robert a batalha dos cinco exércitos
        cAssistir[16] = "https://www.youtube.com/watch?v=HhesaQXLuRY"; //breaking bad
        cAssistir[17] = "https://www.youtube.com/watch?v=AwpdlRyhZ3I"; //Dr House
        cAssistir[18] = "https://www.youtube.com/watch?v=DNgS8dNrbAg"; //Sobrenatural
        cAssistir[19] = "https://www.youtube.com/watch?v=Z0f9zZywHNo"; //smallville as aventuras do superboy
        cAssistir[20] = "https://www.youtube.com/watch?v=v6jmKLAW928"; //Nova ordem espacial
    
        window.open(cAssistir[indeceFilme]);
    }
}

//Mostra informações do filme, quando o botão mais informações for clicado.
function maisInformacoes() {
    var cMensagem = new Array();
    cMensagem[1] = "O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos, não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capital Washington.";
    cMensagem[2] = "Avance para os anos 80, numa aventura que mostrará a Mulher-Maravilha enfrentando novos inimigos, incluindo Max Lord e a Mulher-Leopardo.";
    cMensagem[3] = "Um ônibus penitenciário é atacado e o policial encarregado tem que enfrentar criminosos dentro e fora do veículo, além de um inimigo silencioso: o frio congelante.";
    cMensagem[4] = "O delegado adjunto do condado de Kern, Joe Deke Deacon (Denzel Washington), é enviado a Los Angeles para o que deveria ser uma rápida coleta de provas. Em vez disso, ele se envolve na busca por um assassino em série que está aterrorizando a cidade.";
    cMensagem[5] = "Em Zona de Combate, um piloto (Anthony Mackie) é enviado a uma zona militar com a missão de localizar um perigoso dispositivo capaz de causar o apocalipse. Auxiliado por um androide, ele precisa evitar que o aparato seja encontrado por líderes insurgentes.";
    cMensagem[6] = "Baseado no jogo da Capcom chamado Monster Hunter, a tenente Artemis e seus soldados são transportados para um novo mundo. Lá, eles se envolvem em batalhas imponentes, buscando desesperadamente a sobrevivência contra bestas gigantes portadoras de habilidades surreais.";
    cMensagem[7] = "Um jovem clandestino está a bordo de uma arca interestelar para a Nova Terra. Com a ajuda de um experiente companheiro de tripulação, ele deve superar um terror cósmico malévolo com a intenção de usar a nave espacial como arma.";
    cMensagem[8] = "Um casal aventureiro que convence seus amigos a explorar um remoto sistema de cavernas nas florestas do norte da Austrália. Com uma tempestade se aproximando, eles descem para a entrada da caverna, que começa a inundar, e se encontram ameaçados por um bando de crocodilos, o que os levará a uma intensa luta pela sobrevivência.";
    cMensagem[9] = "Tang Huating é o chefe de uma agência de segurança chinesa que precisa se unir com autoridades de Dubai para capturar o grupo de mercenários mais fatal do mundo. O objetivo é salvar o homem que o contratou, é alvo dos criminosos.";
    cMensagem[10] = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.";
    cMensagem[11] = "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família, além de uma ameaça iminente à humanidade.";
    cMensagem[12] = "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren.";
    cMensagem[13] = "Desenho 3D do pokemon.";
    cMensagem[14] = "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.";
    cMensagem[15] = "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.";
    cMensagem[16] = "O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.";
    cMensagem[17] = "No fictício Hospital-Escola Plainsboro de Princeton, no estado de Nova Jersey, o gênio afiado Dr. Gregory House ataca mistérios de saúde como o faria um Sherlock Holmes médico. Tudo isso enquanto se engaja em jogos mentais com os colegas, como o melhor amigo, o oncologista James Wilson. House, um amargurado especialista em doenças infecciosas, desvenda mistérios médicos com a ajuda de uma equipe de jovens profissionais. Instinto perfeito e raciocínio não-convencional trazem grande respeito a House, apesar de sua honestidade brutal e tendências antissociais.";
    cMensagem[18] = "Os irmãos Sam e Dean Winchester encaram cenários sinistros caçando monstros. Velhos truques, armas e esconderijos não funcionam mais e seus amigos os traem, forçando os irmãos a contar um com o outro enquanto enfrentam novos inimigos.";
    cMensagem[19] = "Uma interpretação da história de Superman mostra o jovem Clark Kent aprendendo a usar seus superpoderes em Kansas.";
    cMensagem[20] = "Em 2092, quatro rebeldes em busca de sonhos e lixo espacial encontram segredos explosivos ao tentar vender uma humanoide.";
    
    window.document.getElementById('descricao').innerHTML = cMensagem[indeceFilme];
}

//Criar o nome do arquivo com a sequência de dois dígitos.
function nomeArquvivo(cFilme){
    var cSequencia = "0"+cFilme.toString();
    var cArquivo = "";
    
    if (cSequencia.length > 2){
        cSequencia = cSequencia.substr(1);
    }
    cArquivo = 'img/capa'+cSequencia+'.jpg';

    return cArquivo;
}

//Rotinas a serem executadas quando algum item do menu for clicado.
function carregarFilmes(cGenero) {
    if(cGenero === 1){ //Inicio - recarregar a pagina.
        document.location.reload(true);
    } else if(cGenero === 2){ //Implementar rotinas para selecionar apenas seriados.
        alert("Não foi possivel selecionar os seriados");
    } else if(cGenero === 3){ //Implementar rotinas para selecionar apenas filmes.
        alert("Não foi possivel selecionar os filmes");
    } else{ //Implementar rotinas para selecionar apenas documentários.
        alert("Não foi possivel selecionar os documentários");
    }
}









/*rotinas (sem conclusão) para mostrar apenas filmes selecionados.
function carregarFilmes(cGenero) {
    var cImg;
    window.document.getElementById("filmes").innerHTML = "";
    for(var i = 1; i <= 9; i++){
        cImg = document.createElement("IMG");
        cImg.setAttribute("class", "box-filme");
        cImg.setAttribute("alt", "");
        cImg.setAttribute("src", "img/mini0"+i.toString()+".jpg");
        document.getElementById('filmes').appendChild(cImg);
    }
    loadCSS();
}

function loadCSS() {
    var cHead = document.getElementsByTagName('head')[0];  
    var cIink = document.createElement('link'); 
    cIink.setAttribute("rel", 'stylesheet');  
    cIink.setAttribute("type", 'text/css');
    cIink.setAttribute("href", "style/main.css");
    cHead.appendChild(cIink);  

    cIink.setAttribute("href", "style/responsive.css");
    cHead.appendChild(cIink);  

    cIink.setAttribute("href", "style/owl/owl.carousel.min.css");
    cHead.appendChild(cIink);  

    cIink.setAttribute("href", "style/owl/owl.theme.default.min.css");
    cHead.appendChild(cIink);  

}
*/