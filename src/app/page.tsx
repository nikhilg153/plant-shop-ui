import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="text-white bg-[url('../background.jpeg')] bg-cover bg-center h-screen px-96 pt-32">
      <SearchBar />
      <ProductCard />
      <SideBar />
    </div>
  );
}
