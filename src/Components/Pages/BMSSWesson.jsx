import React, { useState, useEffect } from 'react'

export default function Wesson() {
    const [title] = useState("BMSS Wesson Wealth Solutions")

    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <h1 className="title">{title}</h1>
        </div>
    )
}
