import { CiLock } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="text-gray-800 border-transparent shadow-md overflow-hidden flex items-center mx-auto space-x-2 bg-opacity-5 rounded-3xl w-96 px-5 py-2 my-5 backdrop-blur-3xl">
      <div>
        <CiLock />
      </div>
      <div>https:\\www.myplant.com\\</div>
    </div>
  );
};

export default SearchBar;
