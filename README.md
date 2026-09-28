# SPGU Backend — Cliente / Pedido

Entidades Cliente (1) e Pedido (N) do Sistema de Personalização e Gestão de
Uniformes (SPGU), seguindo a arquitetura types → repositories → services →
controllers → routes, usada no projeto PP2.

## Como rodar

1. `npm install`
2. Configure `DATABASE_URL` no `.env` (PostgreSQL).
3. `npx prisma migrate dev --name init_cliente_pedido`
4. `npm run dev`
