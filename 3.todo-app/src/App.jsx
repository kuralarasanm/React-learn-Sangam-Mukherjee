
import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result.todos.length > 0) {
        setTodoList(result.todos);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setErrorMsg("No todos found.");
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some error occurred.");
    } finally {
      setLoading(false); // Ensure loading state is updated in both success and error cases
    }
  }


  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);

    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Failed to fetch todo details.");
    }
  }


  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;


  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo APP Using Material UI</h1>
      {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}
      <div className={classes.todoListWrapper}>
        {todoList.length > 0
          ? todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
              todo={todoItem}
            />
          ))
          : <p>No todos available.</p>}
      </div>
      <TodoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;