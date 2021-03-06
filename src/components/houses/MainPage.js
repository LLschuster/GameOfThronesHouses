import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {allHousesUrl} from '../../utils/constants'
import {FetchData} from '../../utils/functions'

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
        try {
        return FetchData(allHousesUrl);
        } catch(err){
            alert(err);
        }
    }
    
        return (
            <div>
                <h5 className='teal-text'>Houses of the 7 kingdoms</h5>
                {houses && houses.map((houseName,index) => {
                    return (
                        <div className='row' key={index}>
                            <div className='col s12 m6'>
                            <Link style={{textDecoration:'none'}} to={`/house/${index+1}`} >
                                <div className='card white teal-text' >
                                   <span className='card-title' >{houseName}</span>
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