import React from "react";

import type { LoadingType } from "types/types";

import { LOADING } from "types/types";

import Preloader from "components/Ui/Preloader/Preloader";


const withPreloader = (Component: React.FC<any> | React.ComponentClass<any>) => {
    
    const PrealoderComponent = (props: any) => {

        if (props.loading === LOADING) {
            return <Preloader />
        }

        return <Component {...props} />;
    }

    return PrealoderComponent;
}

export default withPreloader;