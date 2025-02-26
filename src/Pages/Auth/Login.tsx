import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { setUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch } from "../../Redux/hooks";
import { verifyToken } from "../../Utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await login({ email, password }).unwrap();
    const user = verifyToken(res?.data?.token);

    dispatch(setUser({ user: user, token: res?.data?.token }));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" name="email" id="email" className="border" />
        <input type="text" name="password" id="password" className="border" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
