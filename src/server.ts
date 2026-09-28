import express from "express";
import clienteRoutes from "./routes/clienteRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/clientes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);

// Registrado por último: só assim o Express o trata como middleware
// de tratamento de erro para tudo o que vier antes dele.
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor SPGU rodando na porta ${PORT}`));
