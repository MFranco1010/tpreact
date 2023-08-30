import React from 'react';

export const Card = (props) => {
    return (
        <div className='card'>
            <img className='img' src={props.imageSrc} alt=""/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <ul className='lista'>
                <li className='li reloj'>{props.time}</li>
                <li className='li sal'>{props.salt}</li>
                <li className='li manteca'>{props.butter}</li>
                <li className='li harina'>{props.flour}</li>
                <li className='li huevos'>{props.egg}</li>
            </ul>
        </div>
    )
}
