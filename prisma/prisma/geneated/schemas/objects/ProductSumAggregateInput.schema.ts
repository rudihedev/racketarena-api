import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  weight: z.literal(true).optional(),
  price: z.literal(true).optional(),
  stockQuantity: z.literal(true).optional()
}).strict();
export const ProductSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductSumAggregateInputType>;
export const ProductSumAggregateInputObjectZodSchema = makeSchema();
