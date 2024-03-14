import * as z from "zod";

export const productSchema = z.object({
  name: z.string({ required_error: "Nome do produto é obrigatório" }).min(1),
  price: z.number({ required_error: "Preço do produto é obrigatório" }),
  category: z
    .array(z.string({ required_error: "Categoria do produto é obrigatório" }))
    .min(1),
  offer: z.object({
    description: z.string(),
    discount: z.number(),
    offerDays: z.array(
      z.object({
        day: z.number(),
        time: z.string(),
      })
    ),
  }),
});
