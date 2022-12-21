function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const careRange = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }

    const scaleType = careType === 'light' ? '🌞'  : '💧'

    return (
        <div onClick={() => alert (`Cette plante requiert ${careRange[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'eau"}`)}>
            {range.map((rangeElem) => 
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale