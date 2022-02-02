

export function is_object_empty(object:object):boolean{

    return !(
        
        (Object.values(object)
        .filter(el=>{
            return el !== null && typeof el !== 'undefined' && el != "";}))
        .length  == Object.keys(object).length)

}

