import React from "react";

import { IIconProps } from "./IconTypes";

const Icon: React.FC<IIconProps> = ({ width, height }) => {
    // svg max-height&width=512

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : '512'}
            height={height ? height : '512'}
            enableBackground="new 0 0 512 512"
            viewBox="0 0 682.667 682.667"
        >
        <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 512h512V0H0z" data-original="#000000"></path>
            </clipPath>
        </defs>
            <g
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            clipPath="url(#a)"
            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
            >
            <path
            d="M421.017 274.168V69.956c0-5.849-4.741-10.59-10.59-10.59H17.653c-5.848 0-10.59 4.741-10.59 10.59V113.2M7.063 147.811v175.828c0 5.849 4.742 10.59 10.59 10.59h308.819"
            data-original="#000000"
            ></path>
            <path
            d="M257.637 176.954L406.376 59.366H21.703l148.74 117.588"
            data-original="#000000"
            ></path>
            <path
            d="M326.472 334.23H21.703l187.375-198.129c2.909-2.409 7.015-2.409 9.923 0L364.71 290.172"
            data-original="#000000"
            ></path>
            <path
            d="M480.679 302.237c-16.273-17.28-39.364-28.069-64.975-28.069-49.282 0-89.232 39.951-89.232 89.232 0 49.282 39.95 89.233 89.232 89.233 49.283 0 89.234-39.951 89.234-89.233 0-11.076-2.019-21.682-5.707-31.468"
            data-original="#000000"
            ></path>
            <path
            d="M434.885 364.158c0-16.293-9.998-28.494-21.97-28.494-11.97 0-22.557 12.032-22.557 28.325 0 16.292 11.174 27.148 23.146 27.148 11.971 0 21.381-10.686 21.381-26.979z"
            data-original="#000000"
            ></path>
            <path
            d="M414.55 308.086c-23.811.659-45.521 16.774-51.968 41.287-7.441 28.292 8.833 57.843 36.709 66.716 29.484 9.386 60.84-7.201 69.748-36.717 3.152-11.81 1.312-22.085-2.865-32.588-1.656-4.165-7.118-13.914-19.269-13.914-6.633 0-12.163 6.359-12.126 13.68l.24 44.587M469.04 379.372c3.151-11.811 1.312-22.085-2.865-32.588"
            data-original="#000000"
            ></path>
        </g>
    </svg>
  );
}

export default Icon;
