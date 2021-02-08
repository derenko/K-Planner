import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { Index } from "../views/Index";
import { Statistic } from "../views/Statistic";
import { BottomNavigation } from "../components/bottom-navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
        </Switch>
        <BottomNavigation />
      </Router>
    </div>
  );
}

export default App;
