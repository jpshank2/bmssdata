import React, {useState, useEffect} from 'react'

export default function AbacusQ(props) {
    let [result, setResult] = useState([])

    useEffect(() => {
        fetch(props.url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let results = data.recordsets[0].map((result, index) => {
                    let style = ""
                    switch (true) {
                        case index % 2 === 0 && result.ClientStatus === "LOST":
                            style = "lost-even";
                            break;
                        case index % 2 === 0 && result.ClientStatus === "ACTIVE":
                            style = "active-even";
                            break;
                        case index % 2 === 1 && result.ClientStatus === "LOST":
                            style = "lost-odd";
                            break;
                        case index % 2 === 1 && result.ClientStatus === "ACTIVE":
                            style = "active-odd";
                            break;
                        default:
                            style = "active-odd";
                    }
                    return (
                        <tr className={style} key={result.ContIndex}>
                            <td className="client">{result.ClientName}</td>
                            <td className="office">{result.ClientOffice}</td>
                            <td className="partner">{result.Partner}</td>
                        </tr>
                    )
                }
                )
                setResult(results)
            })
            .catch(err => {
                console.log(err)
            })
        }, [props.url]
    )

    return (
            <tbody>
                {result}
            </tbody>
    )
}
