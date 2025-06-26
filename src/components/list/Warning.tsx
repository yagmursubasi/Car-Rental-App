import { type FC, type JSX } from "react";

//Higher Order Component (HOC) = bir jsx elementini veya farklı bir component'i alıp, onu bir başka jsx elementine veya component'e dönüştüren fonksiyonlardır. Prop olaarak alınan jsx elemente children propuyla erişilebilir.

type Props = {
  children: JSX.Element | string;
};

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <p className="home-error-container">{children} </p>
    </div>
  );
};

export default Warning;
