import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  brand: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(300)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  weight: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  racketWeightU: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sku: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  stockQuantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  imageUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
