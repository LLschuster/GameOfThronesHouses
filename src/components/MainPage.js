import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const MainPage = ()=> {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        let housesName = [];
        GetHousesData().then((data) => {
            console.log(data);
             data.map((house) => {
                housesName.push(house.name);
            })
            console.log(housesName);
            setHouses(housesName);
        });
    },[])

    async function GetHousesData(){
        let fetchHousesData = await fetch('https://www.anapioficeandfire.com/api/houses');
        let housesDataJson = await fetchHousesData.json();
        return housesDataJson;
    }
    
        return (
            <div>
                
                {houses && houses.map((houseName,index) => {
                    return (
                        <div className='row'>
                            <div className='col s12 m6'>
                            <Link style={{textDecoration:'none'}} to={`/house/${index+1}`} >
                                <div className='card grey white-text' key={index}>
                                   <span className='card-title'>{houseName}</span>
                               </div>
                            </Link>
                            </div>
                        </div>
                      
                    )
                })}
            </div>
        )
    }


export default  MainPage