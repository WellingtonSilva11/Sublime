import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

// Middleware central de erros. Deve ser registrado por ÚLTIMO em server.ts,
// depois de todas as rotas, para conseguir capturar os erros lançados por elas.
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err);
  return res.status(500).json({ error: "Erro interno do servidor." });
}
