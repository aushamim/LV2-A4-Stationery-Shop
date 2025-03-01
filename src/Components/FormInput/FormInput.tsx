import { useField } from "formik";
import { InputHTMLAttributes } from "react";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const FormInput: React.FC<IFormInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <label className="form-control w-full">
        {label && (
          <div className="label">
            <span className="label-text -ml-0.5 text-sm font-medium text-gray-900">{label}</span>
          </div>
        )}

        <input {...field} {...props} className="input input-bordered w-full" />

        {meta.touched && meta.error && (
          <div className="label">
            <span className="label-text-alt text-red-500 -ml-0.5">{meta.error}</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default FormInput;
