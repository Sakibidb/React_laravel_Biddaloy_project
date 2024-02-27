import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="super_container">
  {/* Header */}
  <Header />
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
        <li className="menu_mm"><a href="#">Class</a></li>
        <li className="menu_mm"><a href="#">Teacher</a></li>
        <li className="menu_mm"><a href="#">Student Attendance</a></li>
        <li className="menu_mm"><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
  {/* Home */}
  

  {/* Features */}
  <div className="features mt-20">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title h2 text-black">Welcome To Biddaloy</h2>
            <div className="section_subtitle"><p>A school management system is an information management system for educational institutions to manage student data. It helps teachers get information about students faster, easier and reduces their workload. Student databases in school management systems contain information about the students, such as their exam grades, parent information, medical history, tuition fees, etc.School management systems provide skills such as student registration, class documents, grades, analytical grades for students, and other assessment elements. In addition, school management systems are used to plan the curriculum of students, record their presence and manage the needs of students in the school.</p></div>
          </div>
        </div>
      </div>
      <div className="row features_row">
        {/* Features Item */}
        <div className="col-lg-3 feature_col">
          <div className="feature text-center trans_400">
            <div className="feature_icon"><img src="images/icon_1.png" alt /></div>
            <h3 className="feature_title">The Experts</h3>
            <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
        </div>
        {/* Features Item */}
        <div className="col-lg-3 feature_col">
          <div className="feature text-center trans_400">
            <div className="feature_icon"><img src="images/icon_2.png" alt /></div>
            <h3 className="feature_title">Book &amp; Library</h3>
            <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
        </div>
        {/* Features Item */}
        <div className="col-lg-3 feature_col">
          <div className="feature text-center trans_400">
            <div className="feature_icon"><img src="images/icon_3.png" alt /></div>
            <h3 className="feature_title">Best Courses</h3>
            <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
        </div>
        {/* Features Item */}
        <div className="col-lg-3 feature_col">
          <div className="feature text-center trans_400">
            <div className="feature_icon"><img src="images/icon_4.png" alt /></div>
            <h3 className="feature_title">Award &amp; Reward</h3>
            <div className="feature_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Popular Courses */}
  <div className="courses">
    <div className="section_background parallax-window" data-parallax="scroll" data-image-src="images/courses_background.jpg" data-speed="0.8" />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">Teacher</h2>
            <div className="section_subtitle"><p>Biddaloy Teachers</p></div>
          </div>
        </div>
      </div>
      <div className="row courses_row">
        {/* Course */}
        <div className="col-lg-4 course_col">
          <div className="course">
            <div className="course_image"><img src="images/course_1.jpg" alt /></div>
            <div className="course_body">
              <h3 className="course_title"><a href="course.html">Software Training</a></h3>
              <div className="course_teacher">Mr. John Taylor</div>
              <div className="course_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
              </div>
            </div>
            <div className="course_footer">
              <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                <div className="course_info">
                  <i className="fa fa-graduation-cap" aria-hidden="true" />
                  <span>20 Student</span>
                </div>
                <div className="course_info">
                  <i className="fa fa-star" aria-hidden="true" />
                  <span>5 Ratings</span>
                </div>
                <div className="course_price ml-auto">$130</div>
              </div>
            </div>
          </div>
        </div>
        {/* Course */}
        <div className="col-lg-4 course_col">
          <div className="course">
            <div className="course_image"><img src="images/course_2.jpg" alt /></div>
            <div className="course_body">
              <h3 className="course_title"><a href="course.html">Developing Mobile Apps</a></h3>
              <div className="course_teacher">Ms. Lucius</div>
              <div className="course_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
              </div>
            </div>
            <div className="course_footer">
              <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                <div className="course_info">
                  <i className="fa fa-graduation-cap" aria-hidden="true" />
                  <span>20 Student</span>
                </div>
                <div className="course_info">
                  <i className="fa fa-star" aria-hidden="true" />
                  <span>5 Ratings</span>
                </div>
                <div className="course_price ml-auto">Free</div>
              </div>
            </div>
          </div>
        </div>
        {/* Course */}
        <div className="col-lg-4 course_col">
          <div className="course">
            <div className="course_image"><img src="images/course_3.jpg" alt /></div>
            <div className="course_body">
              <h3 className="course_title"><a href="course.html">Starting a Startup</a></h3>
              <div className="course_teacher">Mr. Charles</div>
              <div className="course_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
              </div>
            </div>
            <div className="course_footer">
              <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                <div className="course_info">
                  <i className="fa fa-graduation-cap" aria-hidden="true" />
                  <span>20 Student</span>
                </div>
                <div className="course_info">
                  <i className="fa fa-star" aria-hidden="true" />
                  <span>5 Ratings</span>
                </div>
                <div className="course_price ml-auto"><span>$320</span>$220</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="courses_button trans_200"><a href="#">view all courses</a></div>
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
  {/* Events */}
  <div className="events">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title h2">Upcoming events</h2>
            <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
          </div>
        </div>
      </div>
      <div className="row events_row">
        {/* Event */}
        <div className="col-lg-4 event_col">
          <div className="event event_left">
            <div className="event_image"><img src="images/event_1.jpg" alt /></div>
            <div className="event_body d-flex flex-row align-items-start justify-content-start">
              <div className="event_date">
                <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                  <div className="event_day trans_200">21</div>
                  <div className="event_month trans_200">Aug</div>
                </div>
              </div>
              <div className="event_content">
                <div className="event_title"><a href="#">Which Country Handles Student Debt?</a></div>
                <div className="event_info_container">
                  <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true" /><span>15.00 - 19.30</span></div>
                  <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true" /><span>25 New York City</span></div>
                  <div className="event_text">
                    <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Event */}
        <div className="col-lg-4 event_col">
          <div className="event event_mid">
            <div className="event_image"><img src="images/event_2.jpg" alt /></div>
            <div className="event_body d-flex flex-row align-items-start justify-content-start">
              <div className="event_date">
                <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                  <div className="event_day trans_200">27</div>
                  <div className="event_month trans_200">Aug</div>
                </div>
              </div>
              <div className="event_content">
                <div className="event_title"><a href="#">Repaying your student loans (Winter 2017-2018)</a></div>
                <div className="event_info_container">
                  <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true" /><span>09.00 - 17.30</span></div>
                  <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true" /><span>25 Brooklyn City</span></div>
                  <div className="event_text">
                    <p>This Consumer Action News issue covers topics now being debated before...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Event */}
        <div className="col-lg-4 event_col">
          <div className="event event_right">
            <div className="event_image"><img src="images/event_3.jpg" alt /></div>
            <div className="event_body d-flex flex-row align-items-start justify-content-start">
              <div className="event_date">
                <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                  <div className="event_day trans_200">01</div>
                  <div className="event_month trans_200">Sep</div>
                </div>
              </div>
              <div className="event_content">
                <div className="event_title"><a href="#">Alternative data and financial inclusion</a></div>
                <div className="event_info_container">
                  <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true" /><span>13.00 - 18.30</span></div>
                  <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true" /><span>25 New York City</span></div>
                  <div className="event_text">
                    <p>Policy analysts generally agree on a need for reform, but not on which path...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team */}
  <div className="team">
    <div className="team_background parallax-window" data-parallax="scroll" data-image-src="images/team_background.jpg" data-speed="0.8" />
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
  {/* Latest News */}
  <div className="news">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">Latest News</h2>
            <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
          </div>
        </div>
      </div>
      <div className="row news_row">
        <div className="col-lg-7 news_col">
          {/* News Post Large */}
          <div className="news_post_large_container">
            <div className="news_post_large">
              <div className="news_post_image"><img src="images/news_1.jpg" alt /></div>
              <div className="news_post_large_title"><a href="blog_single.html">Here’s What You Need to Know About Online Testing for the ACT and SAT</a></div>
              <div className="news_post_meta">
                <ul>
                  <li><a href="#">admin</a></li>
                  <li><a href="#">november 11, 2017</a></li>
                </ul>
              </div>
              <div className="news_post_text">
                <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take. Can America learn anything from other nations...</p>
              </div>
              <div className="news_post_link"><a href="blog_single.html">read more</a></div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 news_col">
          <div className="news_posts_small">
            {/* News Posts Small */}
            <div className="news_post_small">
              <div className="news_post_small_title"><a href="blog_single.html">Home-based business insurance issue (Spring 2017 - 2018)</a></div>
              <div className="news_post_meta">
                <ul>
                  <li><a href="#">admin</a></li>
                  <li><a href="#">november 11, 2017</a></li>
                </ul>
              </div>
            </div>
            {/* News Posts Small */}
            <div className="news_post_small">
              <div className="news_post_small_title"><a href="blog_single.html">2018 Fall Issue: Credit Card Comparison Site Survey (Summer 2018)</a></div>
              <div className="news_post_meta">
                <ul>
                  <li><a href="#">admin</a></li>
                  <li><a href="#">november 11, 2017</a></li>
                </ul>
              </div>
            </div>
            {/* News Posts Small */}
            <div className="news_post_small">
              <div className="news_post_small_title"><a href="blog_single.html">Cuentas de cheques gratuitas una encuesta de Consumer Action</a></div>
              <div className="news_post_meta">
                <ul>
                  <li><a href="#">admin</a></li>
                  <li><a href="#">november 11, 2017</a></li>
                </ul>
              </div>
            </div>
            {/* News Posts Small */}
            <div className="news_post_small">
              <div className="news_post_small_title"><a href="blog_single.html">Troubled borrowers have fewer repayment or forgiveness options</a></div>
              <div className="news_post_meta">
                <ul>
                  <li><a href="#">admin</a></li>
                  <li><a href="#">november 11, 2017</a></li>
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
    <div className="newsletter_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8" />
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
  <Footer />
</div>

    </>
  )
}

export default Home