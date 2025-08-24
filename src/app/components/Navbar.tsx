'use client';

import { ShoppingBag, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';

const links = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'İncir', href: '/incir' },
  { name: 'Zeytin', href: '/zeytin' },
  { name: 'Zeytin Yağı', href: '/zeytin-yagi' },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  // Örnek kullanıcı verisi, gerçek uygulamada auth'dan alınmalı
  const user: any = null; // { name: 'Ali Veli' } gibi bir obje olursa giriş yapılmış olur

  return (
    <header className='mb-8 border-b'>
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-2xl font-bold md:text-4xl'>
            Yöresel<span className='text-primary'>Ürünler</span>
          </h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-primary'
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className='flex divide-x border-r sm:border-l'>
          <Button
            variant={'outline'}
            onClick={() => handleCartClick()}
            className='flex size-12 flex-col gap-y-1.5 rounded-none sm:size-20 md:size-24'
          >
            <ShoppingBag />
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              Sepet
            </span>
          </Button>
          <Button
            variant={'outline'}
            className='flex size-12 flex-col items-center justify-center gap-y-1.5 rounded-none sm:size-20 md:size-24'
          >
            <User2 />
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              {user ? user.name : 'Üye Ol / Giriş'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
