import ProductCard from "./components/ProductCard";
import { productList } from "./data";
 

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
  <div className=" bg-teal-700 p-3">
     <main className=" container ">
     <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-2 border-teal-500 bg-slate-100   p-2 rounded-xl">
      {renderProductList}
    </div>
   </main>
  </div>
  );
};

export default App;
