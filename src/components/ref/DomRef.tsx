import { useEffect, useRef } from "react";


const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!) //Reference isn never null

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}