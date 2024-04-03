import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import {request} from '../../Api/helper/axios_helper'


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
            "/messages",
            {}
        ).then((response)=>{
            this.setState({data:response.data})
        });
    };

    render(){
        return (
            <div>
                {this.state.data && 
                this.state.data.map((line)=>
                    <p>{line}</p>
                )}
            </div>
        );
    };

}

// const AuthContent = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:9292/messages0');
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='row justify-content-md-center'>
//             <div className='col-4'>
//                 <div className='card' style={{width:"18rem"}}>
//                     <div className='card-body'>
//                     <h5 className='card-title'>Backed Response</h5>
//                     <p className='card-text'>Content:</p>
//                 <ul>
//                 {data.map((line, index) => (<li key={index}>{line}</li>))}
//                 </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthContent;
