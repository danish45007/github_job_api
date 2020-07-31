import React, { useState } from 'react';
import useFetchJobs from './usFetchJobs';
import { Container } from "react-bootstrap"
import Job from './Job';

const App  = () => {
  const [params,setParams] = useState({})
  const [page,setPage] = useState(1)
  const { jobs,loading,error } = useFetchJobs(params,page)
  return (
    <Container>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error....</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job}></Job>
      })}
    </Container>
  )
}
export default App;