"use client";
import Plant from "@/plant.png";
import Plant1 from "@/plant1.png";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { TbFilterCheck } from "react-icons/tb";
import { AiFillAppstore } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const icons = [
  {
    id: 1,
    icon: <AiFillAppstore />,
  },
  {
    id: 2,
    icon: <TbFilterCheck />,
  },
  {
    id: 3,
    icon: <BiMessageSquare />,
  },
];

const products = [
  {
    id: 1,
    name: "Snake Plant",
    image: Plant1,
    price: 20,
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    image: Plant,
    price: 30,
  },
  {
    id: 3,
    name: "Peace Lily",
    image: Plant1,
    price: 25,
  },
];

const ProductCard: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "60px",
    slidesToShow: 3,
  };
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="border-transparent rounded-3xl overflow-hidden flex flex-col flex-1 space-y-4 shadow-md p-10 backdrop-blur-3xl ">
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              {icons.map((icon) => (
                <div
                  className="text-black border-transparent shadow-md  rounded-full  p-2 backdrop-blur-3xl"
                  key={icon.id}
                >
                  {icon.icon}
                </div>
              ))}
            </div>

            <div className="border-transparent shadow-md  flex items-center space-x-5 bg-opacity-5 rounded-3xl p-2 px-4 backdrop-blur-3xl">
              <div className="text-gray-500">Search</div>
              <div>
                <IoMdSearch className="text-black" />
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className=" flex flex-col items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt="image"
                  height={250}
                  width={250}
                />
                <div className="p-4">
                  <h4 className="text-sm font-semibold">{product.name}</h4>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="border-transparent shadow-md p-4 space-x-12 flex items-center justify-center bg-opacity-5 rounded-full backdrop-blur-3xl w-96 mx-auto relative top-[-40px]">
          <div className="px-4">
            <div>{products[1].name}</div>
            <div className="font-bold text-xl">${products[1].price}</div>
          </div>
          <div className="flex items-center bg-white text-black p-2 rounded-full cursor-pointer">
            <div>
              <BiPlus />
            </div>
            <div className="font-medium">Add to Cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
