import { Router } from "express"
import restaurant from "./restaurant"

const router = Router()

export default () => {
    restaurant(router)
    return router
}