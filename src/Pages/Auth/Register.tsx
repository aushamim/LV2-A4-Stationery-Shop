import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import FormInput from "../../Components/FormInput/FormInput";
import { useRegisterMutation } from "../../Redux/Features/Auth/authApi";

export interface IRegisterValues {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: IRegisterValues) => {
    try {
      await register(values).unwrap();
      toast.success("User registered successfully. Please login.");
      navigate("/login");
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create an account</h1>

          <Formik initialValues={{ name: "", email: "", password: "", address: "", phone: "" }} onSubmit={handleSubmit}>
            <Form className="space-y-4 md:space-y-6">
              <FormInput label="Name" name="name" type="text" placeholder="Enter your name" />

              <FormInput label="Email" name="email" type="email" placeholder="Enter your email" />

              <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />

              <FormInput label="Address" name="address" type="text" placeholder="Enter your address" />

              <FormInput label="Phone" name="phone" type="text" placeholder="Enter your phone no" />

              <button
                type="submit"
                className="w-full text-white font-semibold bg-slate-900 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5 text-center active:scale-95 transition duration-300 uppercase"
              >
                Register
              </button>
            </Form>
          </Formik>
          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary-600 hover:underline">
              Login here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
