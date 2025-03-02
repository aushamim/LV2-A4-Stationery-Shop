import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import Loader from "../../../Components/Loader/Loader";
import Tab from "../../../Components/Tab/Tab";
import { selectCurrentUser } from "../../../Redux/Features/Auth/authSlice";
import { useDeleteProductMutation, useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import { useAppSelector } from "../../../Redux/hooks";
import { adminTabs, userTabs } from "../tabs";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { isFetching, isLoading, data } = useGetProductsQuery({ page: currentPage }, { refetchOnMountOrArgChange: true });
  const products = data?.products;

  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = (productId: string) => {
    const promise = async () => {
      await deleteProduct(productId).unwrap();
    };

    toast.promise(promise, {
      loading: "Deleting product...",
      success: "Product deleted successfully",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  const totalPagesFromBackend = data?.meta?.totalPage || 1;
  useEffect(() => {
    setTotalPages(totalPagesFromBackend);
  }, [totalPagesFromBackend]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <div className="hidden xl:block">
        <Tab active="all products" tabs={user?.role === "admin" ? adminTabs : userTabs} />
      </div>

      {/* Products */}
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div className="mt-5 overflow-x-scroll">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th className="text-center">In Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-20 h-16 object-cover rounded-md" src={product?.imgUrl} alt={product?.product?.name} />
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.brand}</td>
                  <td>{product?.category}</td>
                  <td>${product?.price?.toFixed(2)}</td>
                  <td className="text-center">{product?.inStock ? product?.quantity : 0}</td>
                  <td>
                    <Link to={`/dashboard/edit-product/${product?._id}`} className="btn btn-sm mr-2">
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm bg-red-100 hover:bg-red-200 text-red-600"
                      onClick={() => {
                        handleDeleteProduct(product?._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default AllProducts;
