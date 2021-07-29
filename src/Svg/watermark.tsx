import * as React from "react";

function WaterMark1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#F06"
        d="M156.8 66.8c12 21.2 13.7 48 2.5 65.3-11.2 17.4-35.3 25.2-54.2 22.3-19-3-32.9-16.6-41-32.2-8.2-15.5-10.5-32.9-3.5-51.2 6.9-18.2 23.2-37.3 42.5-39.1 19.3-1.8 41.7 13.7 53.7 34.9z"
      />
    </svg>
  );
}

module.exports = {
  WaterMark1,
};
