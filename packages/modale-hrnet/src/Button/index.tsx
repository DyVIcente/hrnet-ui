import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="hrnet-bg-indigo-500 hrnet-text-white hrnet-rounded-lg hrnet-p-4"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
