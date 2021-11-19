import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import "./Header.css"
import { Link , useHistory} from 'react-router-dom'

function Header( { backButton } ) {
    const history = useHistory();
    return (
        <div className="header">
            <IconButton onClick={() => history.replace(backButton)}>
            {
                backButton ?(
                <ArrowBackIos 
                    className='header__icon back'
                    fontSize="large"
                />
                ):(
                <PersonIcon 
                    className='header__icon'
                    fontSize="large"
                    />
            )          
        }
        </IconButton>
        
        <Link to='/'>
            <img 
                className="header__logo"
                src="https://thecoco.net/wp-content/uploads/2018/08/tinder-logo.png" 
                alt="tinder logo"/>
        </Link>

            <IconButton>
                <Link to='/chat'>
                    <ForumIcon
                        className='header__icon'
                        fontSize='large'
                        />
                </Link>     
            </IconButton>              
        </div>
    )
}

export default Header
