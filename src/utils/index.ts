type StringKeyObject = {
    [key:string]: any
}
export const isFalsy=(value:any):boolean => value === 0 ? false : !value
export const cleanObject=(object: StringKeyObject):StringKeyObject => {
    const bake = {...object}
    Object.keys(bake).forEach((key) => {
        const value = bake[key]
        if (isFalsy(value)) {
            delete bake[key]
        }
    })
    return bake
}