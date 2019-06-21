import React, { useState, useEffect} from 'react'

 const DetailPage = (props) =>{
    const [houseInfo, setHouseInfo] = useState([]);
    
    async function GetHouseData(houseIndex){
        let fetchHousesData = await fetch(`https://www.anapioficeandfire.com/api/houses/${houseIndex}`);
        let housesDataJson = await fetchHousesData.json();
        return housesDataJson;
    }
    useEffect(()=>{
        let houseIndex = props.match.params.house;
         GetHouseData(houseIndex).then(data=> {
            setHouseInfo(data);
            console.log(data);
        });
        
    },[])
        return (
            <div>
            {
                houseInfo && Object.entries(houseInfo).map(([key, value]) => {
                    if (key==='url' || value=='')
                        return;
                    return (
                        <h4 className='infoItem'>{key} : {value}</h4>
                    )
                })
            }
            </div>
        )
    }


export default DetailPage