
import AddToBag from '@/app/components/AddToBag';
//import CheckoutNow from '@/app/components/CheckoutNow';
import ImageGallery from '@/app/components/ImageGallery';
import { Button } from '@/components/ui/button';
import myProducts from '../../components/productsData';


export const dynamic = 'force-dynamic';

const ProductPage = ({ params }: { params: { slug: string } }) => {
  // Slug'a göre ürünü bul
  const data = myProducts.find((product) => product.slug === params.slug);
  if (!data) return <div className='p-8 text-center text-red-500'>Ürün bulunamadı.</div>;

  // Güvenli fallback'ler
  const images = data.images && data.images.length > 0 ? data.images : (data.imageUrl ? [data.imageUrl] : []);
  const description = data.description ?? '';
  const price_id = data.price_id ?? '';

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={images} />

          <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-500'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                {data.name}
              </h2>
            </div>

            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className='gap-x-2 rounded-full'>
                <span className='text-sm'>{data.star}</span>
                {/* <Star className='h-5 w-5' /> */}
              </Button>

              <span className='text-sm text-gray-500 transition duration-100'>
                56 Oy
              </span>
            </div>

            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                  {data.price}₺
                </span>
                <span className='mb-0.5 text-red-500 line-through'>
                  {data.price + 30}₺
                </span>
              </div>

              <span className='text-sm text-gray-500'>
                KDV dahil, kargo ücreti hariç
              </span>
            </div>

            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              {/* <Truck className='h-6 w-6' /> */}
              <span className='text-sm'>2-4 Gün İçinde Kargo</span>
            </div>

            <div className='flex gap-2.5'>
              <AddToBag
                currency='TRY'
                description={description}
                image={images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={price_id}
              />
              {/*}
              <CheckoutNow
                currency='TRY'
                description={description}
                image={images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={price_id}
              />
              */}
            </div>

            <p className='mt-12 text-base tracking-wide text-gray-500'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
