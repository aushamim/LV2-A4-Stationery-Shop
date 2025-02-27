import { useField } from "formik";
import { InputHTMLAttributes } from "react";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormInput: React.FC<IFormInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        {...field}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
      {meta.touched && meta.error && (
        <div className="label">
          <span className="label-text-alt -ml-0.5 text-red-500">{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;
