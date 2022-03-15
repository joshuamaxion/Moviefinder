import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [comment , setcomment] = useState([])
function handleclick(){
  fetch("/Commentlist",{
    method:'GET',
    headers:{
      'Content-Type' : 'application/json',
    }
  }

) .then((response) => response.json()).then((data) => {
  console.log(data)
  setcomment(data);

});
console.log("you pressed me");

}
//function handlechange(thing,rating){
//  rating :{[rating]= this.thing }
//}

function handledelete(){

}
return(
  
    
<div className = "App">

  <table>
    
     {comment && comment.map((comment) =>
     <tr>
       <tb><b>movie ID:{comment.id}</b></tb>&nbsp;
       <tb><input type = "text" defaultValue = {comment.rating}size="1"></input></tb>&nbsp;
       <tb><input type = "text" defaultValue = {comment.comment}size="1"></input></tb>&nbsp;
       <button onclick ={ () => true} ></button>
     </tr>
)}
  </table>
<button onClick={handleclick}>commentlist</button>


  </div>
);

}
export default App;