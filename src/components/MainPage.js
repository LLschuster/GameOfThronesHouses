import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {allHousesUrl} from '../utils/constants'
import {FetchData} from '../utils/functions'

const MainPage = ()=> {
    const [houses, setHouses] = useState([]);
    
    useEffect(() => {
        let housesName = [];
        GetHousesData().then((data) => {
             data.map((house) => {
                housesName.push(house.name);
            })
            setHouses(housesName);
        });
    },[])

    async function GetHousesData(){
        let houses = FetchData(allHousesUrl);
        return houses;
    }
    
        return (
            <div>
                <h1>Houses of the seven kingdoms</h1>
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