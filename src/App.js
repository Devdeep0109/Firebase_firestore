import './App.css';
import { getFirestore } from "firebase/firestore";
import { query, where ,collection, addDoc , doc, getDoc ,getDocs, updateDoc  } from "firebase/firestore"; 
import { app } from './Firebase';


const firestore = getFirestore(app);


function App() {

  const writeData = async() => {
    const result = await addDoc(collection(firestore , "cities") , {
      name : "Durg",
      pincode:491001,
      weather : "Hot and humid",
    });
    console.log("cities" ,result);
  };

  const writeSubData = async() => {
    await addDoc(collection ( firestore ,'cities/WQwoMmehQuo32LNk9P27/places') ,{
      name :"this is a place",
      desc :"Awesome destination",
    })
  }
  const getdocument = async () => {
    const ref = doc(firestore ,"cities" ,'hip7FQCWWisBp9kVXzhr');
    const snap = await getDoc(ref);
    console.log(snap.data())
    
  }
  const getdocumentByQuery = async () =>{
    const collectionRef = collection(firestore ,"cities");
    const q = query(collectionRef , where("pincode" , '==' , 491001));
    const snapshot = await getDocs(q);
    snapshot.forEach( ( data) => console.log(data.data()))
  }
  const update =async ()=>{

    const docref = doc(firestore ,"cities" ,"miKCYbMZQ4hh6B24o2qH");
    await updateDoc(docref ,{
      name : "Raigarh"
    })
  }

  return (
    <div className="App">
      
      <h1>Firebase Store</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put Sub Data</button>
      <button onClick={getdocument}>Get Data</button>
      <button onClick={getdocumentByQuery}>Get Data</button>
      <button onClick={update}>Update Data</button>
    </div>
  );
}

export default App;
