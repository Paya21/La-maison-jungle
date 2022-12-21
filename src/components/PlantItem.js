import CareScale from "./CareScale";
import "../styles/PlantItem.css"


function PlantItem ({name, cover, light, water, price}){

    function handleClick(plantName){
        console.log(`vous voulez vous frotter à ${plantName} ?`)
    }
    
        
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className="lmj-plant-item-price">{price}$</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale scaleValue={light} careType='light'/>
                <CareScale scaleValue={water} careType='water'/>
            </div>
        </li>
    )
}

export default PlantItem