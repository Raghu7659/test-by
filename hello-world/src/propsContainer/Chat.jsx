
import React from "react";
const Resize =() => {
    const [size, setSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    React.useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
        </div>
    );
};
export default Resize;