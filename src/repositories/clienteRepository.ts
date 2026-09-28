import { PrismaClient } from "@prisma/client";
import { CreateClienteDTO, UpdateClienteDTO } from "../types/cliente";

const prisma = new PrismaClient();

// Repository só conversa com o Prisma. Não valida nada, não lança AppError:
// essa responsabilidade é do service.
export const clienteRepository = {
  findAll: () =>
    prisma.cliente.findMany({ include: { pedidos: true } }),

  findById: (id: number) =>
    prisma.cliente.findUnique({ where: { id }, include: { pedidos: true } }),

  findByTelefone: (telefone: string) =>
    prisma.cliente.findUnique({ where: { telefone } }),

  create: (data: CreateClienteDTO) =>
    prisma.cliente.create({ data }),

  update: (id: number, data: UpdateClienteDTO) =>
    prisma.cliente.update({ where: { id }, data }),

  remove: (id: number) =>
    prisma.cliente.delete({ where: { id } }),
};
