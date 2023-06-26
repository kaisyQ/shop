import React from "react"

const useWindowWidth = () => {
    
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const resizeWindowHandler = () => setWidth(window.innerWidth);

        window.addEventListener("resize", resizeWindowHandler);

        return () => {
            window.removeEventListener("resize", resizeWindowHandler);
        }
    }, [width, setWidth]);

    return width;
}

export default useWindowWidth;

