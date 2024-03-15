import { Router } from "express";
import expressAdapter from "../expressAdapter";
import { createRestaurantController } from "../../controllers/restaurant/create";
import { loadAllRestaurantController } from "../../controllers/restaurant/loadAll";

export default (router: Router) => {
  router.post("/restaurant", expressAdapter(createRestaurantController()));
  router.get("/restaurant", expressAdapter(loadAllRestaurantController()));
};
