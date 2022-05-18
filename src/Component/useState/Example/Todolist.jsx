import React, { useState } from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    
};

function Todolist(props) {
    const [job, setJob] = useState('')
    const [jobs,setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs ?? []
    })

    const handleJobs = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJobs)

            return newJobs
        })
        setJob('')
    }

    return (
        <div style={{padding: 32}}>
            <input 
            value = {job} 
            onChange={e => setJob(e.target.value)}  
            />
            <button onClick={handleJobs}>Add</button>
            <ul>
                {jobs.map((job, index) =>(
                    <li key = {index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;