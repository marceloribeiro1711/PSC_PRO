// PSC PRO — idiomas da interface
// Chave = texto em inglês exatamente como aparece no app (sem espaços nas pontas).
// Valor = [PT-PT, PT-BR, ES]. Inglês é o próprio texto da chave.
// Termos de jogo seguem o glossário: Winner, Break Point, Set e Star Point não se traduzem.
// Para acrescentar um texto: basta incluir uma linha aqui; o app traduz sozinho.

const PSC_LANG_TABLE = {
    'Serve Won': ['Serviço Vencido', 'Saques Confirmados', 'Servicio Ganado'],
    'Broken Serve': ['Breaks', 'Saques Quebrados', 'Breaks'],
    'Double Fault': ['Dupla Falta', 'Dupla Falta', 'Doble Falta'],
    'Unforced Errors': ['Erros Não Forçados', 'Erros Não Forçados', 'Errores No Forzados'],
    'Forced Errors': ['Erros Forçados', 'Erros Forçados', 'Errores Forzados'],
    'Change Sides': ['Trocar de Lado', 'Trocar de Lado', 'Cambiar Lado'],
    'Golden Point': ['Ponto de Ouro', 'Ponto de Ouro', 'Punto de Oro'],
    'GOLDEN POINT': ['PONTO DE OURO', 'PONTO DE OURO', 'PUNTO DE ORO'],
    'STATISTIC': ['ESTATÍSTICA', 'ESTATÍSTICA', 'ESTADÍSTICA'],
    'PLAYER': ['JOGADOR', 'JOGADOR', 'JUGADOR'],
    'Break Points opportunities:': ['Oportunidades de Break:', 'Oportunidades de Break:', 'Oportunidades de Break:'],
    'Match Log': ['Ponto a Ponto', 'Ponto a Ponto', 'Punto a Punto'],
    'Statistic': ['Estatística', 'Estatística', 'Estadística'],
    'Loading…': ['A carregar…', 'Carregando…', 'Cargando…'],
    'BROKEN': ['BREAKS', 'BREAKS', 'BREAKS'],
    'Choose tournament logo': ['Escolher logo do torneio', 'Escolher logo do torneio', 'Elegir logo del torneo'],
    'More': ['Mais', 'Mais', 'Más'],
    'Send another image': ['Enviar outra imagem', 'Enviar outra imagem', 'Enviar otra imagen'],
    'Logo size 320 x 106 pixels': ['Tamanho do logo: 320 x 106 px', 'Tamanho do logo: 320 x 106 px', 'Tamaño del logo: 320 x 106 px'],
    'Points': ['Pontos', 'Pontos', 'Puntos'],
    'No point-by-point data available for this game.': ['Sem dados ponto a ponto para este jogo.', 'Sem dados ponto a ponto para este jogo.', 'No hay datos punto a punto para este juego.'],
    'No Match Log data for this match': ['Sem dados do Ponto a Ponto neste jogo', 'Sem dados do Ponto a Ponto neste jogo', 'No hay datos de Punto a Punto en este partido'],
    'Player 1': ['Jogador 1', 'Jogador 1', 'Jugador 1'],
    'Player 2': ['Jogador 2', 'Jogador 2', 'Jugador 2'],
    'Player 3': ['Jogador 3', 'Jogador 3', 'Jugador 3'],
    'Player 4': ['Jogador 4', 'Jogador 4', 'Jugador 4'],
    'Team 1': ['Equipa 1', 'Equipe 1', 'Pareja 1'],
    'Team 2': ['Equipa 2', 'Equipe 2', 'Pareja 2'],
    'END OF MATCH': ['FIM DO JOGO', 'FIM DO JOGO', 'FIN DEL PARTIDO'],
    '🏆 Show Match Card': ['🏆 Ver Card do jogo', '🏆 Ver Card do jogo', '🏆 Ver Match Card'],
    'Set locked until manual adjustments are finished': ['Set bloqueado até terminarem os ajustes manuais', 'Set travado até terminar os ajustes manuais', 'Set bloqueado hasta terminar los ajustes manuales'],
    'Adjust to close it or to a score that keeps the Set open': ['Ajuste para fechá-lo ou para um marcador que mantenha o Set aberto', 'Ajuste para fechar ou para um placar que mantenha o Set aberto', 'Ajuste para cerrarlo o para un marcador que mantenga el Set abierto'],
    'Tap the ball to decide who will serve first': ['Toque na bola para decidir quem serve primeiro', 'Toque na bola para decidir quem saca primeiro', 'Toca la pelota para decidir quién saca primero'],
    'Time': ['Tempo', 'Tempo', 'Tiempo'],
    'New Game': ['Novo Jogo', 'Novo Jogo', 'Nuevo Partido'],
    'History': ['Histórico', 'Histórico', 'Historial'],
    'Notes': ['Notas', 'Anotações', 'Notas'],
    'Padel Calendar': ['Calendário de Padel', 'Calendário de Padel', 'Calendario de Pádel'],
    'Setup': ['Configuração', 'Configuração', 'Configuración'],
    'History not available in TV MODE.': ['Histórico indisponível no modo TV.', 'Histórico indisponível no modo TV.', 'Historial no disponible en modo TV.'],
    'Rotate your screen': ['Rode o ecrã', 'Gire a tela', 'Gire la pantalla'],
    'BACK': ['VOLTAR', 'VOLTAR', 'VOLVER'],
    'Last 10 Games': ['Últimos 10 jogos', 'Últimos 10 jogos', 'Últimos 10 partidos'],
    'AI Analysis': ['Análise por IA', 'Análise por IA', 'Análisis con IA'],
    'Export PDF': ['Exportar PDF', 'Exportar PDF', 'Exportar PDF'],
    'Export Excel': ['Exportar Excel', 'Exportar Excel', 'Exportar Excel'],
    '✨ Generating AI Analysis…': ['✨ A gerar análise por IA…', '✨ Gerando análise por IA…', '✨ Generando análisis con IA…'],
    'Please wait before leaving this screen': ['Aguarde antes de sair deste ecrã', 'Aguarde antes de sair desta tela', 'Espere antes de salir de esta pantalla'],
    'AI Analysis Failed': ['Falha na análise por IA', 'Falha na análise por IA', 'Error en el análisis con IA'],
    'Couldn\'t generate the analysis — no connection, or the server didn\'t respond in time.': ['Não foi possível gerar a análise: sem ligação ou o servidor não respondeu a tempo.', 'Não foi possível gerar a análise: sem conexão ou o servidor não respondeu a tempo.', 'No se pudo generar el análisis: sin conexión o el servidor no respondió a tiempo.'],
    'Exit': ['Sair', 'Sair', 'Salir'],
    'Try Again': ['Tentar novamente', 'Tentar novamente', 'Reintentar'],
    'GAME': ['JOGO', 'JOGO', 'JUEGO'],
    'Game Setup': ['Configuração do jogo', 'Configuração do jogo', 'Configuración del partido'],
    'Set Mode': ['Modo de set', 'Modo de set', 'Modo de set'],
    'Point Mode': ['Modo de ponto', 'Modo de ponto', 'Modo de punto'],
    'Statistics': ['Estatísticas', 'Estatísticas', 'Estadísticas'],
    'On': ['Ligado', 'Ligado', 'Activado'],
    'Off': ['Desligado', 'Desligado', 'Desactivado'],
    'LANGUAGE': ['IDIOMA', 'IDIOMA', 'IDIOMA'],
    'Show Tutorial': ['Mostrar tutorial', 'Mostrar tutorial', 'Mostrar tutorial'],
    'Privacy Policy': ['Política de Privacidade', 'Política de Privacidade', 'Política de privacidad'],
    'AI Analysis & Personal Notes': ['Análise por IA e Notas Pessoais', 'Análise por IA e Anotações Pessoais', 'Análisis con IA y Notas personales'],
    'Cancel': ['Cancelar', 'Cancelar', 'Cancelar'],
    'Save ✓': ['Guardar ✓', 'Salvar ✓', 'Guardar ✓'],
    'Match Time': ['Tempo do jogo', 'Tempo do jogo', 'Tiempo del partido'],
    'Close this Set?': ['Fechar este Set?', 'Fechar este Set?', '¿Cerrar este Set?'],
    'No': ['Não', 'Não', 'No'],
    'Yes': ['Sim', 'Sim', 'Sí'],
    'Switch sides?': ['Trocar de lado?', 'Trocar de lado?', '¿Cambiar de lado?'],
    'Confirm start of a new game?': ['Confirmar início de um novo jogo?', 'Confirmar início de um novo jogo?', '¿Confirmar inicio de un nuevo partido?'],
    'Enter the tournament name (max 25 characters)': ['Introduza o nome do torneio (máx. 25 caracteres)', 'Digite o nome do torneio (máx. 25 caracteres)', 'Escribe el nombre del torneo (máx. 25 caracteres)'],
    'Tournament name': ['Nome do torneio', 'Nome do torneio', 'Nombre del torneo'],
    'Export ready': ['Exportação pronta', 'Exportação pronta', 'Exportación lista'],
    'Share / Save': ['Partilhar / Guardar', 'Compartilhar / Salvar', 'Compartir / Guardar'],
    'Select what you want to export': ['Selecione o que pretende exportar', 'Selecione o que deseja exportar', 'Seleccione lo que quiere exportar'],
    'You will receive one PDF with the selected items.': ['Vai receber um PDF com os itens selecionados.', 'Você vai receber um PDF com os itens selecionados.', 'Recibirá un PDF con los elementos seleccionados.'],
    'EXPORT TO PDF': ['EXPORTAR PARA PDF', 'EXPORTAR PARA PDF', 'EXPORTAR A PDF'],
    'Final game screen': ['Ecrã final do jogo', 'Tela final do jogo', 'Pantalla final del partido'],
    'AI analysis': ['Análise por IA', 'Análise por IA', 'Análisis con IA'],
    'Pair statistics': ['Estatísticas da dupla', 'Estatísticas da dupla', 'Estadísticas de la pareja'],
    'Final Match Card': ['Card do jogo final', 'Card do jogo final', 'Match Card final'],
    'Game notes': ['Notas do jogo', 'Anotações do jogo', 'Notas del partido'],
    'End of Match?': ['Fim do jogo?', 'Fim do jogo?', '¿Fin del partido?'],
    'No, undo the last point and back to the game': ['Não, desfazer o último ponto e voltar ao jogo', 'Não, desfazer o último ponto e voltar ao jogo', 'No, deshacer el último punto y volver al partido'],
    'End of Set?': ['Fim do Set?', 'Fim do Set?', '¿Fin del Set?'],
    'Email not sent': ['E-mail não enviado', 'E-mail não enviado', 'Correo no enviado'],
    'Download files': ['Descarregar ficheiros', 'Baixar arquivos', 'Descargar archivos'],
    'Close': ['Fechar', 'Fechar', 'Cerrar'],
    'Menu': ['Menu', 'Menu', 'Menú'],
    'Generate the AI analysis for this match': ['Gerar a análise por IA deste jogo', 'Gerar a análise por IA deste jogo', 'Generar el análisis con IA de este partido'],
    'Point-by-point Match Log for this match': ['Ponto a Ponto deste jogo', 'Ponto a Ponto deste jogo', 'Match Log punto a punto de este partido'],
    'Personal notes for this match': ['Notas pessoais deste jogo', 'Anotações pessoais deste jogo', 'Notas personales de este partido'],
    'Name and photo can be changed between games and sets. They are locked only while a game is in progress': ['O nome e a foto podem ser alterados entre jogos e sets. Ficam bloqueados apenas enquanto um jogo está em curso', 'O nome e a foto podem ser alterados entre jogos e sets. Ficam bloqueados apenas enquanto um jogo está em andamento', 'El nombre y la foto pueden cambiarse entre juegos y sets. Solo quedan bloqueados mientras hay un juego en curso'],
    'AI analysis (when enabled) and your personal notes appear here, fully editable...': ['A análise por IA (quando ativada) e as suas notas pessoais aparecem aqui, totalmente editáveis...', 'A análise por IA (quando ativada) e as suas anotações pessoais aparecem aqui, totalmente editáveis...', 'El análisis con IA (si está activado) y tus notas personales aparecen aquí, totalmente editables...'],
    'Serving': ['A servir', 'Sacando', 'Sacando'],
    'Won by': ['Ganho por', 'Ganho por', 'Ganado por'],
    'Serves up to this point': ['Serviços até este ponto', 'Saques até este ponto', 'Saques hasta este punto'],
    'Total Points Won': ['Total de pontos ganhos', 'Total de pontos ganhos', 'Total de puntos ganados'],
    'No games logged yet this match': ['Ainda não há jogos registados neste jogo', 'Ainda não há jogos registrados neste jogo', 'Aún no hay juegos registrados en este partido'],
    'Delete': ['Apagar', 'Excluir', 'Eliminar'],
    'Delete this game from history?': ['Apagar este jogo do histórico?', 'Excluir este jogo do histórico?', '¿Eliminar este partido del historial?'],
    'No games recorded yet.': ['Ainda não há jogos registados.', 'Ainda não há jogos registrados.', 'Aún no hay partidos registrados.'],
};

// Frases que aparecem dentro de textos gerados pelo app (ex.: "Ana was serving 🎾").
// Só são trocadas quando o texto inteiro não está na tabela acima.
const PSC_PHRASES = {
    'was serving': ['no serviço', 'no saque', 'sacando'],
    'GAME ': ['JOGO ', 'JOGO ', 'JUEGO '],
    'Won ': ['Vencidos ', 'Saques Confirmados ', 'Ganados '],
    'Broken ': ['Breaks ', 'Saques Quebrados ', 'Breaks '],
};

const PSC_LANG_INDEX = { 'pt-PT': 0, 'pt-BR': 1, 'es': 2 };
const PSC_TRANSLATED_ATTRS = ['title', 'placeholder', 'aria-label', 'alt'];

let pscCurrentLang = 'en';
let pscObserver = null;
const pscTextState = new WeakMap();   // text node -> { en, lastOut }
const pscAttrState = new WeakMap();   // element -> { attr: { en, lastOut } }

// Monta o texto de saída: mantém os espaços das pontas e aplica a tradução (ou o inglês).
function pscComputeOut(en, raw, lang) {
    const lead = raw.match(/^\s*/)[0];
    const trail = raw.match(/\s*$/)[0];
    const idx = PSC_LANG_INDEX[lang];
    let shown = en;
    if (lang !== 'en' && idx !== undefined) {
        const entry = PSC_LANG_TABLE[en];
        if (entry) {
            shown = entry[idx] || en;
        } else {
            Object.keys(PSC_PHRASES).forEach(function (phrase) {
                const t = PSC_PHRASES[phrase][idx];
                if (t && shown.indexOf(phrase) !== -1) shown = shown.split(phrase).join(t);
            });
        }
    }
    return lead + shown + trail;
}

function pscIsEditable(node) {
    const p = node.parentNode;
    return !!(p && p.closest && p.closest('[contenteditable="true"]'));
}

function pscUpdateTextNode(node, lang) {
    const raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    if (pscIsEditable(node)) return;
    const state = pscTextState.get(node);
    // Se o valor é o que nós mesmos escrevemos, o inglês original continua valendo.
    // Se veio novo do app (texto em inglês), ele vira a nova fonte.
    const en = (state && raw === state.lastOut) ? state.en : raw.trim();
    const out = pscComputeOut(en, raw, lang);
    pscTextState.set(node, { en: en, lastOut: out });
    if (out !== raw) node.nodeValue = out;
}

function pscUpdateAttr(el, attr, lang) {
    const raw = el.getAttribute(attr);
    if (raw === null || !raw.trim()) return;
    let states = pscAttrState.get(el);
    if (!states) { states = {}; pscAttrState.set(el, states); }
    const state = states[attr];
    const en = (state && raw === state.lastOut) ? state.en : raw.trim();
    const out = pscComputeOut(en, raw, lang);
    states[attr] = { en: en, lastOut: out };
    if (out !== raw) el.setAttribute(attr, out);
}

function pscApplyTo(root, lang) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { pscUpdateTextNode(root, lang); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    const walker = document.createTreeWalker(root.nodeType === Node.DOCUMENT_NODE ? root.body : root, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
            const p = n.parentNode;
            if (!p || !p.nodeName) return NodeFilter.FILTER_REJECT;
            const tag = p.nodeName;
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
            if (pscIsEditable(n)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    texts.forEach(function (n) { pscUpdateTextNode(n, lang); });
    if (root.nodeType === Node.ELEMENT_NODE) {
        pscTranslatedAttrSelector(root).forEach(function (el) {
            PSC_TRANSLATED_ATTRS.forEach(function (a) { if (el.hasAttribute(a)) pscUpdateAttr(el, a, lang); });
        });
    } else {
        document.querySelectorAll('[title],[placeholder],[aria-label],[alt]').forEach(function (el) {
            PSC_TRANSLATED_ATTRS.forEach(function (a) { if (el.hasAttribute(a)) pscUpdateAttr(el, a, lang); });
        });
    }
}

function pscTranslatedAttrSelector(root) {
    const list = [];
    if (root.matches && root.matches('[title],[placeholder],[aria-label],[alt]')) list.push(root);
    root.querySelectorAll('[title],[placeholder],[aria-label],[alt]').forEach(function (el) { list.push(el); });
    return list;
}

// Ativa a tradução: aplica ao que já existe e observa o que o app criar depois.
function pscLangApply(lang) {
    pscCurrentLang = lang;
    document.documentElement.lang = (lang === 'en') ? 'en' : (lang === 'es' ? 'es' : lang);
    pscApplyTo(document.body, lang);
    if (pscObserver) { pscObserver.disconnect(); pscObserver = null; }
    if (lang === 'en') return;
    pscObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            if (m.type === 'childList') {
                m.addedNodes.forEach(function (n) { pscApplyTo(n, pscCurrentLang); });
            } else if (m.type === 'characterData') {
                pscUpdateTextNode(m.target, pscCurrentLang);
            } else if (m.type === 'attributes') {
                if (m.target.nodeType === Node.ELEMENT_NODE) pscUpdateAttr(m.target, m.attributeName, pscCurrentLang);
            }
        });
    });
    pscObserver.observe(document.body, {
        subtree: true, childList: true, characterData: true,
        attributes: true, attributeFilter: PSC_TRANSLATED_ATTRS
    });
}
