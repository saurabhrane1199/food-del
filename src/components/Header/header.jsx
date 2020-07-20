import React from 'react';
import Logo from '../Logo/logo';
import  CartIcon from '../CartIcon/carticon'


class Header extends React.Component{

    render(){
        return (
            <div className="header_shadow">
				<div className="container">
					<header>
						<Logo />
						<CartIcon />
					</header>
				</div>
			</div>
        )
    }

}



export default Header