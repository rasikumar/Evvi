import ProductCard from "../components/ProductCard";
import { products } from "../constant";

function PopularProducts() {
  return (
    <section className="px-16 max-mobile:px-8 py-10 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="capitalize text-4xl max-tablet:text-2xl max-mobile:text-lg lg:max-w-lg font-bold">
          Our{" "}
          <span className="text-t-primary max-tablet:text-2xl max-mobile:text-lg">
            Digital{" "}
          </span>
          Service
        </h2>
        <p className="text-base ">
          Our Digital Excellence services are designed to elevate your brand and
          drive meaningful engagement. We offer a full suite of digital
          marketing solutions.
        </p>
      </div>
      <div className="grid grid-rows-1 max-mobile:grid-cols-1 grid-cols-4 max-tablet:grid-cols-2 gap-4 m-auto">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
