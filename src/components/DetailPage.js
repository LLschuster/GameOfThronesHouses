import React, { useState, useEffect} from 'react'
import {fetchUrl} from '../utils/constants'
import {FetchData} from '../utils/functions'
import { async } from 'q';
import ExtraInfo from './ExtraInfo';

 const DetailPage = (props) =>{
    const [houseInfo, setHouseInfo] = useState([]);
    const [extraInfo, setExtraInfo] = useState([]);
    
    async function GetHouseData(url, houseIndex){
     let house = await FetchData(url, houseIndex);
     return house
    }

   async function handleExtraData(url){
        console.log(url);
        let extra = await FetchData(url).then(data=>{
            console.log(data.name);
            setExtraInfo(data.name)
        });
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
                    if (key==='url' || value=='' || key==='swornMembers')
                        return;
                    if (key==='overlord')
                        return (<button onClick={()=>handleExtraData(value)}>show {key}</button>)
                    if (key==='currentLord')
                        return (<button onClick={()=>handleExtraData(value)}>show {key}</button>)
                    if (key==='heir')
                        return (<button onClick={()=>handleExtraData(value)}>show {key}</button>)
                    return (
                        <h4 className='infoItem'>{key} : {value}</h4>
                    )
                })
            }
            <ExtraInfo info={extraInfo}/>
            </div>
        )
    }


export default DetailPage