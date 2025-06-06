// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

//styles / css
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>FUNDAMENTOS REACT</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge/>
    </div>
  );
}

export default App;
