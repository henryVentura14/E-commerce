import React from 'react'
import '../../styles/Error.css'
const Error = ({ message, type }) => (
    <React.Fragment>
        {type === 'success' &&
            <p className="alert alert-success error">{message}</p>
        }
        {type !== 'success' &&
            <p className="alert alert-danger error">{message}</p>
        }
    </React.Fragment>


)

export default Error
