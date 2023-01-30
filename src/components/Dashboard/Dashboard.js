import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import tutorial from './../../assets/images/grid.png';
import logout from './../../assets/images/logout.png'
import { faHouseChimney, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Dashboard.css';
import CustomLink from './../CustomLink/CustomLink';


const Dashboard = () => {
    return (
        <div >
            <nav class="navbar bg-dashboard navbar-expand-lg pt-3" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand ps-4" href=" ">
                        <img src={logo} alt="" />

                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">

                                <CustomLink to='/dashboard' class="nav-link active rounded text-light" aria-current="page" href=" "><button className='btn text-light'><FontAwesomeIcon icon={faHouseChimney}></FontAwesomeIcon> <span className='ps-1'>Home</span></button></CustomLink>

                            </li>
                            <li class="nav-item">
                                <CustomLink to='/dashboard/notifications' class="nav-link active rounded text-light" aria-current="page" href=" "><button className='btn text-light'><FontAwesomeIcon icon={faBell}></FontAwesomeIcon> <span className='ps-1'>Notifications</span></button></CustomLink>


                            </li>

                            <li class="nav-item">
                                <CustomLink to='/dashboard/tutorials' class="nav-link active rounded text-light" aria-current="page" href=" "><button className='btn text-light'> <img style={{ width: '18px' }} src={tutorial} alt="" /> <span className='ps-1'>Tutorial</span></button></CustomLink>


                            </li>

                            <CustomLink to='/dashboard/profile' class="nav-link active rounded text-light" aria-current="page" href=" "><button className='btn text-light'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className='ps-1'>Profile</span></button></CustomLink>


                            {/* <li class="nav-item">
                                <button className='btn'> <Link to='/dashboard/user' class="nav-link active" aria-current="page" href=" "><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> User</Link></button>
                            </li> */}


                        </ul>


                        <button class="btn pe-4" ><img src={logout} alt="" /> <span className='text-light'>Sign out</span></button>

                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;