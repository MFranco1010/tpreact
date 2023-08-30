import React from 'react';

export const Card = (props) => {
    return (
        <div className='card'>
            <img className='img' src={props.imageSrc} alt=""/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <ul className='lista'>
                <li title="Tiempo" className='li reloj'>{props.time}</li>
                <li title="Sal" className='li sal'>{props.salt}</li>
                <li title="Manteca" className='li manteca'>{props.butter}</li>
                <li title="Harina" className='li harina'>{props.flour}</li>
                <li title="Huevos" className='li huevos'>{props.egg}</li>
            </ul>
        </div>
    )
}
