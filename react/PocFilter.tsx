import React, { useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'

const PocFilter: StorefrontFunctionComponent<any> = () => {
    const { navigate } = useRuntime()

    const [pneus, setPneus] = useState('')

    const filters = ['pneu1', 'pneu2', 'pneu3']

    const handlePneu = (e: any) => {
        setPneus(e.target.value)
        return pneus
    }

    const setURL: any = (event: any) => {
        event.preventDefault()
        navigate({
            to: `/${pneus}`,
        })
    }

    return (
        <>
            <form action="" onSubmit={e => setURL(e)}>
                <select id="firstSel" name="" onBlur={e => handlePneu(e)}>
                    {filters.map((data, index) => {
                        return <option value={data} key={index}>{data}</option>
                    })}
                </select>
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default PocFilter
