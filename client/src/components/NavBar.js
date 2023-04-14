import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {

    return (
<nav className="navbar" role="navigation" aria-label="main navigation" >
    <div className="navbar-brand">
        <a className="navbar-item" href="./">
            <img src="./logo192.png" className="nav-logo"></img>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="space-nav">&nbsp;</div>
    
    <div className="tabs nav-tabs is-centered is-boxed">
        <ul>
            <li>
                <a href="./myevents" onClick={() => handlePageChange('MyEvents')}
                    className={currentPage === 'MyEvents' ? 'nav-link is-current' : 'nav-link'}>
                    <span className="icon is-medium"><img src="./events.png" className="fas" aria-hidden="true"></img></span>
                    <span><strong>My Events</strong></span>
                </a>
            </li>
            <li>
                <a href="./mytasks" onClick={() => handlePageChange('MyTasks')}
                    className={currentPage === 'MyTasks' ? 'nav-link is-current' : 'nav-link'}>
                    <span className="icon is-medium"><img src="./tasks.png" className="fas" aria-hidden="true"></img></span>
                    <span><strong>My Tasks</strong></span>
                </a>
            </li>
            <li>
                <a href="./testing" onClick={() => handlePageChange('TestEnv')}
                    className={currentPage === 'TestEnv' ? 'nav-link is-current' : 'nav-link'}>
                    <span className="icon is-medium"><i className="fas fa-film" aria-hidden="true"></i></span>
                    <span><strong>test environment</strong></span>
                </a>
            </li>
        </ul>
    </div>


    <div id="navbarBasicExample" className="navbar-menu">


        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav >
    );
}

export default NavTabs;