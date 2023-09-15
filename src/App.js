import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar'
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className='App' style={{overflowY: 'scroll'}}>
      <NavigationBar/>
      <MainPage/>
    </div>
  );
}

export default App;
