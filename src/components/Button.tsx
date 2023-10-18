import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit mb-8 md:mb-10 bg-cyan-700 hover:bg-cyan-800 transition-colors tracking-wider duration-200 ease-in-out py-3 px-12 rounded-full font-heading text-white font-bold text-base",
        className
      )}
      {...restProps}
    />
  );
};

export default Button;
