import * as z from 'zod';
// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.string(),
    slug: z.string(),
    brand: z.string(),
    name: z.string(),
    weight: z.number().nullable(),
    racketWeightU: z.string(),
    sku: z.string(),
    price: z.number().int(),
    stockQuantity: z.number().int(),
    imageUrl: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProductPureType = z.infer<typeof ProductModelSchema>;
