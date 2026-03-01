import { prisma } from "../src/lib/prisma";
import { products } from "../src/modules/racket/data";

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        brand: product.brand,
        name: product.name,
        slug: product.slug,
        weight: product.weight,
        sku: product.sku,
        price: product.price,
        stockQuantity: product.stockQuantity,
        imageUrl: product.imageUrl,
        description: product.description,
      },
      create: {
        brand: product.brand,
        name: product.name,
        slug: product.slug,
        weight: product.weight,
        sku: product.sku,
        price: product.price,
        stockQuantity: product.stockQuantity,
        imageUrl: product.imageUrl,
        description: product.description,
      },
    });

    console.log(`🏸 Product: ${product.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
