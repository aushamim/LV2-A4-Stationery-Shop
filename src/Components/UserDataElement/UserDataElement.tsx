import { useState } from "react";
import { toast } from "sonner";

const UserDataElement = ({ data }: { data: { key: string; value: string } }) => {
  const [editData, setEditData] = useState(false);
  return (
    <label className="form-control w-full mt-3">
      <div className="label">
        <span className="label-text text-xl capitalize">{data?.key}</span>
      </div>

      <div className="flex items-center gap-5 w-full">
        <input type="text" defaultValue={data?.value} className="input input-bordered w-full" disabled={!editData} />

        {!editData ? (
          <button
            className="btn"
            onClick={() => {
              setEditData(true);
            }}
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              className="btn"
              onClick={() => {
                toast.info("Coming Soon");
              }}
            >
              Save
            </button>
            <button
              className="btn"
              onClick={() => {
                setEditData(false);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </label>
  );
};

export default UserDataElement;
