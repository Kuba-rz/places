import React from 'react'

import './PlaceList.css'

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

const PlaceList = () => {

    if (props.places.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>This user hsa not added any places...</h2>
                </Card>
            </div>)
    }
    return (
        <ul className='place-list'>
            {props.places.map((place) => {
                <PlaceItem />
            })}
        </ul>
    )
}

export default PlaceList