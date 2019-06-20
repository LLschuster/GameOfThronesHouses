import React, { Component } from 'react'

 class DetailPage extends Component {
     constructor(props) {
         super(props);
         this.state = {
             houseInfo: []
         }
     }
    async GetHouseData(houseIndex){
        let fetchHousesData = await fetch(`https://www.anapioficeandfire.com/api/houses/${houseIndex}`);
        let housesDataJson = await fetchHousesData.json();
        return housesDataJson;
    }
    componentDidMount(){
        let houseIndex = this.props.match.params.house;
         this.GetHouseData(houseIndex).then(data=> {
            this.setState({houseInfo: data})
            console.log(data);
        });
        
    }
    render() {
        let houseInfo = this.state.houseInfo;
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
}

export default DetailPage