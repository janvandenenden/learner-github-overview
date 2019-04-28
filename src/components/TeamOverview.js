import React from 'react'

const TeamOverview = (props) => {
    console.log(props)
    return (
        <div>
            <div className="jumbotron jumbotron-fluid hero">
                    <h1>{props.team.name}</h1>
                    <button className='btn btn-danger' onClick={props.changeTeam}>change team</button>
            </div>
            <div className="container">
                <div className="row">
                    {props.teamMembers.map((x) => {
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
