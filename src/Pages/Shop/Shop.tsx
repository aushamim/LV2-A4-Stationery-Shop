import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Product from "../../Components/Product/Product";
import { useGetProductsQuery } from "../../Redux/Features/Products/productApi";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState(undefined);
  const [sortOption, setSortOption] = useState(undefined);
  const [availability, setAvailability] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const queryArgs = {
    searchTerm: search,
    category: filterCategory,
    sort: sortOption,
    page: currentPage,
    ...(availability !== "all" && { inStock: availability }),
  };

  const { isLoading, data } = useGetProductsQuery(queryArgs, { refetchOnMountOrArgChange: true });

  const products = data?.products;

  const handleFilterChange = (value: any) => {
    if (value === "all") {
      setFilterCategory(undefined);
    } else {
      setFilterCategory(value);
    }
  };

  const handleSortChange = (value: any) => setSortOption(value);
  const handleAvailabilityChange = (value: any) => setAvailability(value);
  const handleSearch = () => setSearch(searchTerm);

  const totalPagesFromBackend = data?.meta?.totalPage || 1;
  useEffect(() => {
    setTotalPages(totalPagesFromBackend);
  }, [totalPagesFromBackend]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5 mb-10">
      {/* Filter */}
      <div className="flex items-center flex-col xl:flex-row justify-end gap-5">
        <label className="input input-bordered input-sm flex items-center gap-2 w-full xl:w-56">
          <input
            type="text"
            className="flex-grow h-full"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <select
          className="select select-bordered select-sm w-full xl:w-56"
          defaultValue={filterCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Writing">Writing</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Art Supplies">Art Supplies</option>
          <option value="Educational">Educational</option>
          <option value="Technology">Technology</option>
        </select>

        <select
          className="select select-bordered select-sm w-full xl:w-56"
          defaultValue={filterCategory}
          onChange={(e) => handleAvailabilityChange(e.target.value)}
        >
          <option value="all">Availability</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>

        <select
          className="select select-bordered select-sm w-full xl:w-56"
          defaultValue={filterCategory}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value={undefined}>Sort by Price</option>
          <option value="price">Low to High</option>
          <option value="-price">High to Low</option>
        </select>
      </div>

      {/* Products */}
      {isLoading ? (
        <Loader />
      ) : products?.length === 0 ? (
        <div className="py-16">
          <img className="size-20 mx-auto" src="assets/images/stationery.png" alt="no product found" />
          <p className="text-center mt-3 text-xl">No Products Found</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7">
          {products?.map((product) => <Product key={products.indexOf(product)} product={product} />)}
        </div>
      )}

      {/* Pagination */}
      {products && products.length > 0 ? (
        <div className="flex justify-center mt-8">
          <div className="btn-group join">
            <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &lt;
            </button>
            <button className="join-item btn btn-sm">
              Page {currentPage} of {totalPages}
            </button>
            <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Shop;
