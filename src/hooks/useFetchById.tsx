import React from "react";

import { useParams } from "react-router-dom";

const useFetchById = (callback: (id: string) => void) => {
    
    const { id } = useParams();
    
    React.useEffect(() => {
        if (!id) {
            return;
        }
        callback(id);
    }, [id, callback]);
}

export default useFetchById;