import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TrashBin from "./pages/TrashBin";
import Workspace from "./pages/Workspace";

const App = () => {
  

  return (
    <Router>
      <Switch>
        <Route path="/trashbin">
          <TrashBin />
        </Route>
        <Route path="/">
          <Workspace />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
