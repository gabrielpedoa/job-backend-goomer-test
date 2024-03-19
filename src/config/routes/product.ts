import { Router } from "express";
import expressAdapter from "../expressAdapter";
import { createProductController } from "../../controllers/product/create";
import { deleteProductController } from "../../controllers/product/delete";
import { loadByIdRestaurantController } from "../../controllers/restaurant/loadById";
import { updateProductController } from "../../controllers/product/update";
import { loadProductsByRestaurantIdController } from "../../controllers/product/loadRestaurantById";

export default (router: Router) => {
  router.post("/product", expressAdapter(createProductController()));
  router.delete("/product/:id", expressAdapter(deleteProductController()));
  router.get("/product/:id", expressAdapter(loadProductsByRestaurantIdController()));
  router.put("/product/:id", expressAdapter(updateProductController()));
};
