import React, {useEffect, useState} from "react"; 

// hey generate 20 actors
let actors = ["Sharukhan","Salman","Amir","Ranveer","Ranbir","Akshay","Ajay","Hritik","Tiger","Varun","Shahid","Sushant","Vicky","Ayushman","Kartik","John","Arjun","Saif","Farhan","Sidharth"]


const LiveSearch = () => {
   let [name, setName] = useState("")
   let [filterdActors, setFilterdActors] = useState(actors)

   useEffect(()=>{
       searchActors()
   },[name])

    function searchActors(){
           setFilterdActors(actors.filter((value)=> value.includes(name) == true))
    }

    return(
        <div>
            <input type="text" 
             placeholder="Search Actor"
             value={name}
             onChange={(e)=>setName(e.target.value)}
            />
            {/* <button type="submit"
            onClick={searchActors}
            >Search</button> */}

           <div className="actors">
              {
                filterdActors.map((value)=>(
                    <p>{value}</p>
                ))
              }
            </div>
        </div>
    )
}

export default LiveSearch;
