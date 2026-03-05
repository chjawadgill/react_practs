import { useState } from 'react'




function Multi() {
    let [check, setCheck] = useState('')
    return (
            <select velue={check}
                onChange={(e) => setCheck(e.target.lue)}>
                    
                <option velue='us'> 'USA'</option>
                <option velue='uk'> UK </option>
            </select>
    )
}

export default Multi;