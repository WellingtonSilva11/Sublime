import { clienteRepository } from "../repositories/clienteRepository";
import { CreateClienteDTO, UpdateClienteDTO } from "../types/cliente";
import { AppError } from "../errors/AppError";

export const clienteService = {
  async listar() {
    return clienteRepository.findAll();
  },

  async buscarPorId(id: number) {
    const cliente = await clienteRepository.findById(id);
    if (!cliente) {
      throw new AppError("Cliente não encontrado.", 404);
    }
    return cliente;
  },

  async criar(data: CreateClienteDTO) {
    const existente = await clienteRepository.findByTelefone(data.telefone);
    if (existente) {
      throw new AppError("Já existe um cliente cadastrado com este telefone.", 400);
    }
    return clienteRepository.create(data);
  },

  async atualizar(id: number, data: UpdateClienteDTO) {
    await this.buscarPorId(id); // garante 404 antes de tentar atualizar
    return clienteRepository.update(id, data);
  },

  async remover(id: number) {
    await this.buscarPorId(id);
    return clienteRepository.remove(id);
  },
};
