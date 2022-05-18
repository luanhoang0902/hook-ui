import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UseState from './Component/useState';
import UseEffect from './Component/useEffect';
import UseRef from './Component/useRef';
import UseMemo from './Component/useMemo';
import UseCallBack from './Component/useCallBack';
import UseReducer from './Component/useReducer';
import UseContext from './Component/useContext';
import ExampleUseState from './Component/useState/Example/Example1';
import RandomName from './Component/useState/Example/RandomName';
import TowWay from './Component/useState/Example/TowWay';
import Todolist from './Component/useState/Example/Todolist';
import UpdateDOM from './Component/useEffect/Exemple/UpdateDOM';
import CallApi from './Component/useEffect/Exemple/CallApi';
import DomEvent from './Component/useEffect/Exemple/DomEvent';
import Timer from './Component/useEffect/Exemple/Timer';
import PreviewAvatar from './Component/useEffect/Exemple/PreviewAvatar';
import ExampleRef from './Component/useRef/Example/ExampleRef';
import ExampleCallback from './Component/useCallBack/Example/ExampleCallback';
import ExampleMemo from './Component/useMemo/Example/ExampleMemo';
import ExampleReducer from './Component/useReducer/Example/ExampleReducer';
import TodoApp from './Component/useReducer/Example/TodoApp';
import ExampleContext from './Component/useContext/Example/ExampleContext';
import GlobalState from './Component/globalState/GlobalState/GlobalState';
import UseImperativeHandle from './Component/uselmperativeHandle hook';
import ExampleUseImperativeHandle from './Component/uselmperativeHandle hook/Example/ExampleUseImperativeHandle';

function App() {
  return (
    <div className="home">
      <div className="menu">
      <h2>Hook</h2>
      <ol>
        <li><Link to='/State'>useState</Link></li>
        <li><Link to='/Effect'>useEffect</Link></li>
        <li><Link to='/Ref'>useRef</Link></li>
        <li><Link to='/Callback'>useCallback</Link></li>
        <li><Link to='/Memo'>useMemo</Link></li>
        <li><Link to='/Reducer'>useReducer</Link></li>
        <li><Link to='/Context'>useContext</Link></li>
        <li><Link to='/GlobalState'>useGlobalState</Link></li>
        <li><Link to='/UseImperativeHandle'>uselmperativeHandle</Link></li>
      </ol>
      </div>
      <div className = "content">
      <Routes>
        <Route path='/State' element={<UseState/>} exact></Route>
        <Route path='/Effect' element={<UseEffect/>} exact></Route>
        <Route path='/Ref' element={<UseRef/>} exact></Route>
        <Route path='/Memo' element={<UseMemo/>} exact></Route>
        <Route path='/Callback' element={<UseCallBack/>} exact></Route>
        <Route path='/Reducer' element={<UseReducer/>} exact></Route>
        <Route path='/Context' element={<UseContext/>} exact></Route>
        <Route path='/GlobalState' element={<GlobalState/>} exact></Route>
        <Route path='/ExampleUseState' element={<ExampleUseState/>} exact></Route>
        <Route path='/RandomName' element={<RandomName/>} exact></Route>
        <Route path='/TowWay' element={<TowWay/>} exact></Route>
        <Route path='/UpdateDOM' element={<UpdateDOM/>} exact></Route>
        <Route path='/CallApi' element={<CallApi/>} exact></Route>
        <Route path='/DomEvent' element={<DomEvent/>} exact></Route>
        <Route path='/Timer' element={<Timer/>} exact></Route>
        <Route path='/PreviewAvatar' element={<PreviewAvatar/>} exact></Route>
        <Route path='/ExampleRef' element={<ExampleRef/>} exact></Route>
        <Route path='/ExampleCallback' element={<ExampleCallback/>} exact></Route>
        <Route path='/ExampleMemo' element={<ExampleMemo/>} exact></Route>
        <Route path='/ExampleReducer' element={<ExampleReducer/>} exact></Route>
        <Route path='/TodoApp' element={<TodoApp/>} exact></Route>
        <Route path='/ExampleContext' element={<ExampleContext/>} exact></Route>
        <Route path='/GlobalState' element={<GlobalState/>} exact></Route>
        <Route path='/UseImperativeHandle' element={<UseImperativeHandle/>} exact></Route>
        <Route path='/ExampleUseImperativeHandle' element={<ExampleUseImperativeHandle/>} exact></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
