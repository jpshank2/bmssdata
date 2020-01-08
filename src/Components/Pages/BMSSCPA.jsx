import React, { useEffect, useState } from 'react'
import BmssQ from '../Queries/BmssQ'

export default function BMSSCPA() {
    const [title] = useState("BMSS CPAs & Business Advisors")
    let [url, setUrl] = useState("http://localhost:3001/")
    let [clientName, setName] = useState("")
    let [clientOffice, setOffice] = useState("*")
    let [partner, setPartner] = useState("")
    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <h1 className="title">{title}</h1>
            <table>
                <thead className="fixed">
                    <tr>
                        <th className="client">Client Name
                        <input value={clientName} style={{ marginLeft: 5 }} type="text" onChange={e => {
                                let cName = e.target.value
                                setName(cName)
                            }} />
                        </th>
                        <th className="office">Client Office
                        <select onChange={(e) => {
                                let office = e.target.value
                                setOffice(office)
                            }
                            } style={{ marginLeft: 5 }}>
                                <option value="*">All</option>
                                <option value="BHM">Birmingham</option>
                                <option value="HSV">Huntsville</option>
                                <option value="GAD">Gadsden</option>
                                <option value="AO">Auburn</option>
                            </select>
                        </th>
                        <th className="partner">Partner
                            <input value={partner} style={{ marginLeft: 5, marginRight: 5 }} type="text" onChange={e => {
                                    setPartner(e.target.value)
                                }} />
                                <button onClick={() => {
                                    switch (true) {
                                        case clientOffice !== "*" && clientName.length === 0 && partner.length === 0:
                                            setUrl(`http://localhost:3001/office/${clientOffice}`)
                                            break;
                                        case clientOffice === "*" && clientName.length !== 0 && partner.length === 0:
                                            setUrl(`http://localhost:3001/client/${clientName}`)
                                            break;
                                        case clientOffice === "*" && clientName.length === 0 && partner.length !== 0:
                                            setUrl(`http://localhost:3001/partner/${partner}`)
                                            break;
                                        case clientOffice !== "*" && clientName.length > 0 && partner.length === 0:
                                            setUrl(`http://localhost:3001/office/${clientOffice}&/client/${clientName}`);
                                            break;
                                        case clientOffice !== "*" && clientName.length === 0 && partner.length > 0:
                                            setUrl(`http://localhost:3001/office/${clientOffice}&/partner/${partner}`);
                                            break;
                                        case clientOffice === "*" && clientName.length > 0 && partner.length > 0:
                                            setUrl(`http://localhost:3001/client/${clientName}&/partner/${partner}`);
                                            break;
                                        case clientOffice !== "*" && clientName.length > 0 && partner.length > 0:
                                            setUrl(`http://localhost:3001/client/${clientName}&/partner/${partner}&/office/${clientOffice}`);
                                            break;
                                        default:
                                            setUrl("http://localhost:3001/")
                                            break;
                                    }
                                }
                            }>Go</button>
                        </th>
                    </tr>
                </thead>
                <BmssQ url={url} />
            </table>
        </div>
    )
}
