import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {

    const [state, setState] = useState({
        fname: '',
        lname: '',
        email: '',
        message: '',
        mailSent: false,
        messageStatut: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',

            //development url
            url: '[YOUR PHP LOCALSERVER URL]/demo-%20react/api/demo.php',

            //production url
            // url: 'demo-%20react/api/demo.php',
            headers: { 'content-type': 'application/json' },
            data: state
          })
            .then(result => setState(result.data))
            .catch(error =>  console.log('error', error))
    }

    useEffect(() => {
        console.log('ooo', state);
    }, [state])
 

    return (  
        <div>
            <p>Contact Me</p>
                <div>
                <form method="POST" action="/action_page.php" onSubmit={handleFormSubmit}>
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(event) => setState({ ...state, fname: event.currentTarget.value})} />
                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(event) => setState({ ...state, lname: event.currentTarget.value})} />

                    <label>Email</label>
                    <input type="email" id="email" name="email"placeholder="Your email" onChange={(event) => setState({ ...state, email: event.currentTarget.value})} />


                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." onChange={(event) => setState({ ...state, subject: event.currentTarget.value})}></textarea>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
        </div>
    );
}
 
export default Contact;