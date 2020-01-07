import React, { useState, useEffect } from 'react'

export default function Abacus() {
    const [title] = useState("Abacus Technologies")

    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <h1 className="title">{title}</h1>
        </div>
    )
}
