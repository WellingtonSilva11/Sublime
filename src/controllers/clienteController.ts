import { Request, Response, NextFunction } from "express";
import { clienteService } from "../services/clienteService";

export const clienteController = {
  async listar(req: Request, res: Response, next: NextFunction) {
    try {
      const clientes = await clienteService.listar();
      res.status(200).json(clientes);
    } catch (err) {
      next(err);
    }
  },

  async buscarPorId(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = await clienteService.buscarPorId(Number(req.params.id));
      res.status(200).json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async criar(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = await clienteService.criar(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async atualizar(req: Request, res: Response, next: NextFunction) {
    try {
      const cliente = await clienteService.atualizar(Number(req.params.id), req.body);
      res.status(200).json(cliente);
    } catch (err) {
      next(err);
    }
  },

  async remover(req: Request, res: Response, next: NextFunction) {
    try {
      await clienteService.remover(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
