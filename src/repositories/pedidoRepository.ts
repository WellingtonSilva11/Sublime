import { PrismaClient } from "@prisma/client";
import { CreatePedidoDTO, UpdatePedidoDTO } from "../types/pedido";

const prisma = new PrismaClient();

export const pedidoRepository = {
  findAll: () =>
    prisma.pedido.findMany({ include: { cliente: true } }),

  findById: (id: number) =>
    prisma.pedido.findUnique({ where: { id }, include: { cliente: true } }),

  create: (data: CreatePedidoDTO) =>
    prisma.pedido.create({ data }),

  update: (id: number, data: UpdatePedidoDTO) =>
    prisma.pedido.update({ where: { id }, data }),

  remove: (id: number) =>
    prisma.pedido.delete({ where: { id } }),
};
