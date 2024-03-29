import React from "react";

import { IIconProps } from "./IconTypes";

const Icon: React.FC<IIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '512'}
      height={height ? height : '512'}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 48 48"
    >
      <path
        d="M41.211 37.288a4.112 4.112 0 114.109-4.112 4.114 4.114 0 01-4.109 4.112zm0-6.724a2.612 2.612 0 102.609 2.612 2.613 2.613 0 00-2.609-2.612zm-21.669 6.724a4.112 4.112 0 114.108-4.112 4.115 4.115 0 01-4.108 4.112zm0-6.724a2.612 2.612 0 102.608 2.612 2.614 2.614 0 00-2.608-2.612z"
        data-original="#000000"
      ></path>
      <path
        d="M46.621 33.926H44.57a.75.75 0 010-1.5h1.839v-3.977a3.16 3.16 0 00-.4-1.536l-4.06-7.279a.4.4 0 00-.349-.205h-5.533v13h1.786a.75.75 0 010 1.5h-2.536a.75.75 0 01-.75-.75v-14.5a.75.75 0 01.75-.75H41.6a1.9 1.9 0 011.66.974l4.059 7.28a4.662 4.662 0 01.589 2.266v4.19a1.289 1.289 0 01-1.287 1.287zm-30.438 0H8.992a.75.75 0 01-.75-.75v-5.768a.75.75 0 011.5 0v5.018h6.441a.75.75 0 010 1.5zm-7.191-9.179a.75.75 0 01-.75-.75v-5.036a.75.75 0 011.5 0V24a.75.75 0 01-.75.747z"
        data-original="#000000"
      ></path>
      <path
        d="M35.317 33.926H22.9a.75.75 0 010-1.5h11.667V12.805H9.742v3.089a.75.75 0 01-1.5 0v-3.227a1.364 1.364 0 011.363-1.362h25.1a1.364 1.364 0 011.362 1.362v20.509a.75.75 0 01-.75.75zm-23.36-5.768H2.438a.75.75 0 010-1.5h9.519a.75.75 0 010 1.5z"
        data-original="#000000"
      ></path>
      <path
        d="M19.542 24.747H6.259a.75.75 0 010-1.5h13.283a.75.75 0 010 1.5zm-13.696-3.96H.659a.75.75 0 110-1.5h5.187a.75.75 0 010 1.5zm8.317-4.143H5.007a.75.75 0 110-1.5h9.156a.75.75 0 010 1.5z"
        data-original="#000000"
      ></path>
    </svg>
  );
}

export default Icon;
