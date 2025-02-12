// Importamos el objeto Router desde express. y los controladores de carritos.
import { Router } from "express";
import { getCarts, getCartByIdController, createCart, addProductToCartController } from "../controllers/carts_controller.js";

// Ejecutamos la función Router para obtener un objeto Router.
const cartsRouter = Router();

// Rutas para carritos
cartsRouter.get("/", getCarts);
cartsRouter.get("/:cid", getCartByIdController);
cartsRouter.post("/", createCart);
cartsRouter.post("/:cid/product/:pid", addProductToCartController);

// Exportamos el router.
export default cartsRouter;