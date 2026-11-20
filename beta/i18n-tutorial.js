// PSC PRO — tabela exclusiva do tutorial
// Chave = texto em inglês exatamente como está no app (TUTORIAL_STEPS, TUT_CARD_STEPS e botões do balão).
// Valor = [PT-PT, PT-BR, ES]. Termos de jogo seguem o glossário (Change Sides, Yes, New Game, Points, Golden Point, Star Point).
// Se uma chave não existir aqui, o texto aparece em inglês.

const PSC_TUT_TABLE = {
    'Padel Coaching Pro Tutorial': ['Tutorial do Padel Coaching Pro', 'Tutorial do Padel Coaching Pro', 'Tutorial de Padel Coaching Pro'],
    'Step by step to enjoy all the features': ['Passo a passo para aproveitar todas as funcionalidades', 'Passo a passo para aproveitar todas as funcionalidades', 'Paso a paso para aprovechar todas las funciones'],
    'Padel Coaching Pro supports your athlete\'s development, turning match data into insights for your coaching.': ['O Padel Coaching Pro apoia o desenvolvimento do seu atleta, transformando dados dos jogos em insights para o seu treino.', 'O Padel Coaching Pro apoia o desenvolvimento do seu atleta, transformando dados dos jogos em insights para o seu treino.', 'Padel Coaching Pro apoya el desarrollo de tu deportista, convirtiendo los datos de los partidos en insights para tu entrenamiento.'],
    'It generates stats that highlight where more training focus is needed.': ['Gera estatísticas que destacam onde é preciso mais foco no treino.', 'Gera estatísticas que destacam onde é preciso mais foco no treino.', 'Genera estadísticas que destacan dónde hace falta más enfoque en el entrenamiento.'],
    'Plus insights into mental performance and game strategy.': ['Além disso, insights sobre desempenho mental e estratégia de jogo.', 'Além disso, insights sobre desempenho mental e estratégia de jogo.', 'Además, insights sobre rendimiento mental y estrategia de juego.'],
    'Suggested setup: place each player where they stand on court, as seen from behind the Glass Wall. Change Sides flips the layout at any time.': ['Configuração sugerida: coloque cada jogador onde ele está na quadra, vista de trás do Vidro do fundo. Trocar de Lado inverte o layout a qualquer momento.', 'Configuração sugerida: posicione cada jogador onde ele está na quadra, vista de trás do Vidro do fundo. Trocar de Lado inverte o layout a qualquer momento.', 'Configuración sugerida: coloca a cada jugador donde está en la pista, visto desde detrás del Glass Wall. Cambiar Lado invierte la disposición en cualquier momento.'],
    'Suggested player positions': ['Posições sugeridas dos jogadores', 'Posições sugeridas dos jogadores', 'Posiciones sugeridas de los jugadores'],
    'Update the logo, player names and photos here.': ['Atualize aqui o logótipo, os nomes e as fotos dos jogadores.', 'Atualize aqui o logo, os nomes e as fotos dos jogadores.', 'Actualiza aquí el logotipo, los nombres y las fotos de los jugadores.'],
    'History: review past matches, with stats, AI analysis, match log and export.': ['Histórico: reveja jogos anteriores, com estatísticas, análise por IA, Ponto a Ponto e exportação.', 'Histórico: revise jogos anteriores, com estatísticas, análise por IA, Ponto a Ponto e exportação.', 'Historial: revisa partidos anteriores, con estadísticas, análisis con IA, Punto a Punto y exportación.'],
    'Padel Calendar: browse the tournament calendar.': ['Calendário de Padel: consulte o calendário de torneios.', 'Calendário de Padel: consulte o calendário de torneios.', 'Calendario de Pádel: consulta el calendario de torneos.'],
    'Setup: match format, scoring and app settings.': ['Configuração: formato do jogo, pontuação e definições do app.', 'Configuração: formato do jogo, pontuação e configurações do app.', 'Configuración: formato del partido, puntuación y ajustes de la app.'],
    'SETUP is where you prepare the match. Next opens it for you.': ['A CONFIGURAÇÃO é onde prepara o jogo. Seguinte abre-a para si.', 'A CONFIGURAÇÃO é onde você prepara o jogo. Próximo abre para você.', 'CONFIGURACIÓN es donde preparas el partido. Siguiente la abre por ti.'],
    'Choose the match format: 3 Sets, 2 Sets + SuperTie, or ProSet.': ['Escolha o formato do jogo: 3 Sets, 2 Sets + SuperTie ou ProSet.', 'Escolha o formato do jogo: 3 Sets, 2 Sets + SuperTie ou ProSet.', 'Elige el formato del partido: 3 Sets, 2 Sets + SuperTie o ProSet.'],
    'Pick Golden Point or Star Point for deuce.': ['Escolha Ponto de Ouro ou Star Point para os iguais.', 'Escolha Ponto de Ouro ou Star Point para os iguais.', 'Elige Punto de Oro o Star Point para los iguales.'],
    'Turn point statistics on or off for this match.': ['Ative ou desative as estatísticas de pontos neste jogo.', 'Ative ou desative as estatísticas de pontos neste jogo.', 'Activa o desactiva las estadísticas de puntos en este partido.'],
    'Choose the app language. It applies to the whole app and to the AI Analysis. Next returns to the scoreboard.': ['Escolha o idioma do app. Ele vale para toda a aplicação e para a Análise por IA. Seguinte volta ao placar.', 'Escolha o idioma do app. Ele vale para todo o app e para a Análise por IA. Próximo volta ao placar.', 'Elige el idioma de la app. Vale para toda la aplicación y para el Análisis con IA. Siguiente vuelve al marcador.'],
    'New Game starts a new match.': ['Novo Jogo inicia um novo jogo.', 'Novo Jogo inicia um novo jogo.', 'Nuevo Partido inicia un nuevo partido.'],
    'The first serve is chosen by tapping the ball, for both pairs. This happens every time a match or set starts.': ['O primeiro serviço é escolhido tocando na bola, para as duas duplas. Isso acontece sempre que um jogo ou set começa.', 'O primeiro saque é escolhido tocando na bola, para as duas duplas. Isso acontece sempre que um jogo ou set começa.', 'El primer saque se elige tocando la pelota, para ambas parejas. Esto ocurre cada vez que empieza un partido o un set.'],
    'Each point is added by tapping the Points box for the team that won it.': ['Cada ponto é marcado tocando na caixa de Pontos da dupla que o ganhou.', 'Cada ponto é marcado tocando na caixa de Pontos da dupla que o ganhou.', 'Cada punto se suma tocando la casilla de Puntos de la pareja que lo ganó.'],
    'Hold any value for a moment to decrease it.': ['Mantenha qualquer valor pressionado por um momento para o diminuir.', 'Mantenha qualquer valor pressionado por um momento para diminuí-lo.', 'Mantén pulsado cualquier valor un momento para disminuirlo.'],
    'At the end of a game, tap Change Sides whenever you want to switch sides, then tap Yes.': ['No fim de um jogo, toque em Trocar de Lado sempre que quiser trocar de lado e depois em Sim.', 'No fim de um jogo, toque em Trocar de Lado sempre que quiser trocar de lado e depois em Sim.', 'Al final de un juego, toca Cambiar Lado cuando quieras cambiar de lado y luego toca Sí.'],
    'Tap Change Sides again and Yes to undo the switch, until the first point after the change.': ['Toque outra vez em Trocar de Lado e em Sim para desfazer a troca, até ao primeiro ponto depois da troca.', 'Toque outra vez em Trocar de Lado e em Sim para desfazer a troca, até o primeiro ponto depois da troca.', 'Toca otra vez Cambiar Lado y Sí para deshacer el cambio, hasta el primer punto después del cambio.'],
    'Tutorial complete': ['Tutorial concluído', 'Tutorial concluído', 'Tutorial completado'],
    'Enjoy Padel Coaching Pro, and make the most of the app!': ['Aproveite o Padel Coaching Pro e tire o máximo partido da aplicação!', 'Aproveite o Padel Coaching Pro e tire o máximo proveito do app!', '¡Disfruta de Padel Coaching Pro y saca el máximo partido a la app!'],
    'Show Match Card: tap it to see how the match stands so far.': ['Ver Card do jogo: toque para ver como está o jogo até agora.', 'Ver Card do jogo: toque para ver como está o jogo até agora.', 'Ver Match Card: toca para ver cómo va el partido hasta ahora.'],
    'Change Sides': ['Trocar de Lado', 'Trocar de Lado', 'Cambiar Lado'],
    '💡 Tip': ['💡 Dica', '💡 Dica', '💡 Consejo'],
    'Next': ['Seguinte', 'Próximo', 'Siguiente'],
    'Skip step': ['Saltar passo', 'Pular passo', 'Saltar paso'],
    'Skip tutorial': ['Saltar tutorial', 'Pular tutorial', 'Saltar tutorial'],
    'Got it': ['Percebi', 'Entendi', 'Entendido'],
    'Simulating a match — Pair 1 wins both sets…': ['A simular um jogo — a Dupla 1 vence os dois sets…', 'Simulando um jogo — a Dupla 1 vence os dois sets…', 'Simulando un partido — la Pareja 1 gana los dos sets…'],
};

// Texto do tutorial no idioma atual (pscCurrentLang vem de i18n.js). Fallback: inglês.
function tutT(s) {
    if (!s) return s;
    const entry = PSC_TUT_TABLE[s];
    const idx = (typeof PSC_LANG_INDEX !== 'undefined') ? PSC_LANG_INDEX[pscCurrentLang] : undefined;
    if (!entry || idx === undefined) return s;
    return entry[idx] || s;
}
