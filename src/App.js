import logo from './logo.svg';
import './App.css';

import {useSelector}from "react-redux";
import WatchList from './features/watches/WatchList';
import AddWatch from './features/watches/AddWatch';

function App() {
  let selected=useSelector(state=>state.selectedWatch)
  let selectedForEdit=useSelector(state=>state.selectedWatchForEdit)
  return (<>

<WatchList/>
<AddWatch/>
  </>);
}

export default App;