import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  name: z.string().optional(),
  sku: z.string().optional()
}).strict();
export const ProductWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductWhereUniqueInput>;
export const ProductWhereUniqueInputObjectZodSchema = makeSchema();
