
import './App.css';
import SingleDay from './components/SingleDay';
import Month from './components/Month';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { monthView, dayView } from './data/actions/view.action';
import { calendarView } from './enums/viewEnum';


// const monthView = false;

const App = () => {
  const dispatch = useDispatch()
  const { view } = useSelector(state => state.view, shallowEqual)

  return (
    <div className="app" >
      Calendar App
      <button onClick={() => dispatch(monthView())}>Month</button>
      <button onClick={() => dispatch(dayView())}>Day</button>
      {view === calendarView.Month ? <Month /> : <SingleDay />}
    </div>
  );
}

export default App;
