import React from 'react'
import { Pagination } from "react-bootstrap";

const JobsPagination = ( {page,setPage} ) => {
    return (
        <Pagination>
            {page!==1 && <Pagination.Prev />}
            <Pagination.Item>{page -1}</Pagination.Item>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Item>{page+1}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}

export default JobsPagination;