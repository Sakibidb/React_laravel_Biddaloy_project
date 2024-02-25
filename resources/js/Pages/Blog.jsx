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
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>			
  </div>
  {/* Blog */}
  <div className="blog">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="blog_post_container">
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_image"><img src="images/blog_1.jpg" alt /></div>
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">Here’s What You Need to Know About Online Testing</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">With Changing Students and Times</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_video_container">
                <video className="blog_post_video video-js" data-setup="{&quot;controls&quot;: true, &quot;autoplay&quot;: false, &quot;preload&quot;: &quot;auto&quot;, &quot;poster&quot;: &quot;images/blog_2.jpg&quot;}">
                  <source src="images/mov_bbb.mp4" type="video/mp4" />
                  <source src="images/mov_bbb.ogg" type="video/ogg" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">Building Skills Outside the Classroom With New Ways</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_image"><img src="images/blog_3.jpg" alt /></div>
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">Law Schools Debate a Contentious Testing Alternative</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_video_container">
                <video className="blog_post_video video-js" data-setup="{&quot;controls&quot;: true, &quot;autoplay&quot;: false, &quot;preload&quot;: &quot;auto&quot;, &quot;poster&quot;: &quot;images/blog_4.jpg&quot;}">
                  <source src="images/mov_bbb.mp4" type="video/mp4" />
                  <source src="images/mov_bbb.ogg" type="video/ogg" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">Building Skills Outside the Classroom With New Ways</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_image"><img src="images/blog_5.jpg" alt /></div>
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">Here’s What You Need to Know About Online Testing</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
            {/* Blog Post */}
            <div className="blog_post trans_200">
              <div className="blog_post_body">
                <div className="blog_post_title"><a href="blog_single.html">With Changing Students and Times</a></div>
                <div className="blog_post_meta">
                  <ul>
                    <li><a href="#">admin</a></li>
                    <li><a href="#">november 11, 2017</a></li>
                  </ul>
                </div>
                <div className="blog_post_text">
                  <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should take...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="load_more trans_200"><a href="#">load more</a></div>
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