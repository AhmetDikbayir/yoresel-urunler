import ProductGrid from '../components/ProductGrid';
import myProducts from '../components/productsData';

export const dynamic = 'force-dynamic';

const CategoryPage = ({ params }: { params: { category: string } }) => {
  // Sadece ilgili kategoriye ait ürünleri filtrele
  const filteredProducts = myProducts.filter(
    product =>
      product.categoryName.toLowerCase() === params.category.toLowerCase(),
  );

  return <ProductGrid products={filteredProducts} category={params.category} />;
};

export default CategoryPage;
