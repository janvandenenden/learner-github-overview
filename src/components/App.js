import React from 'react'
import UserOverview from './UserOverview'
import TeamOverview from './TeamOverview'
import axios from 'axios'
import './App.css'
import token from '../token'

class App extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        user:'',
        repos:[],
        teamMembers:[],
        team:{
            name:'ANT-GIERTZ-1.11',
            id:3211019
        }
        }
    }
    componentDidMount(){
        this.getUsers = () => {
            axios.get(`https://api.github.com/teams/${this.state.team.id}/members`, 
            token)
            .then(res => {
                this.allUsers = res.data.map(x => {
                    this.user = {
                        login:x.login,
                        profile:x.html_url,
                        avatarURL:x.avatar_url,
                    }
                    return this.user    
                })
                this.setState({teamMembers:this.allUsers})
                console.log(this.state)
            }
        ).catch(err => console.log(err))};
        this.getUsers()
    }
    componentDidUpdate(){
        this.getUsers()
    }
    getRepos = (user) => {
        this.setState({user:user})
        axios.get(`https://api.github.com/users/${user}/repos`).then(res => {
            // this.allRepos = []
            console.log(res.data)
            this.allRepos = res.data.map(x => {
                    this.repo = {
                        createdAt:x.created_at.substring(0,10).split('-').reverse().join('-'),
                        name:x.name,
                        id:x.id,
                        ssh:x.ssh_url,
                        url:x.html_url,
                        updatedAt:x.updated_at.substring(0,10),
                        userURL: x.owner.html_url
                    }
                return this.repo
                }
            )
            this.setState({repos:this.allRepos})
            console.log(this.allRepos)
            console.log(this.state)
        });
    }

    backToOverview = () => {
        this.setState({user:''})
    }

    changeTeam = () => {
        if(this.state.team.name === 'ANT-GIERTZ-1.11')
        this.setState({team:{
            name:'ANT-LAMARR-1.8',
            id:3040530
        }})
        else this.setState({team:{
            name:'ANT-GIERTZ-1.11',
            id:3211019
        }})
    }
    
    
    render(){
        if(this.state.user.length > 0)
        return(
            <UserOverview 
                user={this.state.user} 
                repos={this.state.repos} 
                backToOverview={this.backToOverview}
            />
        )
        else return(
            <TeamOverview 
                onClick={this.getRepos} 
                teamMembers={this.state.teamMembers}
                team={this.state.team}
                changeTeam={this.changeTeam}
            />
        )
    }
}

export default App