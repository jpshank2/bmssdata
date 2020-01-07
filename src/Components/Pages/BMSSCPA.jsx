import React, { useEffect, useState } from 'react'

export default function BMSSCPA() {
    const [title] = useState("BMSS CPAs & Business Advisors")
    let [result, setResult] = useState([])

    useEffect(() => {
        document.title = title
    })

    useEffect(() => {
        fetch("http://localhost:3001/")
            .then(res => {
                return res.json()
            })
            .then(data => {
                let results = data.recordsets[0].map(result => {
                return (
                        <div>
                            <h2>{result.StaffName}</h2>
                            <h3>{result.StaffEMail}</h3>
                            <h3>{result.StaffStarted}</h3>
                            <h4>Staff Manager? {result.StaffManager ? "Yes" : "No"}</h4>
                        </div>
                    )
                })
                setResult(results)
            })
    })

    return (
        <div>
            <h1 className="title">{title}</h1>
            {result}
        </div>
    )
}
