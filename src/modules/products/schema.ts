import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().positive(),
  brand: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  racketWeightU: z.enum(["2U", "3U", "4U", "5U"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;
