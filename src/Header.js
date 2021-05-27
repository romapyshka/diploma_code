import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";
import logo from './img/horizontal_on_white_by_logaster.png'

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo"
                     src={logo} alt={"logo"}
                />
            </Link>

            <div className="header_search">
                < input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Categories
                    </span>
                    <span className="header_optionLineTwo">
                        & Staff
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Orders
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLineTwo header_basketCount"> {basket?.length} </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header