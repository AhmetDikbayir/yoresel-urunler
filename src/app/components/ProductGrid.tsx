import Image from 'next/image';
import Link from 'next/link';

export type ProductType = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  star: string;
  categoryName: string;
  images?: string[];
  description?: string;
  price_id?: string;
};

interface ProductGridProps {
  products: ProductType[];
  category?: string;
}

const ProductGrid = ({ products, category }: ProductGridProps) => (
  <div className='bg-white'>
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Ürünler'}
        </h2>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {products.map(product => (
          <div key={product._id} className='group relative'>
            <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
              <Image
                src={product.imageUrl}
                alt='Product image'
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                width={300}
                height={300}
              />
            </div>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  <Link href={`/product/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  {product.categoryName}
                </p>
              </div>
              <div className='flex flex-col items-end'>
                <p className='text-sm font-medium text-gray-900'>
                  {product.price}₺
                </p>
                {product.star && (
                  <span className='text-xs text-yellow-500 font-semibold flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className='w-4 h-4 inline'><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                    {parseFloat(product.star).toFixed(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductGrid;
