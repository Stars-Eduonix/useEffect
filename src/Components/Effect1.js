import React,{useState,useEffect} from "react";

const Effect1 = () => {
    let [gold,setGold] = useState(0)
    let [silver,setSilver] = useState(0)
    let [bronze,setBronze] = useState(0)

     useEffect(()=>{
        // document.title = `Coins Prices`
        document.title = `Gold: ${gold} Silver: ${silver} Bronze: ${bronze}`
        console.log("I am rendered")
     }, [gold, silver])


    

    return(
        <div>
            <h1>Gold: {gold}</h1>
            <h1>Silver: {silver}</h1>
            <h1>Bronze: {bronze}</h1>

            <button onClick={() => setGold(gold + 1)}>Gold</button>
            <button onClick={() => setSilver(silver + 1)}>Silver</button>
            <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
           
        </div>
    )
}

export default Effect1;