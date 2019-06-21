export  async function FetchData(url, houseIndex=null){
    let finalUrl = houseIndex ? url+houseIndex : url;
    let fetchData = await fetch(finalUrl);
    let dataJson = await fetchData.json();
    return dataJson;
}