import React, { useEffect, useState } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'
import database from'./Firebase'

function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const susbscribe = database.collection('people').onSnapshot( snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
            // snapshot.docs.map(doc => console.log(doc.data()))
        })
        return () => {
            susbscribe()
        }
    }, [])

    return (
        <div className="tinderCards">
            {
                people.map((person, id) => {                   
                    return(
                    <TinderCard 
                        key={id}
                        className='swipe'
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{backgroundImage:`url(${person.url})`}}
                            className='card'
                            >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>)
                })
            }
        </div>
    )
}

export default TinderCards
