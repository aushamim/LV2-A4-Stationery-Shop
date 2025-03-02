import { Field, Form, Formik } from "formik";
import { useParams } from "react-router";
import { toast } from "sonner";
import FormInput from "../../Components/FormInput/FormInput";
import Tab from "../../Components/Tab/Tab";
import { useCreateProductMutation, useGetProductQuery, useUpdateProductMutation } from "../../Redux/Features/Products/productApi";
import { tabs } from "../Dashboard/tabs";
import { SingleProductInterface } from "../Product/Product";

interface productInterface {
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  inStock: boolean;
}

const AddProduct = () => {
  const { productId } = useParams();

  let oldImage = null;
  const initialValues = { name: "", brand: "", description: "", category: "", price: 0, quantity: 0, inStock: true };

  if (productId) {
    const { data } = useGetProductQuery(productId);
    const product: SingleProductInterface = data?.data;

    if (product) {
      initialValues.name = product.name;
      initialValues.brand = product.brand;
      initialValues.description = product.description;
      initialValues.category = product.category;
      initialValues.price = product.price;
      initialValues.quantity = product.quantity;
      initialValues.inStock = product.inStock;
      oldImage = product.imgUrl;
    }
  }

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (values: productInterface, { resetForm }: { resetForm: () => void }) => {
    const promise = async () => {
      const productData = {
        name: values.name,
        brand: values.brand,
        description: values.description,
        category: values.category,
        price: values.price,
        quantity: values.quantity,
        imgUrl: "",
        inStock: values.inStock,
      };

      if (oldImage) {
        productData.imgUrl = oldImage;
      }

      const files = (document.getElementById("product-image") as HTMLInputElement).files;
      const file = files ? files[0] : null;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "PenCraft");
        formData.append("cloud_name", "dlcf7aclk");

        const clImg = await fetch("https://api.cloudinary.com/v1_1/dlcf7aclk/image/upload", {
          method: "POST",
          body: formData,
        });
        const clImgResponse = await clImg.json();
        productData.imgUrl = clImgResponse.secure_url;
      }

      if (productId) {
        await updateProduct({ productId, productData }).unwrap();
      } else {
        await createProduct(productData).unwrap();
      }

      resetForm();
    };

    toast.promise(promise, {
      loading: productId ? "Updating product..." : "Creating product...",
      success: productId ? "Product updated successfully!" : "Product created successfully!",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5 mb-10">
      <div className="hidden xl:block">
        <Tab active="add product" tabs={tabs} />
      </div>

      <div className="mt-5 xl:w-1/2 mx-auto">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-4 md:space-y-6">
            <FormInput label="Name" name="name" type="text" placeholder="" />
            <FormInput label="Brand" name="brand" type="text" placeholder="" />
            <FormInput label="Description" name="description" type="text" placeholder="" />

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text -ml-0.5 text-sm font-medium text-gray-900">Category</span>
              </div>
              <Field as="select" name="category" className="select select-bordered w-full">
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Writing">Writing</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Art Supplies">Art Supplies</option>
                <option value="Educational">Educational</option>
                <option value="Technology">Technology</option>
              </Field>
            </label>

            <FormInput label="Price" name="price" type="number" placeholder="" />
            <FormInput label="Quantity" name="quantity" type="number" placeholder="" />

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text -ml-0.5 text-sm font-medium text-gray-900">Image</span>
              </div>
              <input type="file" className="file-input file-input-bordered w-full" id="product-image" accept="image/*" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text -ml-0.5 text-sm font-medium text-gray-900">In Stock</span>
              </div>
              <select className="select select-bordered w-full" defaultValue="true" id="new-product-inStock" name="inStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full xl:w-fit !mt-6 mx-auto block text-white font-semibold bg-slate-900 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5 text-center active:scale-95 transition duration-300 uppercase"
            >
              {productId ? "Update Product" : "Add Product"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
