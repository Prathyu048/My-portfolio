
import React from 'react'
import Skills from './Skills'
import Contact from './Contact'
import Project from './Project'
const about = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className='bckg'>
            <div className='aboutsec'>
                <h3>LET ME INTRODUCE MY SELF</h3>
                <h2>About me</h2>
                <h4>I am enthusiastic software developer.My passion towards computer science<br></br>
                    made me as a frontend developer.Tasting latest technologies and<br></br>
                    improving knowledge on various domains in IT are my hobbies</h4>
            </div>
            <div className='education'>
                <h2 id='educate'>Education</h2>
                <h4>> I am currently pursuing my B.Tech 4th year in <br></br>
                Computer Science and Engineering from<br></br>
                 Annamacharya Institute Of Technology And Sciences</h4>
                    <h4>> I Completed my Intermediate (MPC) at Sri Nalanda Jr College,Rajampet</h4>
                    <h4>> I Completed SSC at Sri Prathyusha High School,Pullampet</h4>
            </div>
            </div>
            <Project />
            <Skills />
            <Contact />
        </div>

    )
}

export default about

