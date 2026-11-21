# Padel Coaching Pro (PSC PRO)

PWA de placar e coaching para padel: pontuação ao vivo, Histórico de jogos, Match Card, estatísticas, exportação (PDF e Excel) e Análise por IA.

- **Versão atual:** 3.13.00 (ver `VERSION`)
- **Publicação:** GitHub Pages, empacotado como TWA (PWABuilder)
- **Repositório:** `marceloribeiro1711/PSC_PRO`

---

## Estrutura do projeto

| Arquivo / pasta | Função |
|---|---|
| `index.html` | Telas e marcação do app (placar, Setup, Histórico, Match Card, Match Log) |
| `app.js` | Lógica do app: pontuação, histórico, exportação, tutorial, idiomas e logos |
| `style.css` | Estilos |
| `i18n.js` | Tabela de tradução da interface (EN, PT-PT, PT-BR, ES) e troca de idioma em tempo real |
| `i18n-tutorial.js` | Tabela de tradução exclusiva do tutorial |
| `worker.js` | Serviço que gera a Análise por IA |
| `circuitopadel.html` | Página de inscrições do circuito, aberta dentro do app |
| `sw.js` | Service worker (cache offline) |
| `manifest.json` | Manifest da PWA (`id`, `start_url` e `scope` apontam para a raiz do app) |
| `logos/` | Logos de organizadores. **Não vai no pacote:** ficam só no repositório (ver seção própria) |
| `tutorial-court.jpg` | Figura usada no tutorial |
| `VERSION` | Número da versão |
| `_config.yml` | Configuração do GitHub Pages |

---

## Idiomas da interface

O idioma é escolhido no Setup, pela bandeira, e a troca acontece na hora, sem sair do app. Na primeira abertura, o app usa o idioma do aparelho:

| Bandeira | Idioma | Detecção inicial |
|---|---|---|
| 🇬🇧 | English | demais idiomas |
| 🇵🇹 | Português (Portugal) | `pt`, `pt-PT` e outras variantes de português |
| 🇧🇷 | Português (Brasil) | somente `pt-BR` |
| 🇪🇸 | Español | `es*` |

A escolha fica salva no aparelho (`padel_ui_lang`). O mesmo idioma vale para a interface e para a Análise por IA. PT-PT e PT-BR são enviados ao worker como `pt`, porque o worker só conhece `pt`.

### Como as traduções funcionam

- **Textos da interface (`i18n.js`):** a tabela `PSC_LANG_TABLE` usa como chave o texto em inglês exatamente como aparece no app, com os valores em `[PT-PT, PT-BR, ES]`. Um observador de DOM traduz também os textos criados depois pelo app. Se uma entrada faltar, o texto aparece em inglês.
- **Frases montadas pelo app (`PSC_PHRASES`):** trechos como "was serving", "GAME " e "Won " são trocados dentro de textos compostos, quando o texto inteiro não está na tabela.
- **Campos editáveis** (nomes dos jogadores e nome do torneio) não são traduzidos. São dados digitados pela pessoa, e o app compara o texto padrão "Player 1" para limpar o campo.
- **Tutorial (`i18n-tutorial.js`):** tabela própria, com o texto em inglês como chave. Os textos são lidos no momento de mostrar cada passo.

Para acrescentar um termo, inclua uma linha na tabela correspondente. Os termos de jogo seguem o glossário do projeto: Winner, Break Point, Set e Star Point não se traduzem. Broken Serve é "Breaks" em PT-PT e ES, e "Saques Quebrados" em PT-BR.

---

## Logos de organizadores

O seletor de logo do torneio fica no canto superior esquerdo do cabeçalho. Ao tocar nele, a pessoa escolhe entre os logos da pasta `logos/` ou envia uma imagem própria.

**Regra de nome:** o arquivo precisa começar com `Logo_Org_` seguido do código do país, e depois de qualquer texto:

| Código | Uso |
|---|---|
| `Logo_Org_PT…` | Organizador de Portugal |
| `Logo_Org_BR…` | Organizador do Brasil |
| `Logo_Org_ES…` | Organizador da Espanha |
| `Logo_Org_WW…` | Organizador internacional (aparece em todos os idiomas) |

Exemplo: `Logo_Org_PT_FPP_320_x_106.jpeg`. Use o separador `_`, `.` ou espaço depois do código. Por exemplo, `Logo_Org_PTX.jpeg` é ignorado.

**Formato:** JPEG, 320 × 106 px, sem transparência (alguns logos têm fundo colorido).

**Como o app encontra os arquivos:** o app lê a lista da pasta `logos/` pela API do GitHub. Para acrescentar um organizador, envie o arquivo para `logos/` pela interface web do GitHub. Não é preciso rodar script nem editar índice. A pasta `logos/` é gerenciada direto no repositório e não faz parte do ZIP do pacote.

- A lista fica salva no aparelho por 24 horas. Ao abrir o seletor, a lista é rebuscada no máximo a cada 5 minutos.
- Sem internet, o app usa a última lista salva.
- Se não houver arquivo do código do idioma, o app usa o `WW`.
- Para o logo aparecer no app, ele precisa estar publicado no GitHub Pages. Até a publicação terminar, o arquivo novo não aparece.

Cada jogo encerrado guarda o nome do arquivo de logo usado (campo `orgLogo` no histórico).

---

## Desenvolvimento e versão

Ao subir a versão, atualize os quatro lugares abaixo, sempre com o mesmo número:

1. `VERSION`
2. `APP_VERSION` em `app.js`
3. `CACHE_VERSION` em `sw.js` (formato `v3.13.00`)
4. Rótulo `V 3.13.00` em `index.html` (`config-version-label`)

Ao acrescentar um arquivo novo ao app, inclua-o também na lista `PRECACHE_URLS` do `sw.js`, para que funcione sem internet.

Os textos novos precisam entrar nas tabelas de tradução (`i18n.js` e, para o tutorial, `i18n-tutorial.js`).

---

## Deploy

**Produção:** a raiz do repositório é publicada pelo GitHub Pages em `https://marceloribeiro1711.github.io/PSC_PRO/`.

**Testar uma versão nova sem afetar a produção (pasta `beta/`):**

1. Crie a pasta `beta/` na raiz do repositório e coloque dentro os arquivos da versão nova (sem `logos/`: o seletor sempre lê a pasta `logos/` da raiz).
2. Copie `icons/` e `torneiosjson.json` da raiz para `beta/`, se o `sw.js` e o app os referenciarem.
3. Em `beta/manifest.json`, troque `id`, `start_url` e `scope` para `https://marceloribeiro1711.github.io/PSC_PRO/beta/`. Sem isso, a versão beta conflita com a de produção ao ser instalada como app.
4. Teste em `https://marceloribeiro1711.github.io/PSC_PRO/beta/`.

**Atenção:** produção e beta compartilham o mesmo domínio, então o `localStorage` (histórico e preferências) também é compartilhado. Para testar sem misturar dados, use um navegador ou perfil separado, ou uma aba anônima.

**Promover uma versão:** copie os arquivos para a raiz e restaure os caminhos de produção no `manifest.json`. Crie uma tag Git da versão anterior antes de publicar (por exemplo `git tag v3.12.10`).

---

## Dados no aparelho

O app guarda tudo no próprio aparelho (`localStorage` e IndexedDB), sem servidor próprio:

| Chave | Conteúdo |
|---|---|
| `padel_history` | Histórico de jogos encerrados |
| `padel_game_state` | Jogo em andamento |
| `padel_ui_lang` | Idioma da interface |
| `padel_org_logo` | Nome do arquivo do logo escolhido (ou `custom`) |
| `padel_org_list` | Lista de logos em cache |
| `logo_left`, `logo_right`, `photo_*` (IndexedDB) | Logos enviados e fotos dos jogadores |

A função de backup e restauração foi removida da versão 3.13.00 (não estava acessível pela interface).

---

## Limitações conhecidas

- **Testes em tablet e desktop** ainda pendentes para o logo e para a interface em PT e ES, que são mais longas que o inglês.
- **Primeiro uso sem internet:** sem lista de logos salva, o cabeçalho mostra o placeholder "Logo 1".
- **Nomes padrão dos jogadores** ("Player 1" etc.) continuam em inglês em todos os idiomas.
- **Logo não aparece no Match Card.** O logo usado em cada jogo é salvo no histórico, mas o card ainda não o exibe.
- **Golden, Star e Won** das estatísticas do histórico ainda não foram revisados.
- **Tutorial e TV Mode:** o tutorial não abre em paisagem (TV Mode). Se o aparelho girar durante o tutorial, ele é encerrado.
- **Tradução automática do navegador:** o app pede ao navegador que não traduza a página (`translate="no"` e meta `notranslate`), mas isso precisa ser confirmado no Chrome do Android.
- **Espanhol** de alguns termos (por exemplo, Break Point e Star Point) segue o glossário, mas ainda aguarda revisão de técnicos espanhóis.

---

## Licença e direitos

Os logos de organizadores são de terceiros. Os usados no app foram autorizados para este projeto. Não reutilize-os em outros projetos sem autorização.
