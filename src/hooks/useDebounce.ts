import { useEffect, useState } from "react"

/**
 * 自定义hook
 * 组件初始化使用
 * @param callback
 */
export const useMount=(callback:()=>void)=> {
    useEffect(()=> {
        callback()
    },[callback])
}
/**
 * 自定义hook,防抖
 * @param value
 * @param delay
 * @returns
 */
export const useDebounce=<T,>(value: T,delay?: number):T=>{
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(()=> {
        const timeout = setTimeout(()=> setDebouncedValue(value),delay)
        return ()=> clearTimeout(timeout)
    },[value,delay])
    return debouncedValue

}