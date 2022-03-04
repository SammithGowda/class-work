import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[
    {item1:"Mobile Opertaing System",item2:"android",item3:"blackberry",item4:"iphone",item5:"windows phone"},
    {item1:"Mobile Manufacture",item2:"Samsung",item3:"HTC",item4:"Apple",item5:"Micromax"},
    
    
  ]
  
  return <div>{arr.map((el)=><Function_one tittle={el.item1}android={el.item2} blackberry={el.item3} iphone={el.item4} window={el.item5}/> )}</div>
  // return <div>{Function_two()}</div>
}

function Function_one({tittle,android,blackberry,iphone,window}){
  return(
    <ul>
      <h1>{tittle}</h1>
      <li>{android}</li>
      <li>{blackberry}</li>
      <li>{iphone}</li>
      <li>{window}</li>
    </ul>
  )
}



export default App;
