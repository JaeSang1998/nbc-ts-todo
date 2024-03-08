import { store } from "./store";
import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
