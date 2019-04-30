import React from 'react'

const UserOverview = (props) => {
    return ( 
        <div>
            <div className="jumbotron jumbotron-fluid hero">
            <h1>{props.user}</h1> <br />
            <button className='btn btn-danger' onClick={props.backToOverview}>back</button>
        </div>
        <div className="container">
                {props.repos.map((item, index) => {
                    return(
                        <div className="card" key={index}>
                            <div className="card-header">
                                <h5>{item.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">ssh: {item.ssh}</p>
                                <p className="card-text">created on: {item.createdAt.substring(0,10).split('-').reverse().join('-')}</p>
                                <p className="card-text">updated on: {item.updatedAt.substring(0,10).split('-').reverse().join('-')}</p>
                                <a href={item.url} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Go to Repo</a>
                            </div>
                        </div>   
                        )
                    }
                )}
            </div>
        </div>
    
    )   
}

export default UserOverview