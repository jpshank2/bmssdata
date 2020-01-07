import React, { useState, useEffect } from 'react'

export default function PBSPay() {
    const [title] = useState("Payroll & Benefit Solutions")

    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <h1 className="title">{title}</h1>
        </div>
    )
}
