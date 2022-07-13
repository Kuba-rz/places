import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const UserPlaces = () => {

  const DUMMY_PLACES = [{
    id: 1,
    image: 'https://media.istockphoto.com/photos/aerial-view-of-the-city-bar-picture-id1132779096?k=20&m=1132779096&s=612x612&w=0&h=C_9iFigKra6NyhTwCNpyjYvk6yhZ6O5c-9a0c9c0H3Q=',
    title: 'Croatia Bar',
    description: 'Very clear water in the sea',
    address: 'Montenegro bar',
    creator: 1,
    coordinates: {
      lat: 42.1021263,
      lng: 19.0706027
    }
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/photos/aerial-view-of-the-city-bar-picture-id1132779096?k=20&m=1132779096&s=612x612&w=0&h=C_9iFigKra6NyhTwCNpyjYvk6yhZ6O5c-9a0c9c0H3Q=',
    title: 'Croatia Bar',
    description: 'Very clear water in the sea',
    address: 'Montenegro bar',
    creator: 2,
    coordinates: {
      lat: 42.1021263,
      lng: 19.0706027
    }
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/photos/aerial-view-of-the-city-bar-picture-id1132779096?k=20&m=1132779096&s=612x612&w=0&h=C_9iFigKra6NyhTwCNpyjYvk6yhZ6O5c-9a0c9c0H3Q=',
    title: 'Croatia Bar',
    description: 'Very clear water in the sea',
    address: 'Montenegro bar',
    creator: 3,
    coordinates: {
      lat: 42.1021263,
      lng: 19.0706027
    }
  }]

  const userId = useParams().userId

  const userPlaces = DUMMY_PLACES.filter((place) => place.creator == userId)

  return <PlaceList places={userPlaces} />
}

export default UserPlaces