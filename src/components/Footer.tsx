import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Bounded from "./Bounded";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-xs">
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navgitation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink className="p-3" field={link}>
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Footer;
