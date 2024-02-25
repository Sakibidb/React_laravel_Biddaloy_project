import { Link } from '@inertiajs/react'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
    {/* Top Bar */}
    <div className="top_bar">
      <div className="top_bar_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                <ul className="top_bar_contact_list">
                  <li><div className="question">Have any questions?</div></li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <div>001-1234-88888</div>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    <div>info.deercreative@gmail.com</div>
                  </li>
                </ul>
                <div className="top_bar_login ml-auto">
                  <div className="login_button"><a href="/login_form">Register or Login</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>				
    </div>
    {/* Header Content */}
    <div className="header_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container">
                <a href="#">
                  <div className="logo_text">Unic<span>at</span></div>
                </a>
              </div>
              <nav className="main_nav_contaner ml-auto">
                <ul className="main_nav">
                  <li className="active"><Link href="/">Home</Link></li>
                  <li><Link href="about">About</Link></li>
                  <li><Link href="courses">Courses</Link></li>
                  <li><Link href="blog">Blog</Link></li>
                  {/* <li><Link href="#">Page</Link></li> */}
                  <li><Link href="contact">Contact</Link></li>
                </ul>
                <div className="search_button"><i className="fa fa-search" aria-hidden="true" /></div>
                {/* Hamburger */}
                <div className="shopping_cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></div>
                <div className="hamburger menu_mm">
                  <i className="fa fa-bars menu_mm" aria-hidden="true" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header Search Panel */}
    <div className="header_search_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
              <form action="#" className="header_search_form">
                <input type="search" className="search_input" placeholder="Search" required="required" />
                <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>			
    </div>			
  </header>
  )
}

export default Header