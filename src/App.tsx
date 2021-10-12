import './App.css';
import { Buttons } from './components/Buttons';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User1 } from './components/context/User1';
import { UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { DomRef } from './components/ref/DomRef';
import { MutableRefs } from './components/ref/MutableRefs';
import { Couter } from './components/state/Couter';
import { Login } from './components/state/Login';
import { User } from './components/state/User';
import Status from './components/Status';

function App() {
const personName = {
  first:'rabin',
  last:'phaiju'
}
const nameList = [
  {
    id:1,
    first:"Bruce",
    last:'Wayne'
  },{
    id:2,
    first:"Clark",
    last:'Kent'
  },{
    id:3,
    first:"Princess",
    last:'Diana'
  },
]

  return (
    <div className="App">
    <Greet name='Rabin' isLoggnedIn={true}/>
    <Person name={personName}/>
    <PersonList names = {nameList}/>
    <Status status='success'/>
    <Heading>PlaceHolder Text</Heading>
    <Oscar>
      <Heading> Oscar goes to Leonardo Dicpario!</Heading>
    </Oscar>
    <Buttons handleClick={(event,id)=>{console.log('Button clicked',event,id)}} />
    <Input value='' placeholder='Enter name' handleChange={(e)=> console.log(e.target.value)} />
    <Login />
    <User name='rabin' email='rabin@gmail.com'/>
    <Couter/>
    <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider>

    <UserContextProvider>
      <User1/>
    </UserContextProvider>

    <DomRef/>
    <MutableRefs/>


    </div>
  );
}

export default App;
