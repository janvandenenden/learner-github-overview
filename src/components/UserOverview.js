import React from 'react'

const UserOverview = (props) => {
return ( 
    <div>
    <div className="jumbotron hero">
        <h1>{props.user}</h1>

    </div>
        <div className="container">
    
                {props.repos.map((item, index) => {
                    console.log(item)
                    return(
                        <div className="card" key={index}>
                            <div className="card-header">
                                <h5>{item.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">ssh: {item.ssh}</p>
                                <p className="card-text">created on: {item.createdAt}</p>
                                <a href={item.url} target="_blank" className="btn btn-primary">Go to Repo</a>
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