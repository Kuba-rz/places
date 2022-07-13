import React from 'react'

import './PlaceList.css'

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {

    if (props.places.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>This user has not added any places...</h2>
                </Card>
            </div>)
    }
    return (
        <ul className='place-list'>
            {props.places.map((place) => <PlaceItem
                key={place.id}
                id={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                address={place.address}
                creator={place.creator}
                coordinates={place.coordinates} />)}
        </ul>
    )
}

export default PlaceList