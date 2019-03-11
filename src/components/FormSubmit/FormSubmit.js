import React, {Component} from 'react'
import axios from 'axios'


const base_url = 'https://jsonplaceholder.typicode.com'

class FormSubmit extends Component{
    constructor(){
        super()
        this.myForm = React.createRef()
    }
    state = {
        title : '',
        body : '',
        userId: 112,
        isSubmited: false,
        error : false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.myForm.current.reset()
        axios.post(`${base_url}/posts`,{
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                    isSubmited:true,
                    error: false
                })
                console.log(res)
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isSubmited : false
                })
                console.log(error)
            })
            
    }
    render(){
        return(
            <div>
                <form ref={this.myForm} onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' className="form-control" id="title" placeholder="@title" value={this.state.title} onChange={this.changeHandler} />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="body">Short bio</label>
                        <textarea type="text" name='body' className="form-control" id="body" placeholder="@body" value={this.state.body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" className='btn btn-primary'>submit</button>
                    {this.state.isSubmited && <p>Form submited successfully</p>}
                    {this.state.error && <p>Error occourd</p>}
                </form>
            </div>
        )
    }
}
export default FormSubmit;