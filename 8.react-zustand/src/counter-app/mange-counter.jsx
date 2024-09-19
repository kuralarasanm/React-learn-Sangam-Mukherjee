import { useActions } from "../store/use-counter";

function ManageCounter() {
    const { handleIncrementCount, handleDecrementCount } = useActions();

    return (
        <div>
            <button
            style={{
                marginBottom: "20px",
                background: "black",
                color: "white",
                fontSize: "18px",
                fontWeight: "bolder",
            }}
            onClick={handleIncrementCount}
        >
            Handle Counter Value +
        </button>
        <button
            style={{
                marginBottom: "20px",
                background: "black",
                color: "white",
                fontSize: "18px",
                fontWeight: "bolder",
                marginLeft: "20px",
            }}
            onClick={handleDecrementCount}
        >
            Handle Counter Value -
        </button>
        </div>
    );
}

export default ManageCounter;