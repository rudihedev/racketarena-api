import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const productscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  brand: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(300)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  weight: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  racketWeightU: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sku: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  stockQuantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  imageUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProductScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = productscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export const ProductScalarWhereWithAggregatesInputObjectZodSchema = productscalarwherewithaggregatesinputSchema;
