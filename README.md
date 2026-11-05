# Task Manager Frontend

Frontend React + TypeScript + Vite + Styled Components para o backend de tarefas.

## Instalação

```bash
npm install
cp .env.example .env
npm run dev
```

A API está configurada em `http://localhost:3333/api`; por isso, a listagem chama
`GET http://localhost:3333/api/tasks`. Para usar outra URL, ajuste a `baseURL` em
`src/api.ts`.

## Rotas esperadas

- `/login` — tela visual de login; ainda não autentica usuários.
- `/` — página inicial, com as tarefas de hoje.
- `/tasks` — listagem paginada pelo backend, com filtros por situação e prioridade.
- `/tasks/new` — criação de tarefa.
- `/tasks/:id` — detalhes e edição de tarefa.
- `/today` — acompanhamento das tarefas ativas e conclusão de itens.
- `/week` — tarefas ativas com frequência semanal, checklist do dia e progresso sincronizado com `/today`.
- `/month` — tarefas ativas com frequência mensal, checklist do dia e progresso sincronizado com `/today` e `/week`.
- `/completed` — atividades concluídas hoje, agrupadas por tarefa a partir dos registros diários da API.
- `/history` — histórico diário, semanal e mensal, cada um paginado na sua granularidade.
- `/goals` — objetivos de vida com prazo e etapas de ação.
- `/schedule` — agenda paginada de lembretes, atividades e aniversários.
- `/english-study` — sessões de estudo de inglês, meta diária e progresso semanal.
- `/expenses` — compras e despesas fixas mensais, com resumo do mês por categoria.
- `/dividends` — ativos que pagam dividendos e projeção mensal estimada de proventos.
- `/fixed-income` — investimentos de renda fixa, com valores da carteira e projeção mensal filtrados para essa modalidade.

As páginas são navegadas pelo histórico do navegador. Em produção, configure o servidor
para redirecionar rotas da aplicação para `index.html`.

## Estrutura do frontend

- `src/routes/` — mapeamento de URLs e composição das rotas da aplicação.
- `src/pages/` — telas de tarefas, acompanhamento diário, semanal e mensal, histórico, objetivos e agenda.
- `src/components/` — componentes compartilhados, como o layout e a navegação.
- `src/components/ui/` — componentes visuais reutilizáveis construídos com Styled Components e Lucide.
- `src/api.ts` — chamadas para a API.

As tarefas usam o campo `priority` com os valores `low`, `medium` ou `high`. A criação
envia esse campo para a API; tarefas antigas sem prioridade podem ser encontradas pelo
filtro “Sem prioridade”.

- `GET /api/tasks?page=1&limit=10` — lista tarefas e itens com paginação (`limit` máximo de 100); retorna `data` e `pagination`, incluindo os totais globais `activeTotal` e `inactiveTotal`.
- `POST /api/tasks` — cria uma tarefa e itens.
- `PATCH /api/tasks/:id` — atualiza título, descrição e data de início da tarefa.
- `DELETE /api/tasks/:id` — exclui uma tarefa.
- `PATCH /api/tasks/:id/deactivate` — desativa uma tarefa.
- `PATCH /api/tasks/:id/activate` — ativa uma tarefa.
- `GET /api/daily` — lista os registros diários e os IDs usados para atualizar cada item.
- `PATCH /api/daily/items/:id` — atualiza a conclusão do item diário com `{ "is_completed": true|false }`.
- `GET /api/daily/history?page=1&limit=10` — lista os dias anteriores com atividades diárias.
- `GET /api/daily/history/week?page=1&limit=10&date=YYYY-MM-DD` — lista uma entrada agregada por semana com checklist; `date` filtra a semana correspondente (começa na segunda-feira).
- `GET /api/daily/history/month?page=1&limit=10&date=YYYY-MM-DD` — lista uma entrada agregada por mês com checklist; `date` filtra o mês correspondente.
- `GET /api/daily?date=YYYY-MM-DD` — carrega os detalhes de uma data do histórico.
- `GET`, `POST /api/objectives` e `PATCH`, `DELETE /api/objectives/:id` — consulta e gerencia objetivos com status `pendente`, `em_andamento` ou `concluido`.
- `POST /api/objectives/:id/steps`, `PATCH` e `DELETE /api/objectives/:id/steps/:stepId` — gerencia etapas por `status` e `step_order`.
- `GET /api/schedule?page=1&limit=20` — lista todos os agendamentos cadastrados.
- `GET /api/schedule?date=YYYY-MM-DD&page=1&limit=20` — lista agendamentos da data, incluindo aniversários recorrentes.
- `GET /api/schedule?from=YYYY-MM-DD&to=YYYY-MM-DD&page=1&limit=20` — lista ocorrências no intervalo; não combinar com `date`.
- `GET /api/schedule/alerts?page=1&limit=20` — lista eventos pendentes com lembrete vencido ou ocorrência nas próximas 24 horas, incluindo `alert_reasons`.
- `POST /api/schedule` — cria lembrete, atividade ou aniversário.
- `PATCH /api/schedule/:id` e `DELETE /api/schedule/:id` — atualiza ou remove um agendamento.
- `/api/english-study/sessions` — cria, lista, atualiza e remove sessões de estudo; aceita filtros por período, status e paginação.
- `/api/english-study/goal` — consulta e atualiza a meta diária em minutos.
- `/api/english-study/summary` — apresenta os minutos de hoje e o histórico diário do período.
- `/api/expenses` — cria, lista, atualiza e remove despesas (`compra` ou `fixa`); também `/categories` e `/summary?month=YYYY-MM`.
- `/api/dividends` — cadastra ativos (cotas × provento por cota) e `/projection?from=YYYY-MM&months=N` projeta o recebimento mensal estimado; para renda fixa, informe `cdi_rate` e use `applied_amount`, `cdi_percent` e `investment_date`.
- `/api/study-resources` — materiais continuam separados das sessões; use a área `Inglês` e informe `material_url` para relacionar um material à sessão.

O acompanhamento das telas Hoje, Semana e Mês usa os registros da rota diária.
O Histórico permite alternar entre as consultas diárias, semanais e mensais, cada uma paginada na granularidade da rota. Os modos semanal e mensal apresentam períodos agregados e permitem filtrar por uma data de referência. A tela de Objetivos usa `/api/objectives`; a rota antiga `/api/goals` permanece disponível no backend.
Aniversários são repetidos anualmente por padrão; a página Agenda permite consultar o período, alterar o status e editar ou excluir agendamentos.
Alertas podem ser concluídos ou cancelados diretamente na página Agenda para removê-los da lista de pendências.
Os checklists das telas Semana e Mês usam os mesmos registros diários e a mesma rota de atualização de itens,
mantendo as marcações sincronizadas com as telas Hoje, Semana, Mês e Atividades concluídas.

A edição e exclusão da interface usam `PATCH /api/tasks/:id` e `DELETE /api/tasks/:id`.
A rota de atualização atualmente aceita apenas título, descrição e data de início; prioridade,
data final e itens são apenas exibidos na tela de edição.

## CORS

Se o navegador bloquear chamadas entre portas, habilite CORS no Express para a origem do Vite (normalmente `http://localhost:5173`).
