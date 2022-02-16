import './App.css';
import { Button } from './components/Button';
import Input from './components/Input';



function App() {


  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}/>
      
      <Input value='' handleChange={(event) => console.log(event) } />
    </div>
  );
}

export default App;




// import './App.css';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';

// function App() {

//   const personName = {
//     first: "Okechukwu",
//     lastname: "Obi"
//   }

//   const nameList = [
//     {
//       first: 'Bruce',
//       last: 'Wayne'
//     },
//     {
//       first: 'Jack',
//       last: 'Ket'
//     },
//     {
//       first: 'Jenny',
//       last: 'Beauty'
//     }
//   ]

//   return (
//     <div className="App">
//       <Greet name='Okechukwu' isLoggedIn={true} />
//       <Person name={personName} />
//       <PersonList names={nameList} />
//       <Status status="loading"/>
//       <Oscar>
//          <Heading>Placeholder text</Heading>
//       </Oscar>
//     </div>
//   );
// }

// export default App;
