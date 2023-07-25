import { Product } from "../../../types/product";

type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product: { id, name, imageSrc, price } }: CardProductProps) => {
  return (
    <a href="#">
      <div className="h-56 w-full bg-white dark:bg-gray-800 rounded-lg aspect-h-1 aspect-w-1 lg:aspect-none overflow-hidden">
        <img
          src={ imageSrc }
          className="h-full mx-auto py-6 px-5 object-contain group-hover:scale-110 ease-in duration-300"
        />
      </div>
      <div className="mt-4 text-sm break-normal">
        <h3 className="text-center">
          { name }
        </h3>
        <p className="mt-2 text-base font-medium text-right">
          S/ { price }
        </p>
      </div>
    </a>
  );
};

export default CardProduct;