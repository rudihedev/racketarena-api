import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  slug: z.string(),
  brand: z.string(),
  name: z.string(),
  weight: z.number().optional(),
  racketWeightU: z.string(),
  sku: z.string(),
  price: z.number().int(),
  stockQuantity: z.number().int(),
  imageUrl: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});