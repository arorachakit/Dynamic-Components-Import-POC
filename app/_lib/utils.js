import { setComponents } from "@storyblok/react/rsc"


// Making a components Map

export const componentMap = {
    feature: "Feature",
    grid: "Grid",
    page: "Page",
    teaser: "Teaser",
    "another-page": "AnotherPage",
}


// Basic Function to Find Components from a story as an array of strings
export async function FindComponents(storyContent){
    var arr  = []
    if(storyContent.component){
        arr.push(storyContent.component)
    }
    Object.values(storyContent).map(async v => {
        if(typeof v == 'object'){
        let new_arr = await FindComponents(v)
        arr.push(... new_arr)
        }
    })
    return arr
}

// Make a components map object with strings as key and components as values
export async function setComponentsMap(arr){
    let filteredArray = [...new Set(arr)]

    let componentImport = {}
    for ( let i = 0; i < filteredArray.length; i++){
        const module = await import(`@/components/${componentMap[filteredArray[i]]}`)
        const comp = await module.default 
        componentImport[filteredArray[i]] = await comp 
    }

    // Can set the components here as well but is being done in the page file
    // let t = await setComponents(componentImport)
    return componentImport
}
