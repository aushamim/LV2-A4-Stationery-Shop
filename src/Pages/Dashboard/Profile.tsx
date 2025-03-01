import { Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "sonner";
import FormInput from "../../Components/FormInput/FormInput";
import Loader from "../../Components/Loader/Loader";
import Tab from "../../Components/Tab/Tab";
import UserDataElement from "../../Components/UserDataElement/UserDataElement";
import { useGetUserDataMutation, useResetPassMutation } from "../../Redux/Features/Auth/authApi";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";
import { tabs } from "./tabs";

const Profile = () => {
  const [resetPass] = useResetPassMutation();

  const user = useAppSelector(selectCurrentUser);
  const [getUserData, { data: userData, isLoading }] = useGetUserDataMutation();

  useEffect(() => {
    if (user?.userId) {
      getUserData(user.userId);
    }
  }, [user?.userId, getUserData]);

  const handleSubmit = async (
    values: { oldPassword: string; newPassword: string; rePassword: string },
    { setErrors, resetForm }: { setErrors: (errors: { [key: string]: string }) => void; resetForm: () => void },
  ) => {
    if (values.newPassword !== values.rePassword) {
      setErrors({
        newPassword: "Passwords do not match",
        rePassword: "Passwords do not match",
      });
      return;
    }

    const promise = async () => {
      await resetPass({ userId: user?.userId, passwords: { oldPassword: values.oldPassword, newPassword: values.newPassword } }).unwrap();
      resetForm();
    };

    toast.promise(promise, {
      loading: "Changing password...",
      success: "Password changed successfully",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5 mb-16">
      <div>
        <Tab active="profile" tabs={tabs} />
      </div>

      <div className="mt-5">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div>
              <h1 className="text-2xl font-bold">User Data</h1>
            </div>
            <div>
              {userData &&
                Object.entries(userData?.data).map(([key, value]) => <UserDataElement key={key} data={{ key: key, value: value as string }} />)}
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Change Password</h1>
            </div>
            <div className="mt-5">
              <Formik initialValues={{ oldPassword: "", newPassword: "", rePassword: "" }} onSubmit={handleSubmit}>
                <Form className="space-y-3">
                  <FormInput label="Old Password" name="oldPassword" type="password" placeholder="Enter your old password" />

                  <FormInput label="New Password" name="newPassword" type="password" placeholder="Enter your new password here" />

                  <FormInput label="Re Type New Password" name="rePassword" type="password" placeholder="Re.Type your new password here" />

                  <button type="submit" className="btn !mt-5 block">
                    Change Password
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
