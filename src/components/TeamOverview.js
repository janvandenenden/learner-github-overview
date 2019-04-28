import React from 'react'

const TeamOverview = (props) => {
    console.log(props)
    return (
        <div>
            <div className="jumbotron hero">
                    <h1>ANT-GIERTZ-1.11</h1>
            </div>
            <div className="container">
                <div className="row">
                    {props.team.map((x) => {
                        return (
                            <div className="card col-12 col-sm-4" key={x.login} style={{width: '25%'}}>
                                <img className="card-img-top" src={x.avatarURL} alt={x.login}/>
                                <div className="card-body">
                                    <h6 className="card-title">{x.login}</h6>
                                    <p className="card-text"></p>
                                    <button onClick={() => props.onClick(x.login)} className="btn btn-primary">Repositories</button>
                                </div>
                            </div>   
                        )}
                    )}
                </div>
            </div>
        </div>
                
  )}

export default TeamOverview
