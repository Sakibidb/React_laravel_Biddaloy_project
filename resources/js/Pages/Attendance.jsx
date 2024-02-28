import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { usePage } from "@inertiajs/react";
import React from "react";

const Home = (props) => {
    const { attendance, students, classs } = usePage().props;
    console.log(students);

    const studentName = (id) => {
        const student = students.find((stu) => stu.id === id);
        return student ? student.name : "Unknown Name";
    };
    const className = (id) => {
        const cls = classs.find((cls) => cls.id === id);
        return cls ? cls.name : "Unknown Name";
    };
  
    
    
    

    return (
        <>
            <div className="super_container mt-20">
                <Header />
                <div className="team">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section_title_container text-center">
                                    <h2 className="section_title">
                                        Student Attendace in Biddaloy
                                    </h2>
                                    <div className="section_subtitle">
                                        <p>
                                            Student Attendance in our biddaloy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row team_row">
                            {/* Team Item */}

                            <table className="table table-dark mt-5">
                                <thead>
                                    <th>Class Name</th>
                                    <th>Student Name</th>
                                    <th>Attendance Date</th>
                                    <th>Attendance Type</th>
                                </thead>
                                <tbody>
                                    {attendance.map((at) => (
                                        <tr>
                                            <td>{className(at.class_id)}</td>
                                            <td>{studentName(at.student_id)}</td>
                                            <td>{at.attendance_date}</td>
                                            <td>
                                            {at.attendance_type === 1 && "Present"}
                                            {at.attendance_type === 2 && "Late"}
                                            {at.attendance_type === 3 && "Absent"}
                                            {at.attendance_type === 4 && "Half Day"}
                                            </td>

                                        </tr>

                                            
                                        
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Home;
