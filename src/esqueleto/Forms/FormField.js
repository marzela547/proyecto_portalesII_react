function FormField({ value, type, id, fname, onChange, caption, error, ...attr }) {
    var myClasses = ["text-xl", "font-semibold"];
    var inputcss = ["w-full", "rounded-lg","border","border-black","m-1"];
    return (
        <section className="flex">
            <label className={myClasses.join(" ")}>{caption}</label>
            <input
                type={type}
                id={id}
                name={fname}
                onChange={onChange}
                value={value}
                {...attr}
                className={inputcss.join(" ")}
            />
            {(error && true) ? (<section>{error}</section>) : null}
        </section>
    );
}
export default FormField;