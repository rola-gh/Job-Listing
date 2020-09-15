import React ,{useState , useEffect} from 'react';
import  data from './assets/data.json'
import JobBoardComponent from './components/JobBoardComponent'

function App() {
  const [jobs , setJobs] =  useState([]);

  useEffect(()=> setJobs(data),[]);

  // console.log(jobs);//u can see initially empty arr because that's what we said to have as a say state for the jobs
  // & then we'll get the data from the JSON and it will put it in the jobs state

  return (
    <div className="App">
      <header className={'bg-teal-500 mb-12'}>
        <img src='/images/bg-header-desktop.svg' alt='pg-image'/>
      </header>
      {/*loop over the jobs*/}
      {
        jobs.length === 0 ?(
          <p>Jobs are fetching...</p>
        ) : (jobs.map(job =>(
            <JobBoardComponent
                job={job}
                key={job.id}
            />

          ))
        )}
    </div>
  );
}

export default App;
