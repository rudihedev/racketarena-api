import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  weight: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  stockQuantity: SortOrderSchema.optional()
}).strict();
export const ProductAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export const ProductAvgOrderByAggregateInputObjectZodSchema = makeSchema();
