import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  brand: z.string().max(300),
  name: z.string(),
  weight: z.number().optional().nullable(),
  racketWeightU: z.string(),
  sku: z.string(),
  price: z.number().int(),
  stockQuantity: z.number().int(),
  imageUrl: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyInputObjectSchema: z.ZodType<Prisma.ProductCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyInput>;
export const ProductCreateManyInputObjectZodSchema = makeSchema();
