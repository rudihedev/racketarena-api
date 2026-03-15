import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  brand: z.boolean().optional(),
  name: z.boolean().optional(),
  weight: z.boolean().optional(),
  racketWeightU: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  stockQuantity: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
