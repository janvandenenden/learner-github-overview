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
        team:[]
        }
    }
    componentDidMount(){
        this.getUsers = () => {
            axios.get(`https://api.github.com/teams/3211019/members`, 
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
                this.setState({team:this.allUsers})
                console.log(this.state)
            }
        ).catch(err => console.log(err))};
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
    
    
    render(){
        if(this.state.user.length > 0)
        return(
            <UserOverview user={this.state.user} repos={this.state.repos}/>
        )
        else return(
            <TeamOverview onClick={this.getRepos} team={this.state.team}/>
        )
    }
}

export default App