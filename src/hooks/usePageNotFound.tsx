import React from "react";
import { useNavigate } from "react-router-dom";

const usePageNotFound = (object: any) => {
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if (!object) {
            navigate("404");
        } 
    }, [object])
}

export default usePageNotFound;