import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
  label,
  error,
  onChange,
  type,
  required,
  value,
  placeholder,
  onFocus,
  onBlur,
  Icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordClick = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="relative grid w-full gap-2">
      <label htmlFor="password" className="text-sm md:text-lg">
        {label}
      </label>
      <input
        required={required}
        onChange={onChange}
        type={showPassword ? "text" : type}
        className="loginInput"
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />

      {type === "password" && (
        <button type="button" onClick={onPasswordClick}>
          {showPassword ? (
            <AiFillEye className="eyeButton" />
          ) : (
            <AiFillEyeInvisible className="eyeButton" />
          )}
        </button>
      )}
      {Icon && <Icon />}
      {error && (
        <p className="text-red-500 absolute right-0 -bottom-2 text-[0.4rem] sm:text-[0.5rem]">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
