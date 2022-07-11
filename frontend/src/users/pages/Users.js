import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 1,
            name: 'Jakub Rzeszutko',
            image: 'https://www.mantruckandbus.com/fileadmin/_processed_/2/b/csm_19-09_startseite_interviewkachel_324_224_3_726a3e77d5.jpg',
            places: 10
        },
        {
            id: 2,
            name: 'Klaudia Klis',
            image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
            places: 7
        },
        {
            id: 3,
            name: 'Oskar Rzeszutko',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kid_boy.jpg/2560px-Kid_boy.jpg',
            places: 4
        },
        {
            id: 4,
            name: 'Wiola Rzeszutko',
            image: 'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
            places: 12
        }
    ]

    return (
        <UsersList users={USERS} />
    )
}

export default Users