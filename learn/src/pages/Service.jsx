import React, { use } from 'react';
import { InfoContext } from '../hooks/InfoContext';
const Sevice = () => {
    const info=use(InfoContext);
    return (
        <div>
            <h1>Services</h1>
            <h1>I am {info.name} and my age is {info.age} from {info.profession} department</h1>
            <Reducer></Reducer>
        </div>
    );
}
export default Service;
