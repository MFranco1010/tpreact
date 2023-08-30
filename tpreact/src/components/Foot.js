import React from 'react'

export const Foot = () => {
    return (
        <div className='footer'>
            <ul className='ftext'>
                <li>Franco David Machado</li>
                <li>Trabajo Practico React</li>
            </ul>
            <ul className='ficons lista'>
                <li title="Github" className='li git'><a className='ftext' href="https://github.com/MFranco1010/tpreact">Github</a></li>
                <li title="Vercel" className='li ver'><a className='ftext' href="https://tpreact-franco.vercel.app/">Vercel</a></li>
            </ul>
        </div>
    )
}
