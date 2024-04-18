import "./App.css";
import Comments from "./components/CommentsList";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message message="sup man" />
      <Comments />
    </div>
  );
}

export default App;
