import { noRenderAtt } from "./constants";

export  async function FetchData(url, params=null){
    let finalUrl = params ? url+params : url;
    let fetchData = await fetch(finalUrl);
    let dataJson = await fetchData.json();
    return dataJson;
}

export function CheckIfIsUrl(stringToCheck)
{
    return stringToCheck.includes('http');
}

export function ShouldRender(keyToCheck, valueTocheck)
{
    if (valueTocheck=='' || CheckIfIsUrl(valueTocheck))
        return false;
    for (let i=0; i<noRenderAtt.length; i++)
    {
        if (keyToCheck === noRenderAtt[i])
            return false;
    }
    return true;
}