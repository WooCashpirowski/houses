import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateHouseScreen from "./screens/CreateHouse/CreateHouseScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import HousesScreen from "./screens/Houses/HousesScreen";
import SingleHouseView from "./screens/SingleHouse/SingleHouseView";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/houses" component={HousesScreen} />
      <Route path="/houses/:id" component={SingleHouseView} />
      <Route path="/create" component={CreateHouseScreen} />
    </Router>
  );
}

export default App;
