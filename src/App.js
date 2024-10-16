import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationContextProvider } from "./infrastructure/ui/react/context";
import { EventsPage } from "./infrastructure/ui/react/pages/events-page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <ApplicationContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <EventsPage />
          </header>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ApplicationContextProvider>
  );
}

export default App;
