import type { FC } from "react";

type Props = {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  handleClick?: () => void;
};

const Button: FC<Props> = ({ text, designs, disabled, type, handleClick }) => {
  return (
    <button
      className={`custom-btn ${designs}`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
