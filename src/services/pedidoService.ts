import { pedidoRepository } from "../repositories/pedidoRepository";
import { clienteService } from "./clienteService";
import { CreatePedidoDTO, UpdatePedidoDTO } from "../types/pedido";
import { AppError } from "../errors/AppError";

export const pedidoService = {
  async listar() {
    return pedidoRepository.findAll();
  },

  async buscarPorId(id: number) {
    const pedido = await pedidoRepository.findById(id);
    if (!pedido) {
      throw new AppError("Pedido não encontrado.", 404);
    }
    return pedido;
  },

  async criar(data: CreatePedidoDTO) {
    if (data.quantidade <= 0) {
      throw new AppError("A quantidade deve ser maior que zero.", 400);
    }

    // Se veio um clienteId, valida se o cliente relacionado realmente existe
    // antes de gravar o pedido. Fica no service (e não no controller/repository)
    // porque é uma regra de negócio que depende de outra entidade.
    if (data.clienteId !== undefined) {
      await clienteService.buscarPorId(data.clienteId);
    }

    return pedidoRepository.create(data);
  },

  async atualizar(id: number, data: UpdatePedidoDTO) {
    await this.buscarPorId(id);

    if (data.clienteId !== undefined) {
      await clienteService.buscarPorId(data.clienteId);
    }

    return pedidoRepository.update(id, data);
  },

  async remover(id: number) {
    await this.buscarPorId(id);
    return pedidoRepository.remove(id);
  },
};
