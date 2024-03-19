import { Router } from "express"
import restaurant from "./restaurant"
import product from "./product"

const router = Router()

export default () => {
    restaurant(router)
    product(router)
    return router
}