import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'slug', 'brand', 'name', 'weight', 'racketWeightU', 'sku', 'price', 'stockQuantity', 'imageUrl', 'description', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;