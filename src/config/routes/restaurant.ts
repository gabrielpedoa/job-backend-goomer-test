import { Router } from "express";
import expressAdapter from "../expressAdapter";
import { createRestaurantController } from "../../controllers/restaurant/create";
import { loadAllRestaurantController } from "../../controllers/restaurant/loadAll";
import { loadByIdRestaurantController } from "../../controllers/restaurant/loadById";
import { deleteRestaurantController } from "../../controllers/restaurant/delete";
import { updateRestaurantController } from "../../controllers/restaurant/update";

export default (router: Router) => {
  router.post("/restaurant", expressAdapter(createRestaurantController()));
  router.get("/restaurant", expressAdapter(loadAllRestaurantController()));
  router.get("/restaurant/:id", expressAdapter(loadByIdRestaurantController()));
  router.delete(
    "/restaurant/:id",
    expressAdapter(deleteRestaurantController())
  );
  router.put("/restaurant/:id", expressAdapter(updateRestaurantController()));
};
