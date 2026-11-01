# DESIGN SYSTEM — RUMO

### Padrão visual oficial para todos os sistemas e módulos

**Versão:** 1.0  
**Produto:** Rumo — Plataforma de Produtividade e Desenvolvimento Pessoal  
**Documento:** `design-system.md`

---

# 1. Introdução

O Design System do Rumo estabelece um padrão visual e funcional para todos os módulos, telas, componentes e funcionalidades da plataforma.

O objetivo é garantir uma experiência consistente, moderna, intuitiva e profissional, independentemente da área acessada pelo usuário.

Todas as interfaces devem compartilhar a mesma identidade visual, tipografia, cores, espaçamentos, componentes, comportamentos e padrões de navegação.

O Design System deve ser considerado a referência oficial para qualquer desenvolvimento novo, atualização ou refatoração da interface.

### Filosofia visual

O Rumo deve transmitir:

- Organização e clareza.
- Foco e produtividade.
- Evolução pessoal e profissional.
- Controle e planejamento.
- Confiança e simplicidade.
- Tecnologia e modernidade.

**Conceito central:**

> Cada funcionalidade deve ajudar o usuário a organizar sua vida, acompanhar seu progresso e avançar em direção aos seus objetivos.

# 2. Diretrizes de identidade visual

A interface deve seguir uma estética minimalista, elegante e funcional.

### Características obrigatórias

- Layout limpo, sem excesso de elementos.
- Hierarquia visual bem definida.
- Espaçamentos consistentes.
- Bordas discretas e elegantes.
- Cards com aparência moderna.
- Ícones simples e padronizados.
- Cores utilizadas com propósito.
- Animações suaves e discretas.
- Informações organizadas e fáceis de encontrar.
- Responsividade em desktop, tablet e dispositivos móveis.

### O que evitar

- Cores excessivamente vibrantes.
- Gradientes exagerados.
- Sombras muito fortes.
- Bordas desnecessárias.
- Botões com estilos diferentes entre módulos.
- Tipografias misturadas sem critério.
- Cards com excesso de informações.
- Elementos visuais que prejudiquem a leitura.

# 3. Fundações (Foundations)

As fundações são os elementos básicos que sustentam toda a interface.

Todo desenvolvimento deve utilizar os tokens definidos nesta seção.

## 3.1 Paleta de cores

A identidade principal utiliza azul como cor de destaque, transmitindo confiança, tecnologia e progresso.

### Cores principais

| Token          | Cor              | Código    |
| -------------- | ---------------- | --------- |
| Primary        | Azul principal   | `#2563EB` |
| Primary Hover  | Azul escuro      | `#1D4ED8` |
| Primary Light  | Azul suave       | `#DBEAFE` |
| Background     | Fundo claro      | `#F8FAFC` |
| Surface        | Superfície       | `#FFFFFF` |
| Border         | Bordas           | `#E2E8F0` |
| Text Primary   | Texto principal  | `#0F172A` |
| Text Secondary | Texto secundário | `#64748B` |
| Muted          | Texto discreto   | `#94A3B8` |

### Cores semânticas

| Finalidade | Cor      | Código    |
| ---------- | -------- | --------- |
| Sucesso    | Verde    | `#16A34A` |
| Atenção    | Amarelo  | `#D97706` |
| Erro       | Vermelho | `#DC2626` |
| Informação | Azul     | `#0284C7` |
| Progresso  | Azul     | `#2563EB` |

### Cores por finalidade

- Azul: ações principais, links e progresso.
- Verde: metas alcançadas e operações concluídas.
- Amarelo: alertas e situações que exigem atenção.
- Vermelho: erros, exclusões e situações críticas.
- Cinza: informações secundárias e elementos neutros.

As cores semânticas não devem ser utilizadas apenas como decoração.

## 3.2 Tema escuro (Dark Mode)

O tema escuro deve preservar a identidade visual do Rumo.

| Token            | Código    |
| ---------------- | --------- |
| Background       | `#0B1120` |
| Surface          | `#111827` |
| Surface Elevated | `#1E293B` |
| Border           | `#334155` |
| Text Primary     | `#F8FAFC` |
| Text Secondary   | `#CBD5E1` |
| Muted            | `#94A3B8` |
| Primary          | `#60A5FA` |

### Regras do Dark Mode

- Não utilizar preto absoluto como fundo padrão.
- Preservar contraste entre cards e fundo.
- Manter as cores semânticas reconhecíveis.
- Adaptar bordas e sombras ao tema.
- Garantir legibilidade de textos e gráficos.
- Todos os componentes devem funcionar nos dois temas.

## 3.3 Tipografia

A tipografia oficial deve ser **Inter**.

A Inter oferece excelente legibilidade, aparência moderna e consistência em interfaces profissionais.

**Fonte principal:** Inter  
**Fonte alternativa:** system-ui, sans-serif.

### Hierarquia tipográfica

| Elemento   | Tamanho | Peso |
| ---------- | ------: | ---: |
| Heading 1  |    32px |  700 |
| Heading 2  |    26px |  700 |
| Heading 3  |    22px |  600 |
| Heading 4  |    18px |  600 |
| Body Large |    16px |  400 |
| Body       |    14px |  400 |
| Body Small |    13px |  400 |
| Caption    |    12px |  400 |
| Button     |    14px |  600 |

### Regras tipográficas

- Utilizar Inter em toda a aplicação.
- Evitar misturar famílias tipográficas.
- Utilizar pesos para criar hierarquia.
- Priorizar legibilidade em textos longos.
- Utilizar números tabulares em indicadores financeiros.
- Não utilizar textos excessivamente pequenos.

### Aplicação

- Títulos de páginas: Heading 1.
- Títulos de seções: Heading 2 ou 3.
- Títulos de cards: Heading 4.
- Textos comuns: Body.
- Descrições auxiliares: Body Small.
- Informações secundárias: Caption.

## 3.4 Espaçamento (Spacing)

O sistema utiliza uma escala baseada em múltiplos de 4px.

| Token | Valor | Utilização             |
| ----- | ----: | ---------------------- |
| 1     |   4px | Pequenos ajustes       |
| 2     |   8px | Espaçamento interno    |
| 3     |  12px | Elementos próximos     |
| 4     |  16px | Espaçamento padrão     |
| 5     |  20px | Separação de elementos |
| 6     |  24px | Cards e seções         |
| 8     |  32px | Separação de blocos    |
| 10    |  40px | Áreas maiores          |
| 12    |  48px | Separação de seções    |
| 16    |  64px | Grandes áreas          |

### Regras

- Manter espaçamentos previsíveis.
- Evitar valores aleatórios.
- Utilizar 16px como referência para espaçamento interno comum.
- Utilizar 24px como referência para padding de cards.
- Manter distância consistente entre títulos, descrições e conteúdo.

## 3.5 Bordas e arredondamentos

| Token       | Valor | Utilização         |
| ----------- | ----: | ------------------ |
| Radius SM   |   6px | Pequenos elementos |
| Radius MD   |  10px | Inputs e botões    |
| Radius LG   |  14px | Cards              |
| Radius XL   |  18px | Painéis e modais   |
| Radius Full | 999px | Badges e avatares  |

As bordas devem ser discretas, utilizando preferencialmente o token de cor Border.

## 3.6 Sombras

Utilizar sombras suaves, sem exageros.

- Small: elementos pequenos e menus.
- Medium: cards elevados e dropdowns.
- Large: modais e painéis flutuantes.

Evitar sombras escuras e muito marcadas.

## 3.7 Ícones

Utilizar Lucide Icons como biblioteca padrão.

Regras:

- Ícones com estilo consistente.
- Tamanho padrão de 18px ou 20px.
- Ícones de navegação com 20px.
- Não misturar bibliotecas visuais.
- Evitar emojis como substitutos de ícones funcionais.

# 4. Layout e estrutura

Todos os módulos devem compartilhar a mesma estrutura de layout.

## 4.1 Menu lateral (Sidebar)

O menu lateral é o principal elemento de navegação.

Deve apresentar:

- Identidade visual do Rumo.
- Ícones e nomes das páginas.
- Indicação clara da página ativa.
- Agrupamento lógico das funcionalidades.
- Possibilidade de recolher o menu.
- Área inferior para configurações e conta.

### Comportamento

- Página ativa com fundo azul suave.
- Ícone e texto destacados.
- Hover discreto.
- Transições suaves.
- Menu adaptável para dispositivos móveis.

## 4.2 Cabeçalho das páginas

Todas as páginas devem seguir o mesmo padrão de cabeçalho.

Estrutura recomendada:

1. Título da página.
2. Descrição curta.
3. Ações principais.
4. Filtros, quando necessários.

Exemplo:

**Objetivos**

Organize suas metas e acompanhe sua evolução.

[ Novo objetivo ]

## 4.3 Área de conteúdo

- Utilizar largura consistente.
- Evitar conteúdo excessivamente comprimido.
- Separar informações por seções.
- Priorizar organização visual.
- Utilizar grids responsivos.
- Manter alinhamento entre cards e componentes.

## 4.4 Cards

Todos os cards devem compartilhar:

- Fundo Surface.
- Borda discreta.
- Radius LG.
- Padding de 20px a 24px.
- Títulos com hierarquia consistente.
- Conteúdo organizado.
- Espaçamento interno padronizado.

Cards devem apresentar informações objetivas e não competir visualmente entre si.

# 5. Componentes (Components)

Todos os módulos devem utilizar componentes compartilhados.

## 5.1 Botões

### Primary

Ação principal da tela.

- Fundo azul.
- Texto branco.
- Peso 600.
- Radius MD.
- Hover com azul mais escuro.

### Secondary

Ação alternativa.

- Fundo neutro.
- Texto principal.
- Borda discreta.

### Outline

Ação secundária com fundo transparente e borda.

### Ghost

Ações discretas, como cancelar ou voltar.

### Danger

Ações destrutivas, como excluir.

Todos os botões devem possuir estados:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.

## 5.2 Inputs

Todos os campos devem utilizar o mesmo padrão:

- Altura padrão de 42px a 44px.
- Borda neutra.
- Radius MD.
- Padding horizontal de 12px.
- Fonte de 14px.
- Label acima do campo.
- Placeholder em cor secundária.
- Focus com destaque azul.
- Mensagem de erro abaixo do campo.

## 5.3 Select e Dropdown

- Mesmo padrão visual dos inputs.
- Opções organizadas.
- Item selecionado destacado.
- Hover discreto.
- Fechamento intuitivo.

## 5.4 Modal e Dialog

Todos os modais devem possuir:

- Título.
- Descrição opcional.
- Conteúdo organizado.
- Botão de fechar.
- Ações no rodapé.
- Overlay discreto.
- Comportamento responsivo.

## 5.5 Badges e Status

Utilizar badges para indicar situações.

Exemplos:

- Ativo.
- Pendente.
- Concluído.
- Em andamento.
- Cancelado.
- Atrasado.

O texto e a cor devem comunicar claramente o estado.

## 5.6 Tabelas

- Cabeçalho com destaque discreto.
- Linhas organizadas.
- Alinhamento consistente.
- Hover suave.
- Paginação padronizada.
- Ações agrupadas.
- Valores financeiros alinhados à direita.

## 5.7 Gráficos

Todos os gráficos devem possuir:

- Título.
- Descrição opcional.
- Legendas.
- Tooltips.
- Escalas legíveis.
- Cores consistentes.
- Responsividade.

Evitar gráficos com excesso de informações.

## 5.8 Estados de interface

Toda funcionalidade que depende de dados deve contemplar:

**Loading:** apresentar indicador de carregamento ou skeleton.

**Empty State:** explicar que ainda não existem registros e oferecer uma ação para começar.

**Error State:** apresentar mensagem clara e possibilidade de tentar novamente.

**Success State:** apresentar confirmação após operações concluídas.

**Disabled State:** deixar evidente quando uma ação não está disponível.

# 6. Responsividade

O Rumo deve funcionar corretamente em diferentes resoluções.

### Breakpoints

| Dispositivo   |            Largura |
| ------------- | -----------------: |
| Mobile        |          Até 639px |
| Tablet        |     640px a 1023px |
| Desktop       |    1024px a 1279px |
| Large Desktop | A partir de 1280px |

### Regras

- Sidebar adaptável.
- Cards reorganizados automaticamente.
- Tabelas com tratamento para telas pequenas.
- Botões acessíveis.
- Inputs com largura adequada.
- Modais adaptados ao viewport.
- Gráficos redimensionáveis.
- Nenhuma página deve apresentar rolagem horizontal indevida.

# 7. Animações e interações

As animações devem ser suaves e funcionais.

### Padrões

- Transições entre 150ms e 250ms.
- Hover discreto.
- Feedback visual ao clicar.
- Abertura suave de modais.
- Animações de progresso.
- Skeleton durante carregamentos.

Evitar animações exageradas ou que atrasem tarefas do usuário.

Respeitar a configuração `prefers-reduced-motion`.

# 8. Guia de uso (Usage Guidelines)

Esta seção estabelece como o Design System deve ser aplicado no desenvolvimento.

### Regra principal

Nenhum módulo deve criar uma identidade visual independente.

Todos devem utilizar os mesmos padrões definidos neste documento.

### Padrão de desenvolvimento

1. Antes de criar um componente, verificar se já existe um componente compartilhado.
2. Reutilizar tokens de cores.
3. Utilizar a tipografia oficial.
4. Respeitar a escala de espaçamento.
5. Manter os mesmos padrões de botões e formulários.
6. Respeitar os temas claro e escuro.
7. Garantir responsividade.
8. Implementar estados de carregamento, erro e ausência de dados.
9. Manter consistência entre telas.
10. Evitar estilos duplicados.

### Organização recomendada

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button
│   │   ├── Input
│   │   ├── Select
│   │   ├── Modal
│   │   ├── Card
│   │   ├── Badge
│   │   ├── Table
│   │   ├── Tooltip
│   │   └── Skeleton
│   │
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── Header
│   │   └── PageContainer
│   │
│   └── shared/
│       ├── EmptyState
│       ├── ErrorState
│       ├── LoadingState
│       └── PageHeader
│
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   ├── themes.css
│   └── globals.css
│
└── features/
    ├── tasks/
    ├── planning/
    ├── goals/
    ├── calendar/
    ├── library/
    ├── english/
    └── finances/
```

A estrutura acima é uma referência de organização, devendo ser adaptada à arquitetura existente do projeto.

# 9. Aplicação nos módulos do Rumo

Todos os módulos devem compartilhar os mesmos componentes, cores e padrões.

### Tarefas

- Listagens padronizadas.
- Cards de tarefas.
- Prioridades com cores semânticas.
- Checklists.
- Filtros e paginação.

### Planejamento

- Calendários e visões por período.
- Indicadores de progresso.
- Checklists sincronizados.
- Histórico de atividades.

### Objetivos

- Cards de objetivos.
- Indicadores de progresso.
- Etapas de execução.
- Status e prazos.

### Agenda

- Calendário.
- Lembretes.
- Alertas.
- Eventos e aniversários.

### Biblioteca

- Cards de materiais.
- Tags.
- Filtros.
- Editor de conteúdo.

### Inglês

- Indicadores de estudo.
- Gráficos de evolução.
- Sessões de aprendizagem.
- Metas diárias.

### Finanças

- Indicadores financeiros.
- Tabelas.
- Gráficos.
- Valores monetários.
- Cards de patrimônio.

### Despesas

- Listagem de despesas.
- Categorias.
- Indicadores mensais.
- Gráficos de distribuição.

### Dividendos

- Carteira de investimentos.
- Indicadores de rentabilidade.
- Projeções.
- Gráficos de rendimentos.

Os módulos podem possuir componentes específicos, mas devem respeitar integralmente as fundações e os padrões globais.

# 10. Acessibilidade

Todas as interfaces devem seguir boas práticas de acessibilidade.

- Contraste adequado entre texto e fundo.
- Navegação por teclado.
- Labels em campos.
- Foco visual identificável.
- Botões com nomes acessíveis.
- Ícones decorativos sem interferir na leitura por leitores de tela.
- Mensagens de erro compreensíveis.
- Não depender exclusivamente das cores para transmitir informações.

# 11. Padronização e manutenção

O Design System é uma referência viva e deve evoluir junto com o produto.

Toda alteração visual que impacte vários módulos deve ser realizada preferencialmente nos componentes compartilhados ou tokens globais.

### Antes de aprovar uma nova interface, verificar:

- [ ] Utiliza a paleta oficial?
- [ ] Utiliza a fonte Inter?
- [ ] Respeita os espaçamentos?
- [ ] Utiliza componentes padronizados?
- [ ] Funciona no tema claro?
- [ ] Funciona no tema escuro?
- [ ] Está responsiva?
- [ ] Possui estados de loading, erro e vazio?
- [ ] Mantém consistência com os outros módulos?
- [ ] Respeita os padrões de acessibilidade?

# 12. Diretriz final para desenvolvedores e IA

Este documento é a fonte oficial de identidade visual do Rumo.

Sempre que desenvolver, modificar, refatorar ou criar novas funcionalidades, siga integralmente este Design System.

**Não crie padrões visuais isolados.**

**Não invente novas paletas de cores.**

**Não misture tipografias.**

**Não crie componentes duplicados sem necessidade.**

**Não altere a identidade visual de um módulo sem considerar o impacto nos demais.**

Priorize reutilização, consistência, legibilidade, acessibilidade e experiência do usuário.

O objetivo é fazer com que todas as funcionalidades pareçam partes de um único produto, com identidade visual reconhecível e experiência uniforme.

---

**RUMO — Organize sua jornada. Acompanhe sua evolução. Alcance seus objetivos.**

**Não altere a identidade visual de um módulo sem considerar o impacto nos demais.**

Priorize reutilização, consistência, legibilidade, acessibilidade e experiência do usuário.

O objetivo é fazer com que todas as funcionalidades pareçam partes de um único produto, com identidade visual reconhecível e experiência uniforme.

---

**RUMO — Organize sua jornada. Acompanhe sua evolução. Alcance seus objetivos.**
