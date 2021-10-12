import './App.css';
import { APrivate } from './components/auth/APrivate';
import AProfile from './components/auth/AProfile';
import { Buttons } from './components/Buttons';
import Counter1 from './components/class/Counter1';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User1 } from './components/context/User1';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import Greet from './components/Greet';
import { Heading } from './components/Heading';
import CustomCompoments from './components/html/CustomCompoments';
import { HButtom } from './components/html/HButtom';
import { HInput } from './components/html/HInput';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { PText } from './components/polymorphic/PText';
import { DomRef } from './components/ref/DomRef';
import { MutableRefs } from './components/ref/MutableRefs';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Couter } from './components/state/Couter';
import { Login } from './components/state/Login';
import { User } from './components/state/User';
import Status from './components/Status';
import { Toast } from './components/templateliterals/Toast';

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

    <Counter1 message='This is a class counter'/>

    <APrivate isLoggedIn={true} component={AProfile}/>

    <List  items={['Batman','Superman','Worder Women']} onClick={item=>console.log(item)} />
    <List  items={[1,2,3]} onClick={item=>console.log(item)} />
    {/* <List  items={[{first:'Bruce',last:'Wayne'},{first:'Clark',last:'Kent'}]} onClick={item=>console.log(item)} /> */}

    <RandomNumber value={12} isPositive />

    <Toast position='center' />

    <HButtom variant='primary' onClick={()=>console.log('clicked')}>Custom Button</HButtom>
    <HInput />

    <CustomCompoments name='rabin' isLoggnedIn/>

    <i>Polymorphic Components</i>
    <PText as='h1' size='lg' >Heading</PText>
    <PText as='p' size='md' >Paragraph</PText>
    <PText as='label' htmlFor='some_id' size='sm' color='secondary' >Label</PText>

    </div>
  );
}

export default App;
