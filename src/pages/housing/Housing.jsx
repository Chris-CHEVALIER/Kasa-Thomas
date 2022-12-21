import React from 'react'
import Slideshow from '@/components/slideshow/Slideshow'
import Rating from '@/components/rating/Rating'
import Collapse from '@/components/collapse/Collapse'
import * as Apartments from '@/data/Apartments.json'
import { useParams, Navigate } from 'react-router-dom'
import './housing.css'

export default function Housing () {
  const params = useParams()
  const id = params.id
  const selectedApartment = Apartments.default.find(
    apartment => apartment.id === id
  )
  if (selectedApartment === undefined /*|| 'id différent' */) {
    return <Navigate to='/404' />
  }
  const selectedApartmentRating = selectedApartment.rating

  return (
    <div className='body-housing'>
      <Slideshow />
      <div className='housing-container'>
        <div className='housing-header'>
          <div className='housing-location'>
            <h1>{selectedApartment?.title}</h1>
            <h2>{selectedApartment?.location}</h2>
            <div className='housing-location-tags'>
              {selectedApartment?.tags.map((tag, index) => {
                return (
                  <div
                    className='housing-location-tags-tag'
                    key={id + tag + index}
                  >
                    {tag}
                  </div>
                )
              })}
            </div>
          </div>

          <div className='housing-infos'>
            <div className='housing-infos-host'>
              <p>{selectedApartment?.host.name}</p>
              <img
                className='housing-infos-host-img'
                src={selectedApartment?.host.picture}
                alt='Hôte du logement'
              />
            </div>
            <div className='housing-infos-rating'>
              <Rating ratingArray={selectedApartmentRating} maxRate={'5'} />
            </div>
          </div>
        </div>

        <div className='housing-collapses'>
          <div className='housing-collapse-description'>
            <Collapse
              title={'Description'}
              id={selectedApartment?.id}
              content={selectedApartment?.description}
            />
          </div>
          <div className='housing-collapse-fittings'>
            <Collapse
              title={'Équipements'}
              id={selectedApartment?.id}
              equipments={selectedApartment?.equipments}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
