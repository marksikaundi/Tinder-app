import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Chat.css'
import { useHistory } from "react-router-dom"
function Chat( { name, image, message, timestamp, keys  } ) {
    console.log(name.replace(/\W/gi , ''))
    const history = useHistory()
    console.log(keys)


    return (
        <Link to={{pathname:`/chat/${keys}`
                    }} >
        {/* <Link to={`/chat/${name.replace(/\W/gi , '')}`} keys={1}> */}
            <div className='chat'>
                    <Avatar className='chat__image' src={image} />
                    <div className='chat__details'>
                        <h2>
                            {name}
                        </h2>
                        <p>
                            {message}
                        </p>
                    </div>
                    <p className='chat__timestamp'>{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
 