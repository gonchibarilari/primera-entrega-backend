import { Router } from "express";

const cartRouter = Router();
cartRouter.get("/", (req, res) => {
  res.send("Cart!");
});

export default cartRouter;