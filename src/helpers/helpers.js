export const clearObj = (obj, arr = []) => {
    const newObj = structuredClone(obj)
    for(let item in obj) {
        if(arr.includes(item)) {
            delete newObj[item]
        }
    }
    return newObj
}