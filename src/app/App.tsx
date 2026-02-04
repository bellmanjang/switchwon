import "@/app/globals.css";
import { AppRouter } from "@/app/AppRouter";
import { AppProviders } from "@/app/AppProvider";

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
