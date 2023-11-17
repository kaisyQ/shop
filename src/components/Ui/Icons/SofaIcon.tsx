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
        viewBox="0 0 512 512"
        >
        <path
            d="M476 168h-12v-24a48.051 48.051 0 00-48-48H96a48.051 48.051 0 00-48 48v24H36a28.031 28.031 0 00-28 28v160a28.031 28.031 0 0028 28h4v24a8 8 0 008 8h23a8 8 0 007.7-5.83L86.06 384h339.88l7.36 26.17A8 8 0 00441 416h23a8 8 0 008-8v-24h4a28.031 28.031 0 0028-28V196a28.031 28.031 0 00-28-28zM64 144a32.036 32.036 0 0132-32h320a32.036 32.036 0 0132 32v24h-12a28.031 28.031 0 00-28 28v40.26A47.8 47.8 0 00376 224H136a47.8 47.8 0 00-32 12.26V196a28.031 28.031 0 00-28-28H64zm344 128v16H104v-16a32.036 32.036 0 0132-32h240a32.036 32.036 0 0132 32zM64.94 400H56v-16h13.44zM456 400h-8.94l-4.5-16H456zm32-44a12.01 12.01 0 01-12 12H36a12.01 12.01 0 01-12-12V196a12.01 12.01 0 0112-12h40a12.01 12.01 0 0112 12v100a8 8 0 008 8h320a8 8 0 008-8V196a12.01 12.01 0 0112-12h40a12.01 12.01 0 0112 12z"
            data-original="#000000"
        ></path>
        </svg>
    );
}

export default Icon;