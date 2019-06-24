import React, { useState, useEffect} from 'react'
import {allHousesUrl} from '../../utils/constants'
import {FetchData, CheckIfIsUrl, ShouldRender} from '../../utils/functions'
const ExtraInfo = React.lazy(()=> import('./ExtraInfo'));
const ActionButtons = React.lazy(()=> import('./ActionButtons'));

 const DetailPage = (props) =>{
    
    const [houseInfo, setHouseInfo] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [actionButton, setActionButton] = useState([]);

    
    async function GetHouseData(url, houseIndex){
        try {
     return await FetchData(url, houseIndex)
        } catch(err){
            alert(err);
        }
    }

    //
   async function handleExtraData(url){
       try {
         await FetchData(url).then(data=>{
            setExtraInfo(data.name)
        });
    } catch (err) {
        alert(err);
        }
    }
    //components did mount or update function
    useEffect(()=>{
        let houseIndex = props.match.params.house; 
        let actionButtons  = [];

         GetHouseData(allHousesUrl,houseIndex).then(data=> {
             Object.entries(data).map(([key, value])=>{
                if (key!='url' && CheckIfIsUrl(value))
                        actionButtons.push({key, onclick:()=>handleExtraData(value)});   
             })
            setHouseInfo(data);
            setActionButton(actionButtons);
        });
        
    },[])

        return (
            <React.Suspense fallback={<div>Loading</div>}>
                <ExtraInfo  info={extraInfo}/>
                <div className="row">
                  <div className="col s12 m6">
                     <div className="card details-card light darken-1" >
            {
                houseInfo && Object.entries(houseInfo).map(([key, value]) => {
                    if (key==='name')
                        return (<span className='card-title'key={key}>Details of {value}</span>)
                    if (ShouldRender(key,value))
                        return <p className='infoItem' key={key}>{key}: {value}</p>;
                })
            }
                        <ActionButtons actions={actionButton} />
                    </div>
                </div>
              </div>
              </React.Suspense>
        )
    }


export default DetailPage