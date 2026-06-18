import "./App.css";
import CompoC from "./components/CompoC";
import { UserProvider } from "./components/UseContext";

function App() {
  return (
    <>
      {/* provded context value */}
      <UserProvider value="avantika">
        <CompoC />
      </UserProvider>
    </>
  );
}

export default App;
