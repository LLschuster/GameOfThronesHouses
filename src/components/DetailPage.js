import React, { useState, useEffect} from 'react'
import {allHousesUrl} from '../utils/constants'
import {FetchData, CheckIfIsUrl} from '../utils/functions'
import ExtraInfo from './ExtraInfo';

 const DetailPage = (props) =>{

    const [houseInfo, setHouseInfo] = useState([]);
    const [extraInfo, setExtraInfo] = useState([]);
    
    async function GetHouseData(url, houseIndex){
     let house = await FetchData(url, houseIndex);
     return house
    }

   async function handleExtraData(url){
         await FetchData(url).then(data=>{
            setExtraInfo(data.name)
        });
    }
    useEffect(()=>{
        let houseIndex = props.match.params.house;
         GetHouseData(allHousesUrl,houseIndex).then(data=> {
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
                    if (CheckIfIsUrl(value))
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