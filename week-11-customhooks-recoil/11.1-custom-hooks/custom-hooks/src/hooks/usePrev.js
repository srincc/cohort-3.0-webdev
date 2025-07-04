import React, { useEffect, useRef } from 'react'

export function usePrev(value) {
    const ref = useRef()
    // ref get initialized with undefined
    // Why useRef => useRef keeps its value between renders without causing re-renders.

    useEffect(() => {
        ref.current = value;
    }, [value])


    return ref.current
}

export default usePrev

// it return first, and then effect gets called
// useEffect runs after each render, ensuring the ref updates only after the component has rendered with the new value.