import { store } from "./store";
import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
