import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { usePage } from '@inertiajs/react'
import React from 'react'

const Home = (props) => {
    const {teacher} = usePage().props
    console.log(teacher);
  return (
    <>
      <div className="super_container mt-20">
      <Header />
      <div className="team">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container text-center">
            <h2 className="section_title">The Best Teacher in Biddaloy</h2>
            <div className="section_subtitle"><p>We have sufficient exprert teacher in our biddaloy.</p></div>
          </div>
        </div>
      </div>
      <div className="row team_row">
        {/* Team Item */}
        {
            teacher.map(t=>
            <div className="col-lg-3 col-md-6 team_col">
                    <div className="team_item">
                        <div className="team_image"><img src={'upload/profile/' + t.profile_pic} alt /></div>
                        <div className="team_body">
                        <div className="team_title"><a href="#">{t.name}</a></div>
                        <div className="team_subtitle">{t.email}</div>
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
        )
        }
        

        {/* <table className='table table-stroked mt-5'>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
                {
                    teacher.map((t)=>(
                    <tr>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td>{t.mobile_number}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table> */}
      </div>
    </div>
  </div>
  

  <Footer />
</div>

    </>
  )
}

export default Home