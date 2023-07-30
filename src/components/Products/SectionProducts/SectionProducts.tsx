import { Product } from "../../../types/product";

import CardProduct from "../CardProduct/CardProduct";
import Carousel from "../../Parts/Carousel/Carousel";

const products: Product[] = [
  {
    id: "PRO1",
    name: "The Legend of Zelda: Tears of the Kingdom Nintendo Switch",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689484304/GeekEcommerce/products/zelda_tears_of_the_kingdom_switch.webp",
    imageAlt: "Image of product 1",
    price: 99.99,
    stock: 99,
    status: true,
  },
  {
    id: "PRO2",
    name: "Hogwarts Legacy PS4",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689485144/GeekEcommerce/products/hogwarts_legacy_ps4.webp",
    imageAlt: "Image of product 2",
    price: 99.99,
    stock: 99,
    status: true,
  },
  {
    id: "PRO3",
    name: "Resident Evil 4 PS4",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689485776/GeekEcommerce/products/resident_evil_4_ps4.webp",
    imageAlt: "Image of product 3",
    price: 99.99,
    stock: 99,
    status: true,
  },
  {
    id: "PRO4",
    name: "The Legend of Zelda: Tears of the Kingdom Nintendo Switch",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689484304/GeekEcommerce/products/zelda_tears_of_the_kingdom_switch.webp",
    imageAlt: "Image of product 4",
    price: 99.99,
    stock: 99,
    status: true,
  },
  {
    id: "PRO5",
    name: "Hogwarts Legacy PS4",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689485144/GeekEcommerce/products/hogwarts_legacy_ps4.webp",
    imageAlt: "Image of product 5",
    price: 99.99,
    stock: 99,
    status: true,
  },
  {
    id: "PRO6",
    name: "Resident Evil 4 PS4",
    description: "Description",
    imageSrc: "https://res.cloudinary.com/rukimiuwu/image/upload/v1689485776/GeekEcommerce/products/resident_evil_4_ps4.webp",
    imageAlt: "Image of product 6",
    price: 99.99,
    stock: 99,
    status: true,
  },
];

type SectionProductsProps = {
  title: string;
};

const SectionProducts = ({ title }: SectionProductsProps) => {
  return (
    <section className="relative py-12 sm:py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gray-200 dark:bg-gray-900">
      <h2 className="mb-8 text-xl font-bold text-center">
        { title }
      </h2>
      <Carousel>
        {
          products.map((product) => (
            <CardProduct product={ product } />
          ))
        }
      </Carousel>
    </section>
  );
};

export default SectionProducts;