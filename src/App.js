import React, { useState } from 'react';
import useFetchJobs from './usFetchJobs';
import { Container } from "react-bootstrap"
import Job from './Job';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const App  = () => {
  const [params,setParams] = useState({})
  const [page,setPage] = useState(1)
  const { jobs,loading,error } = useFetchJobs(params,page)
  return (
    <Container className="my-5">
      {loading && <Loader 
        className="d-flex align-items-center justify-content-center mt-5"
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />}
      {error && <h1>Error....</h1>}
      <h1 style={{fontFamily:'Anton'}} className="d-flex align-items-center justify-content-center">GitHub Jobs</h1>
      {jobs.map(job => {
        return <Job key={job.id} job={job}></Job>
      })}
    </Container>
  )
}
export default App;