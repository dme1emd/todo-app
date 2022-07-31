import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { DomainProvider } from './context/DomainContext';
import { TasksProvider } from './context/TasksContext';
import { Login } from './pages/Login';
import { PrivateRoute } from './utils/PrivateRoute';
import { NotAuthedOnlyRoute } from './utils/NotAuthedOnlyRoute';
import {Home} from './pages/Home'
function App() {
  return (
    <div className="App">
    <DomainProvider>
      <AuthProvider>
        <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute/>}>
              
                <Route element ={<Home/>} path='/' exact/>
              

            </Route>
            <Route element={<NotAuthedOnlyRoute/>}>
              <Route element={<Login/>} path='/login/'/>
            </Route>
          </Routes>
        </BrowserRouter>
        </TasksProvider>
      </AuthProvider>
    </DomainProvider>
  </div>
  );
}

export default App;
