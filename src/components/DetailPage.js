import React, { useState, useEffect} from 'react'
import {fetchUrl} from '../utils/constants'
import {FetchData} from '../utils/functions'

 const DetailPage = (props) =>{
    const [houseInfo, setHouseInfo] = useState([]);
    
    async function GetHouseData(url, houseIndex=null){
     let house = await FetchData(url, houseIndex);
     return house
    }

    function handleExtraData(url){
        console.log(url);
    }
    useEffect(()=>{
        let houseIndex = props.match.params.house;
         GetHouseData(fetchUrl,houseIndex).then(data=> {
            setHouseInfo(data);
            console.log(data);
        });
        
    },[])
        return (
            <div>
            {
                houseInfo && Object.entries(houseInfo).map(([key, value]) => {
                    if (key==='name')
                        return (<h2>Details of {value}</h2>)
                    if (key==='url' || value=='')
                        return;
                    if (key==='overlord')
                        return (<button onClick={()=>handleExtraData(value)}>show {key}</button>)
                    return (
                        <h4 className='infoItem'>{key} : {value}</h4>
                    )
                })
            }
            </div>
        )
    }


export default DetailPage