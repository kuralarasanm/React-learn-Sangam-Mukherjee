import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {
    const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);
    // my code  or
    const { theme, setTheme } = useContext(GlobalContext);

    return <div>
        <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
        {/* my code or*/}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>;
}

export default ContextButtonComponent;