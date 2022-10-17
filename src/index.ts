import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 4333;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Funcionando." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
