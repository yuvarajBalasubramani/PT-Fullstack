import React from 'react';
import State from '../hooks/State';
import Form from '../hooks/Form';
import Effect from '../hooks/Effect';
import { Link } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';
import { useContext } from 'react';
const About=()=>{
    const name=useContext(UserContext);
    return (
        <div>
            <h1>Hi {name}</h1>
            <Link to="/State">Go to State Hook Example</Link><br />
            <Link to="/Form">Go to Form Hook Example</Link><br />
            <Link to="/Effect">Go to Effect Hook Example</Link>
            <Link to="/reducer">Go to Reducer Hook Example</Link>
            <p>We are a company dedicated to providing the best services to our customers.</p>
        </div>
    );
}
export default About;