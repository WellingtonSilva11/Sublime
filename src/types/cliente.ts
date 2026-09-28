// Contratos (DTOs) da entidade Cliente

export interface CreateClienteDTO {
  nome: string;
  telefone: string;
  email?: string;
}

export interface UpdateClienteDTO {
  nome?: string;
  telefone?: string;
  email?: string;
}
