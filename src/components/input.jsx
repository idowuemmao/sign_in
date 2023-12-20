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
      <label htmlFor="password" className="text-base md:text-lg">
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
            <AiFillEyeInvisible className="eyeButton" />
          ) : (
            <AiFillEye className="eyeButton" />
          )}
        </button>
      )}
      {Icon && <Icon />}
      {error && (
        <p className="text-red-500 absolute right-0 top-0 text-[0.45rem] sm:text-[0.65rem]">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
