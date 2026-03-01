import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().positive(),
  brand: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  sku: z.string().min(1),
  price: z.int().min(1),
  stockQuantity: z.int().min(1),
  description: z.string().min(1),
  racketWeightU: z.enum(["2U", "3U", "4U", "5U"]),
  weight: z.float32().min(10).nullable().optional(),
  imageUrl: z.url(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const SeedProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const SeedProductsSchema = SeedProductSchema.array();

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;

export type SeedProduct = z.infer<typeof SeedProductSchema>;
export type SeedProducts = z.infer<typeof SeedProductsSchema>;
