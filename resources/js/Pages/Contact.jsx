import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="super_container">
  {/* Header */}
  <Header />
  <div>
  {/* Menu */}
  <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    <div className="menu_close_container"><div className="menu_close"><div /><div /></div></div>
    <div className="search">
      <form action="#" className="header_search_form menu_mm">
        <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
        <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
          <i className="fa fa-search menu_mm" aria-hidden="true" />
        </button>
      </form>
    </div>
    <nav className="menu_nav">
      <ul className="menu_mm">
        <li className="menu_mm"><a href="index.html">Home</a></li>
        <li className="menu_mm"><a href="#">About</a></li>
        <li className="menu_mm"><a href="#">Courses</a></li>
        <li className="menu_mm"><a href="#">Blog</a></li>
        <li className="menu_mm"><a href="#">Page</a></li>
        <li className="menu_mm"><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
  {/* Home */}
  <div className="home">
    <div className="breadcrumbs_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumbs">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>			
  </div>
  {/* Contact */}
  <div className="contact">
    {/* Contact Map */}
    <div className="contact_map">
      {/* Google Map */}
      <div className="map">
        <div id="google_map" className="google_map">
          <div className="map_container">
            <div id="map" />
          </div>
        </div>
      </div>
    </div>
    {/* Contact Info */}
    <div className="contact_info_container">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact_form">
              <div className="contact_info_title">Contact Form</div>
              <form action="#" className="comment_form">
                <div>
                  <div className="form_title">Name</div>
                  <input type="text" className="comment_input" required="required" />
                </div>
                <div>
                  <div className="form_title">Email</div>
                  <input type="text" className="comment_input" required="required" />
                </div>
                <div>
                  <div className="form_title">Message</div>
                  <textarea className="comment_input comment_textarea" required="required" defaultValue={""} />
                </div>
                <div>
                  <button type="submit" className="comment_button trans_200">submit now</button>
                </div>
              </form>
            </div>
          </div>
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="contact_info">
              <div className="contact_info_title">Contact Info</div>
              <div className="contact_info_text">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.</p>
              </div>
              <div className="contact_info_location">
                <div className="contact_info_location_title">New York Office</div>
                <ul className="location_list">
                  <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                  <li>1-234-567-89011</li>
                  <li>info.deercreative@gmail.com</li>
                </ul>
              </div>
              <div className="contact_info_location">
                <div className="contact_info_location_title">Australia Office</div>
                <ul className="location_list">
                  <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                  <li>1-234-567-89011</li>
                  <li>info.deercreative@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter */}
  <div className="newsletter">
    <div className="newsletter_background" style={{backgroundImage: 'url(images/newsletter_background.jpg)'}} />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
            {/* Newsletter Content */}
            <div className="newsletter_content text-lg-left text-center">
              <div className="newsletter_title">sign up for news and offers</div>
              <div className="newsletter_subtitle">Subcribe to lastest smartphones news &amp; great deals we offer</div>
            </div>
            {/* Newsletter Form */}
            <div className="newsletter_form_container ml-lg-auto">
              <form action="#" id="newsletter_form" className="newsletter_form d-flex flex-row align-items-center justify-content-center">
                <input type="email" className="newsletter_input" placeholder="Your Email" required="required" />
                <button type="submit" className="newsletter_button">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <Footer />
</div>

    </>
  )
}

export default Home