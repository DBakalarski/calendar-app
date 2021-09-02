import "./App.scss";
import Month from "./components/Month";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TaskModal from "./components/TaskModal";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { openModal } from "./data/actions/modal.actions";
import TasksBoard from "./components/TasksBoard";
import { actualDate } from "./helpers/helpers";

const App = () => {
  const dispatch = useDispatch();
  const { modalVisible } = useSelector((state) => state.modal, shallowEqual);
  const { tasks } = useSelector((state) => state.tasks, shallowEqual);

  return (
    <div className="app">
      <h1 className="header"> Calendar App</h1>
      <div className="task-calendar-container">
        {/* ONLY FOR GH PAGES */}
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          <Switch>
            <Route path="/month/:monthUrl/:yearUrl">
              <Month />
            </Route>
            <Route>
              <Redirect to={`/month/${actualDate()}`} />
            </Route>
          </Switch>
        </Router>
        {tasks.length ? <TasksBoard /> : null}
      </div>
      <button className="button add-task" onClick={() => dispatch(openModal())}>
        Add Task
      </button>
      {modalVisible ? <TaskModal /> : null}
    </div>
  );
};

export default App;
