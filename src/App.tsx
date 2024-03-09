import { Suspense } from "react";
import { TodoList } from "./components/TodoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<>loading...</>}>
        <TodoList />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
