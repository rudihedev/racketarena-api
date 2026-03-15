import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  slug: z.string(),
  brand: z.string(),
  name: z.string(),
  weight: z.number(),
  racketWeightU: z.string(),
  sku: z.string(),
  price: z.number().int(),
  stockQuantity: z.number().int(),
  imageUrl: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    slug: z.number(),
    brand: z.number(),
    name: z.number(),
    weight: z.number(),
    racketWeightU: z.number(),
    sku: z.number(),
    price: z.number(),
    stockQuantity: z.number(),
    imageUrl: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    weight: z.number().nullable(),
    price: z.number().nullable(),
    stockQuantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    weight: z.number().nullable(),
    price: z.number().nullable(),
    stockQuantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    brand: z.string().nullable(),
    name: z.string().nullable(),
    weight: z.number().nullable(),
    racketWeightU: z.string().nullable(),
    sku: z.string().nullable(),
    price: z.number().int().nullable(),
    stockQuantity: z.number().int().nullable(),
    imageUrl: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    brand: z.string().nullable(),
    name: z.string().nullable(),
    weight: z.number().nullable(),
    racketWeightU: z.string().nullable(),
    sku: z.string().nullable(),
    price: z.number().int().nullable(),
    stockQuantity: z.number().int().nullable(),
    imageUrl: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));