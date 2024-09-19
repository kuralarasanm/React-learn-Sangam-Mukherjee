import AddNewBlog from "./blog-app/add-new-blog";
import BlogDisplay from "./blog-app/blog-details";
import BlogList from "./blog-app/blog-list";
import CounterButton from "./counter-example/counter-button";
import CounterValue from "./counter-example/counter-value";

function App() {
  return (
    <div>
      <h1>React Redux toolkit Blog List App</h1>
      <AddNewBlog />
      <BlogList />
      <hr />
      <BlogDisplay/>
      <hr />
      <CounterButton />
      <CounterValue />
    </div>
  );
}

export default App;