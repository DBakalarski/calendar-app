
import './App.css';
import Month from './components/Month';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { format } from 'date-fns';
import TaskModal from './components/TaskModal';
import * as React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { openModal } from './data/actions/modal.actions';

const App = () => {
  const dispatch = useDispatch()
  const { modalVisible } = useSelector(state => state.modal, shallowEqual)

  return (
    <div className="app" >
      Calendar App
      <Router>
        <Switch>
          <Route path="/month/:monthUrl/:yearUrl" >
            <Month />
          </Route>
          <Route exact path="/">
            {/* @Todo get actual month */}
            <Redirect to="/month/09/2021" />
          </Route>
        </Switch>
      </Router>
      <button class="button add-task" onClick={() => dispatch(openModal())}>Add Task</button>
      {modalVisible ? <TaskModal /> : null}

    </div>
  );
}

export default App;
