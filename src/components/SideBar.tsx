import { TbFilterCheck } from "react-icons/tb";
import { AiFillAppstore } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";

const icons = [
  {
    id: 1,
    icon: <TbShoppingCart />,
  },
  {
    id: 2,
    icon: <TbFilterCheck />,
  },
  {
    id: 3,
    icon: <BiMessageSquare />,
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
  },
];

const SideBar = () => {
  return (
    <div className="text-gray-800 border-transparent shadow-md items-center flex flex-col mt-32 justify-center p-4 h-48 space-y-6 bg-opacity-5 rounded-3xl backdrop-blur-3xl absolute top-60 left-80">
      {icons.map((icon) => (
        <div key={icon.id}>{icon.icon}</div>
      ))}
    </div>
  );
};

export default SideBar;
