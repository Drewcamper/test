import './App.css';
/*import Incrementor from './assets/incrementor';
import Counter from './counter';
import Clock from './clock'
import CountDown from './countDown';*/
import { ThemeProvider } from './theme/context/context';




function App() {

  return (
    
     /* <Incrementor />
    <br />
      <Counter />
    <br />
      <Clock />
    <br />
      <CountDown />*/
    
    <ThemeProvider className={className} setClassName={setClassName}>
      <Theme />
    </ThemeProvider>
   
  
  )
}
export default App; 