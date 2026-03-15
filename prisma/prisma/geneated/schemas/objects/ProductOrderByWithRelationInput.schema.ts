import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  brand: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  weight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  racketWeightU: SortOrderSchema.optional(),
  sku: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  stockQuantity: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
