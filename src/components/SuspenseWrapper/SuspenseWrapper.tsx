import React from "react";


const SuspenseWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                {children}
            </React.Suspense>
        </>
    );
}

export default SuspenseWrapper;