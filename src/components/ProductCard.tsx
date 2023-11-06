import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Button from "./UI/Button";
import Image from "./UI/Image";

interface ProductCardProps {
  product: IProduct;
}

// eslint-disable-next-line no-empty-pattern
const ProductCard = ({ product }: ProductCardProps) => {
  const { category, description, imageURL, price, title } = product;

  return (
    <div className="  max-w-sm md:max-w-lg mx-auto md:mx-0  flex flex-col  border-2 border-cyan-500 m-2  p-2 rounded-xl">
      <Image ImgURL={imageURL} alt={title} className=" h-48 rounded-lg" />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}...</p>

      <div className="flex items-start my-4 space-x-2">
        <span className=" h-5 w-5 rounded-full bg-red-900 cursor-pointer"></span>
        <span className=" h-5 w-5 rounded-full bg-teal-900 cursor-pointer"></span>
        <span className=" h-5 w-5 rounded-full bg-cyan-900 cursor-pointer"></span>
      </div>
      <div className="flex justify-between items-center">
        <span>{price}</span>
        <div className=" flex  gap-2 items-center">
          <span>Nike</span>
          <Image
            ImgURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2 my-4">
        <Button
          className="  bg-indigo-700  "
          width="w-full"
          onClick={() => console.log("first")}
        >
          Edit
        </Button>
        <Button
          className="  bg-[#c2344d]  "
          width="w-full"
          onClick={() => console.log("first")}
        >
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
