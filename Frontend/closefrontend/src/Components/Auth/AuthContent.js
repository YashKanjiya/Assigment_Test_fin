import React from 'react'
import {request} from '../../Api/axios_helper'


export default class AuthContent extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    };

    componentDidMount(){
        request(
            "GET",
            "/message",
            {}
        ).then((response)=>{
            this.setState({data:response.data})
        });
    };

    render(){
        return (
            <div>
                {this.state.data && 
                this.state.map((line)=>
                    <p>h{line}</p>
                )}
            </div>
        );
    };

}
