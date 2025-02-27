import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import FormInput from "../../Components/FormInput/FormInput";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { setUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch } from "../../Redux/hooks";
import { verifyToken } from "../../Utils/verifyToken";

export interface ILoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginValues) => {
    const res = await login(values).unwrap();
    const user = verifyToken(res?.data?.token);

    dispatch(setUser({ user: user, token: res?.data?.token }));

    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>

          <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
            <Form className="space-y-4 md:space-y-6">
              <FormInput label="Email" name="email" type="email" placeholder="Enter your email here" />

              <FormInput label="Password" name="password" type="password" placeholder="Enter your password here" />

              <button
                type="submit"
                className="w-full text-white font-semibold bg-slate-900 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5 text-center active:scale-95 transition duration-300 uppercase"
              >
                Login
              </button>
            </Form>
          </Formik>
          <p className="text-sm font-light text-gray-500">
            Don’t have an account yet?{" "}
            <Link to="/register" className="font-medium text-primary-600 hover:underline">
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
