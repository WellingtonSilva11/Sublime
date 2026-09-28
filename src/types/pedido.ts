// Contratos (DTOs) da entidade Pedido

export interface CreatePedidoDTO {
  quantidade: number;
  tipoGola: string;
  tipoManga: string;
  valorTotal: number;
  clienteId?: number; // opcional: RF009 permite pedido sem cadastro
}

export interface UpdatePedidoDTO {
  quantidade?: number;
  tipoGola?: string;
  tipoManga?: string;
  valorTotal?: number;
  status?: string;
  clienteId?: number;
}
