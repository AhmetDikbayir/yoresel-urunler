'use client';

import { useShoppingCart } from 'use-shopping-cart';

import { Button } from '@/components/ui/button';
import { ProductCart } from '@/models/product';

const AddToBag = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        (addItem(product), handleCartClick());
      }}
    >
      Sepete Ekle
    </Button>
  );
};

export default AddToBag;
