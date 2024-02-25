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
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>			
  </div>
  {/* About */}
  <div className="about">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">Welcome To Unicat E-Learning</h2>
            <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu Vestibulum</p></div>
          </div>
        </div>
      </div>
      <div className="row about_row">
        {/* About Item */}
        <div className="col-lg-4 about_col about_col_left">
          <div className="about_item">
            <div className="about_item_image"><img src="images/about_1.jpg" alt /></div>
            <div className="about_item_title"><a href="#">Our Stories</a></div>
            <div className="about_item_text">
              <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
            </div>
          </div>
        </div>
        {/* About Item */}
        <div className="col-lg-4 about_col about_col_middle">
          <div className="about_item">
            <div className="about_item_image"><img src="images/about_2.jpg" alt /></div>
            <div className="about_item_title"><a href="#">Our Mission</a></div>
            <div className="about_item_text">
              <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
            </div>
          </div>
        </div>
        {/* About Item */}
        <div className="col-lg-4 about_col about_col_right">
          <div className="about_item">
            <div className="about_item_image"><img src="images/about_3.jpg" alt /></div>
            <div className="about_item_title"><a href="#">Our Vision</a></div>
            <div className="about_item_text">
              <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature */}
  <div className="feature">
    <div className="feature_background" style={{backgroundImage: 'url(images/courses_background.jpg)'}} />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">Why Choose Us</h2>
            <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
          </div>
        </div>
      </div>
      <div className="row feature_row">
        {/* Feature Content */}
        <div className="col-lg-6 feature_col">
          <div className="feature_content">
            {/* Accordions */}
            <div className="accordions">
              <div className="elements_accordions">
                <div className="accordion_container">
                  <div className="accordion d-flex flex-row align-items-center"><div>Award for Best School 2017</div></div>
                  <div className="accordion_panel">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="accordion_container">
                  <div className="accordion d-flex flex-row align-items-center active"><div>You’re learning from the best.</div></div>
                  <div className="accordion_panel">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="accordion_container">
                  <div className="accordion d-flex flex-row align-items-center"><div>Our degrees are recognized worldwide.</div></div>
                  <div className="accordion_panel">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className="accordion_container">
                  <div className="accordion d-flex flex-row align-items-center"><div>We encourage our students to go global.</div></div>
                  <div className="accordion_panel">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordions End */}
          </div>
        </div>
        {/* Feature Video */}
        <div className="col-lg-6 feature_col">
          <div className="feature_video d-flex flex-column align-items-center justify-content-center">
            <div className="feature_video_background" style={{backgroundImage: 'url(images/video.jpg)'}} />
            <a className="vimeo feature_video_button" href="https://player.vimeo.com/video/99340873?title=0" title="OH, PORTUGAL - IN 4K - Basti Hansen - Stock Footage">
              <img src="images/play.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team */}
  <div className="team">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">The Best Tutors in Town</h2>
            <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
          </div>
        </div>
      </div>
      <div className="row team_row">
        {/* Team Item */}
        <div className="col-lg-3 col-md-6 team_col">
          <div className="team_item">
            <div className="team_image"><img src="images/team_1.jpg" alt /></div>
            <div className="team_body">
              <div className="team_title"><a href="#">Jacke Masito</a></div>
              <div className="team_subtitle">Marketing &amp; Management</div>
              <div className="social_list">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Team Item */}
        <div className="col-lg-3 col-md-6 team_col">
          <div className="team_item">
            <div className="team_image"><img src="images/team_2.jpg" alt /></div>
            <div className="team_body">
              <div className="team_title"><a href="#">William James</a></div>
              <div className="team_subtitle">Designer &amp; Website</div>
              <div className="social_list">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Team Item */}
        <div className="col-lg-3 col-md-6 team_col">
          <div className="team_item">
            <div className="team_image"><img src="images/team_3.jpg" alt /></div>
            <div className="team_body">
              <div className="team_title"><a href="#">John Tyler</a></div>
              <div className="team_subtitle">Quantum mechanics</div>
              <div className="social_list">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Team Item */}
        <div className="col-lg-3 col-md-6 team_col">
          <div className="team_item">
            <div className="team_image"><img src="images/team_4.jpg" alt /></div>
            <div className="team_body">
              <div className="team_title"><a href="#">Veronica Vahn</a></div>
              <div className="team_subtitle">Math &amp; Physics</div>
              <div className="social_list">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Counter */}
  <div className="counter">
    <div className="counter_background" style={{backgroundImage: 'url(images/counter_background.jpg)'}} />
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="counter_content">
            <h2 className="counter_title">Register Now</h2>
            <div className="counter_text"><p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            {/* Milestones */}
            <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
              {/* Milestone */}
              <div className="milestone">
                <div className="milestone_counter" data-end-value={15}>0</div>
                <div className="milestone_text">years</div>
              </div>
              {/* Milestone */}
              <div className="milestone">
                <div className="milestone_counter" data-end-value={120} data-sign-after="k">0</div>
                <div className="milestone_text">years</div>
              </div>
              {/* Milestone */}
              <div className="milestone">
                <div className="milestone_counter" data-end-value={670} data-sign-after="+">0</div>
                <div className="milestone_text">years</div>
              </div>
              {/* Milestone */}
              <div className="milestone">
                <div className="milestone_counter" data-end-value={320}>0</div>
                <div className="milestone_text">years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter_form">
        <div className="row fill_height">
          <div className="col fill_height">
            <form className="counter_form_content d-flex flex-column align-items-center justify-content-center" action="#">
              <div className="counter_form_title">courses now</div>
              <input type="text" className="counter_input" placeholder="Your Name:" required="required" />
              <input type="tel" className="counter_input" placeholder="Phone:" required="required" />
              <select name="counter_select" id="counter_select" className="counter_input counter_options">
                <option>Choose Subject</option>
                <option>Subject</option>
                <option>Subject</option>
                <option>Subject</option>
              </select>
              <textarea className="counter_input counter_text_input" placeholder="Message:" required="required" defaultValue={""} />
              <button type="submit" className="counter_form_button">submit now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Partners */}
  <div className="partners">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="partners_slider_container">
            <div className="owl-carousel owl-theme partners_slider">
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_1.png" alt /></div>
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_2.png" alt /></div>
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_3.png" alt /></div>
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_4.png" alt /></div>
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_5.png" alt /></div>
              {/* Partner Item */}
              <div className="owl-item partner_item"><img src="images/partner_6.png" alt /></div>
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