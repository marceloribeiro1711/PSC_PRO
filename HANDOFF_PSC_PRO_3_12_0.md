# PSC PRO — Handoff para novo chat (versão 3.12.0)

## Projeto
- App PWA de coaching de padel (vanilla HTML/CSS/JS), hospedado no GitHub Pages.
- Publicado como app nativo iOS/Android via wrapper (Xcode / PWABuilder). O nativo carrega o web do GitHub Pages.
- Worker de análise por IA: Cloudflare (fonte em `worker.js`). Deploy manual pelo Marcelo.
- A pasta `icons/` existe no repositório (não está neste pacote).

## Arquivos do pacote
- `index.html`, `app.js`, `style.css`, `sw.js` (Service Worker, cache `v3.12.0`), `worker.js`, `manifest.json`, `_config.yml`, `VERSION`, `circuitopadel.html` (calendário de torneios), `tutorial-court.jpg` (figura do tutorial).

## Regras de trabalho (combinadas com Marcelo)
- Só executar quando ele escrever **EXECUTAR** (+ número). Antes, analisar, opinar e perguntar.
- Entregar SEMPRE um ZIP completo com todos os arquivos do pacote.
- Conversa em português. Textos do app em inglês. Popups de decisão em inglês.
- Não tomar decisões de produto por conta própria; apontar impacto e deixar ele decidir.
- Versão: número sobe em `app.js` (APP_VERSION), `sw.js` (CACHE_VERSION), `index.html` (rótulo "V x.y.z") e `VERSION`.

## Estado atual
Itens concluídos e validados no aparelho (resumo):
- Tutorial: figura com linhas fixas ao campo, balões dos passos do menu acima do Skip, passos ordenados.
- Exportação: botões Export PDF e Export Excel no histórico; PDF com seleção de itens e cabeçalho (nome · data · hora) em cada página; Excel com primeira linha (torneio, data, hora) nas duas abas; nomes de arquivo `Nome_do_torneio_yyyy_mm_dd_hh-mm`.
- Nome do torneio: obrigatório no New Game (até 25 caracteres, maiúsculas), último torneio pré-preenchido, editável com as mesmas regras de nome/foto (bloqueado só durante game aberto), linha própria no topo do histórico, Match Card, Match Log e Notas.
- Edição de nome/foto: liberada entre games e sets; foco removido ao fechar game/set e ao fechar o teclado; seleção de texto limpa e placares não selecionam texto.
- End of Match: popup "End of Match?" com Yes / "No, undo the last point and back to the game". "No" restaura o estado completo anterior ao último ponto (o relógio não volta).
- End of Set: popup "End of Set?" no fim do 1º set e no fim do 2º set só quando há 3º set ou SuperTie. Mesma regra de No/undo. Não aparece no fim da partida.
- TV Mode (landscape): ao girar, Match Log, Match Card, Notas, análise de IA e exportação fecham; o histórico mostra "History not available in TV Mode".
- Match Card centralizado no histórico; lixeira protegida; fontes do nome do torneio unificadas (estilo do histórico).
- Estatísticas: Match Log NÃO mostra estatísticas (decisão do Marcelo). Estatísticas aparecem na tabela da partida, na análise por IA e no Excel.
- Análise por IA: não cita erros/winners quando não há anotações; zero e null = não registrado.

## Pendências (não executadas)
- **18.** Validação de placar impossível em ajustes manuais de Set ou SuperTie (ex.: 7-4, 11-7 no SuperTie). Mensagem em inglês para corrigir antes de continuar marcando pontos. Aguardando EXECUTAR 18.
- **19.** Splash do app: a imagem embutida (256 × 256, fundo azul-escuro quase igual ao fundo do splash) pode parecer não aparecer. Opções: mudar o fundo do splash, trocar a imagem por uma com transparência, ou receber captura da abertura. Aguardando decisão.
- Após testes, possíveis ajustes finos em retrato/landscape conforme feedback dos beta testers.

## Itens para teste em aparelho (ainda não confirmados pelo Marcelo)
- Export PDF / Export Excel em vários equipamentos.
- Popups End of Match e End of Set (casos: fim de set 1, 2 a 1, 2 a 0, SuperTie, ProSet).
