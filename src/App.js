import React, { useState } from 'react';
import useFetchJobs from './usFetchJobs';
import { Container } from "react-bootstrap"

const App  = () => {
  // const [params,setParams] = useState({})
  // const [page,setPage] = useState(1)
  const { jobs,loading,error } = useFetchJobs()
  return (
    <Container>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error....</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}
export default App;