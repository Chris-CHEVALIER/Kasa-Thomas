import React from 'react';
import './about.css';
import Collapse from '@/components/collapse/Collapse';
import * as collapseDatas from '@/data/CollapseDatas.json';
import Banner from '@/components/banner/Banner';
import picAbout from '@/assets/bannerAbout.jpg'

const allDatas = collapseDatas.default

export default function About() {
    return (
        <div className='body-about'>
            <Banner 
                pic = {picAbout}
            />
            <div className='body-about-collapses'>
            {allDatas.map(({ title, id, content }) => (
                <Collapse 
                    key={title + id}
                    title={title}
                    id={id}
                    content={content}
                />
            ))}   
            </div>
        </div>
    );
};