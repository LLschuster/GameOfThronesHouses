import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
        }
    }
    componentDidMount(){
        let housesName = [];
        this.GetHousesData().then((data) => {
            console.log(data);
             data.map((house) => {
                housesName.push(house.name);
            })
            console.log(housesName);
            this.setState({ houses: housesName});
        });
    }
    async GetHousesData(){
        let fetchHousesData = await fetch('https://www.anapioficeandfire.com/api/houses');
        let housesDataJson = await fetchHousesData.json();
        return housesDataJson;
    }
    render() {
        let HousesToList = this.state.houses;
        return (
            <div>
                
                {HousesToList && HousesToList.map((houseName,index) => {
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
}

export default  MainPage