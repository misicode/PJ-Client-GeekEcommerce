import { Product } from "../../../types/product";

type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product: { name, imageSrc, imageAlt, price } }: CardProductProps) => {
  return (
    <a href="#">
      <div className="h-56 w-full bg-white dark:bg-gray-800 rounded-lg">
        <img
          alt={ imageAlt }
          src={ imageSrc }
          className="h-full mx-auto py-6 px-5 hover:scale-110 ease-in duration-300"
        />
      </div>
      <div className="mt-4 text-sm">
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