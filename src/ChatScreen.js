import React, { useEffect, useState } from 'react'
import database from './Firebase'
import { useParams } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen(props) {
    const { person } = useParams()
    const [people, setPeople] = useState([])
    const [input, setInput] = useState("")
    const user_name = person;

    useEffect(() => {
        
        const data = database.collection('people').doc(user_name)
        data.get()
        .then((doc) => {
            setPeople({
                name : doc.data().name.toUpperCase(),
                image :  doc.data().url
            })
        })
        
    }, [])

    const [messages, setMessages] = useState([
        {
            name: "Kriti Sanon",
            message: "hi 😍"
        },
        {
            name: "Kriti Sanon",
            message: "Nice Profile Pic 💓"
        },
        {
            message: "Thank You  😍"
        },
        {
            name: "Kriti Sanon",
            message: "Lets Go For a coffee ☕"
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        if (input !== ""){
        setMessages(
           [...messages,{message:input}]
        )
        setInput('')}
        else{

        }
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH {people.name} ON 10/3/2021</p>
            {
                messages.map( (message, key) => {
                    return(         
                        message.name?
                            (
                            <div key={key}  className='chatScreen__message'>
                                <Avatar
                                    className='chatScreen__image'
                                    alt={people.name}
                                    src={people.image}
                                />
                                <p key={key}  className='chatScreen_text'>{message.message}</p>
                            </div>
                            )
                            :(
                            <div key={key}  className='chatScreen__message'>
                                <p key={key}  className='chatScreen_User'>{message.message}</p>   
                            </div>
                            )

                    )
                })
            }
            <br/><br/><br/>
            <form className="chatScreen__input" action="">
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen__inputField" 
                type="text" placeholder="Type a message..."/>
                <img
                className="send__logo"
                onClick={handleSend}
                src="https://thecoco.net/wp-content/uploads/2018/08/tinder-logo.png" 
                alt="tinder logo"/>
                <button onClick={handleSend} type='hidden' className="chatScreen__inputButton"/>
            </form>
        </div>
    )
}

export default ChatScreen
