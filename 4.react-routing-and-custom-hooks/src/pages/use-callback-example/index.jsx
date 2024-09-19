import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallbackExample() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoriseSetCountOneFunc = useCallback(
        () => setCountOne(countOne + 1),
        [countOne]
    );
    const memoriseSetCountTwoFunc = useCallback(
        () => setCountTwo(countTwo + 1),
        [countTwo]
    );

    // use callback function
    const [count, setCount] = useState(0);

    // Memoized callback function
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Empty dependency array means this function will not change

    return (
        <div>
            <h1>Use callback</h1>
            <Counter countValue={countOne} onClick={memoriseSetCountOneFunc} />
            <Counter countValue={countTwo} onClick={memoriseSetCountTwoFunc} />


            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default UseCallbackExample;