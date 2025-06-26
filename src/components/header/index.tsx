import { type FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center px-6 py-4 ">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-blue-400">Auto</span>Way
          </h1>
        </Link>

        <Button text="Kaydol" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
