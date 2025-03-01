import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Tab from "../../Components/Tab/Tab";
import { useGetUserDataMutation } from "../../Redux/Features/Auth/authApi";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";
import { tabs } from "./tabs";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);
  const [getUserData, { data: userData, isLoading }] = useGetUserDataMutation();

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    if (user?.userId) {
      getUserData(user.userId);
    }
  }, [user?.userId, getUserData]);

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <div>
        <Tab active="profile" tabs={tabs} />
      </div>

      <div className="mt-5">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-xl">Name</span>
                </div>
                <div className="flex items-center gap-5 w-full">
                  <input type="text" defaultValue={userData?.data?.name} className="input input-bordered input-sm w-full" disabled={!editName} />
                  {!editName ? (
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        setEditName(true);
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button className="btn btn-sm" onClick={() => {}}>
                        Save
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          setEditName(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
