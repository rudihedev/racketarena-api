import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  brand: z.literal(true).optional(),
  name: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  racketWeightU: z.literal(true).optional(),
  sku: z.literal(true).optional(),
  price: z.literal(true).optional(),
  stockQuantity: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProductMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectZodSchema = makeSchema();
