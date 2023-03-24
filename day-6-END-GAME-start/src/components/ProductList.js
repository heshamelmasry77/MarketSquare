import ProductListItem from "./ProductListItem";
const ProductList = ({products}) => {
    return (
        <>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductListItem key={product.id} product={product}/>
                ))}
            </div>
        </>
    );
};

export default ProductList;
