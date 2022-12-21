import React from 'react';
import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import * as Apartments from '@/data/Apartments.json';
import pic from '@/assets/banner.jpg';
import './home.css';

const allAparts = Apartments.default

export default function Home() {
    return (
        <div className='body'>
            <Banner 
                pic = {pic}
                title = "Chez vous, partout et ailleurs"
            />
            <div className='collection'>
                {allAparts.map(({ title, id, cover}) => (
                    <Card 
                        key={title + id}
                        title={title}
                        id={id}
                        cover={cover}
                    />
                ))}
            </div>
        </div>
    );
};