import { Children } from "react";


function Formu({ children,id }) {
    var myClasses = ["block", "m-5", "space-y-2", "clear-both", "text-center", "p-5", "bg-red-200", "rounded-2xl","w-4/6"];
    return (
        <form className={myClasses.join(" ")} id={id}>
            {children}
        </form>
    );
}

export default Formu;