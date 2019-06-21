import React, { useState, useEffect} from 'react'
import {allHousesUrl} from '../utils/constants'
import {FetchData, CheckIfIsUrl} from '../utils/functions'
import ExtraInfo from './ExtraInfo';
import ActionButtons from './ActionButtons';

 const DetailPage = (props) =>{

    const [houseInfo, setHouseInfo] = useState([]);
    const [extraInfo, setExtraInfo] = useState([]);
    const [actionButton, setActionButton] = useState([]);
    
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
        let actionButtons = [];
         GetHouseData(allHousesUrl,houseIndex).then(data=> {
             Object.entries(data).map(([key, value])=>{
                if (key!='url' && CheckIfIsUrl(value)){
                        actionButtons.push({key, onclick:()=>handleExtraData(value)});  
                }
             })
            setHouseInfo(data);
            setActionButton(actionButtons);
        });
        
    },[])

        return (
            <div>
                <div className="row">
                  <div className="col s12 m6">
                     <div className="card details-card light darken-1">
            {
                houseInfo && Object.entries(houseInfo).map(([key, value]) => {
                    if (key==='name')
                        return (<span className='card-title'>Details of {value}</span>)
                    if (key==='url' || value=='' || key==='swornMembers' || CheckIfIsUrl(value) )
                        return;
                    return (
                        <p className='infoItem'>{key} : {value}</p>
                    )
                })
            }
                        <ActionButtons actions={actionButton} />
                    </div>
                </div>
            </div>
            <ExtraInfo info={extraInfo}/>
            </div>
        )
    }


export default DetailPage