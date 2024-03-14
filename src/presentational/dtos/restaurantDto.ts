import * as z from "zod";

export const restaurantSchema = z.object({
  photo: z.string(),
  name: z.string(),
  adress: z.object({
    postalCode: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
  }),
});
