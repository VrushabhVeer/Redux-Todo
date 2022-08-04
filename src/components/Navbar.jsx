import React from 'react';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" >TODO'S</a>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="button" >login</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;