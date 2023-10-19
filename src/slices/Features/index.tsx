import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  calendar: <CalenderIcon />,
  bargraph: <BarGraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourGlassIcon />,
};
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, id) => (
          <div
            key={id}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;

function CalenderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="4.99"
        d="M6.67 40c0-12.57 0-18.86 3.9-22.76 3.9-3.9 10.2-3.9 22.76-3.9h13.34c12.57 0 18.85 0 22.76 3.9 3.9 3.9 3.9 10.19 3.9 22.76v6.67c0 12.57 0 18.85-3.9 22.76-3.9 3.9-10.2 3.9-22.76 3.9H33.33c-12.57 0-18.85 0-22.76-3.9-3.9-3.9-3.9-10.2-3.9-22.76V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M23.33 13.33v-5m33.34 5v-5M8.33 30h63.34"
      ></path>
      <path
        fill="#0891B2"
        d="M60 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zm0-13.34a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zM43.33 56.67a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zm0-13.34a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zM26.67 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zm0-13.34a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0z"
      ></path>
    </svg>
  );
}

function BarGraphIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <g stroke="#0891B2" strokeWidth="4.99" clipPath="url(#a)">
        <path strokeLinecap="round" d="M73.33 73.33H6.67"></path>
        <path
          strokeOpacity="0.5"
          d="M70 73.33v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
        ></path>
        <path d="M50 73.33V16.67c0-4.72 0-7.07-1.46-8.54C47.07 6.67 44.7 6.67 40 6.67c-4.71 0-7.07 0-8.54 1.46C30 9.6 30 11.95 30 16.67v56.66"></path>
        <path
          strokeOpacity="0.5"
          d="M30 73.33V31.67a5 5 0 00-5-5H15a5 5 0 00-5 5v41.66"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect width="80" height="80" fill="#fff" rx="16.64"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
        <path strokeOpacity="0.5" d="M26.7 26.7h26.6v26.6H26.7V26.7z"></path>
        <path d="M53.3 53.3h10a10 10 0 11-10 10v-10zm-26.6 0h-10a10 10 0 1010 10v-10zm26.6-26.6h10a10 10 0 10-10-10v10zm-26.6 0h-10a10 10 0 1110-10v10z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function HourGlassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="#0891B2" strokeWidth="4.991" clipPath="url(#clip0_1_1501)">
        <path d="M49.859 30.237L40 40l-9.859-9.763c-9.742-9.647-14.612-14.47-13.249-18.632.117-.358.263-.706.436-1.04C19.335 6.666 26.223 6.666 40 6.666c13.777 0 20.665 0 22.672 3.897.173.335.319.683.436 1.041 1.363 4.162-3.507 8.985-13.249 18.632z"></path>
        <path
          strokeOpacity="0.5"
          d="M30.141 49.763L40 40l9.859 9.763C59.6 59.41 64.47 64.233 63.108 68.395a7.104 7.104 0 01-.435 1.04c-2.008 3.898-8.896 3.898-22.673 3.898-13.777 0-20.665 0-22.672-3.897a7.094 7.094 0 01-.436-1.041c-1.364-4.162 3.507-8.985 13.249-18.632h0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1501">
          <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
