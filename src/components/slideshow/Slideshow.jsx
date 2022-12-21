import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import * as Apartments from '@/data/Apartments.json';
import leftVector from '@/assets/leftVector.png';
import rightVector from '@/assets/rightVector.png';
import './slideshow.css';

export default function Slideshow() {
    const params = useParams()
    const id = params.id

    const allApartsPics = Apartments.default.find(element => element.id === id).pictures
    const picNumber = allApartsPics.length
    const [onScreenPic, movePic] = useState(0)

    const previousPic = () => {
        movePic(onScreenPic === 0 ? picNumber - 1 : onScreenPic - 1)
    }

    const nextPic = () => {
        movePic(onScreenPic === picNumber - 1 ? 0 : onScreenPic + 1)
    }

    if(picNumber === 1) {
        return (
            <div className='slideshow'>
            {allApartsPics.map((pics, index) => {
                return(
                    <div key={id + pics + index} className={index === onScreenPic ? 'active' : 'inactive'}>
                        {index === onScreenPic && (
                            <img className='slideshow-pic' src={pics} alt="Photos de l'apartement" />
                        )}
                    </div>
                )
            })}    
            </div>
        )
    } else {
        return (
            <div className='slideshow'>
                <img className='leftVector' src={leftVector} alt='logo précédent' onClick={previousPic}/>
                <img className='rightVector' src={rightVector} alt='logo suivant' onClick={nextPic}/>
                <p>{onScreenPic + 1}/{picNumber}</p>

                {allApartsPics.map((pics, index) => {
                    return(
                        <div key={id + pics + index} className={index === onScreenPic ? 'active' : 'inactive'}>
                        {index === onScreenPic && (
                            <img className='slideshow-pic' src={pics} alt="Photos de l'apartement" />
                        )}
                    </div>
                    )
                })}
            </div>
        )
    }
}