import React, { useState, useEffect } from 'react'

export default function Eversource() {
    const [title] = useState("Eversource")

    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <h1 className="title">{title}</h1>
        </div>
    )
}
