import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import ThemeDropdown from "./components/Theme/ThemeDropdown";

const App = () => {
  const element = useRoutes(routes);

  return (
    <>
     <div>
      <div className="absolute top-4 right-4">
        <ThemeDropdown />
      </div>
      {element}
    </div>
    </>
  );
};

export default App;
