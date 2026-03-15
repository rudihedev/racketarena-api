import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  brand: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  racketWeightU: SortOrderSchema.optional(),
  sku: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  stockQuantity: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOrderByAggregateInput>;
export const ProductCountOrderByAggregateInputObjectZodSchema = makeSchema();
