import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div className="h-[34rem] pb-12 px-6 sm:px-12 md:px-16 lg:px-24 dark:bg-gray-800">
      <Carousel>
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
