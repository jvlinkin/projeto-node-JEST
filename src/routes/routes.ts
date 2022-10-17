import { Request, Response, Router } from "express";
const routes = Router();

//Rota de teste
routes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "funcionando" });
});

export default routes;
