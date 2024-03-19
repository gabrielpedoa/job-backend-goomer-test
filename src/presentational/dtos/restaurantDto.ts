import * as z from "zod";

export const restaurantSchema = z.object({
  photo: z.string(),
  name: z.string({ required_error: "nome é obrigatório" }).min(1),
  adress: z.object({
    postalCode: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string(),
  }),
  openingHours: z.object({  
    "0": z.string().nullable(),
    "1": z.string().nullable(),
    "2": z.string().nullable(),
    "3": z.string().nullable(),
    "4": z.string().nullable(),
    "5": z.string().nullable(),
    "6": z.string().nullable(),
  }),
});
