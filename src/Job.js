import React from "react";
import { Card } from "react-bootstrap"; 

const Job = ( {job} ) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Job;