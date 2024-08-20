// export async function fetchRecipes (filter){
//     const {query, limit} = filter;

//     const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;


//     const response = await fetch(url)

//     const data = await response.json();

//     return data?.hits;
// }

// export async function fetchRecipe(id){
// const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`

// const response = await fetch(url)

// const data = await response.json();

// return data[0];
// }

export async function fetchRecipes(filter) {
    const { query, limit } = filter;

    // Hard-coded credentials
    const appId = '7eeb9410';
    const apiKey = 'a8b266234d4221cb97aa2eff8b97f351';

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&from=0&to=${limit}&`;

    const response = await fetch(url);
    const data = await response.json();

    return data?.hits;
}
export async function fetchRecipe(id) {
    // Hard-coded credentials
    const appId = '7eeb9410';
    const apiKey = 'a8b266234d4221cb97aa2eff8b97f351';

    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data[0];
}
