import { Request, Response, NextFunction } from "express";
import { pedidoService } from "../services/pedidoService";

export const pedidoController = {
  async listar(req: Request, res: Response, next: NextFunction) {
    try {
      const pedidos = await pedidoService.listar();
      res.status(200).json(pedidos);
    } catch (err) {
      next(err);
    }
  },

  async buscarPorId(req: Request, res: Response, next: NextFunction) {
    try {
      const pedido = await pedidoService.buscarPorId(Number(req.params.id));
      res.status(200).json(pedido);
    } catch (err) {
      next(err);
    }
  },

  async criar(req: Request, res: Response, next: NextFunction) {
    try {
      const pedido = await pedidoService.criar(req.body);
      res.status(201).json(pedido);
    } catch (err) {
      next(err);
    }
  },

  async atualizar(req: Request, res: Response, next: NextFunction) {
    try {
      const pedido = await pedidoService.atualizar(Number(req.params.id), req.body);
      res.status(200).json(pedido);
    } catch (err) {
      next(err);
    }
  },

  async remover(req: Request, res: Response, next: NextFunction) {
    try {
      await pedidoService.remover(Number(req.params.id));
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
