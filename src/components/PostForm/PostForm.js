import React, {Component} from 'react'

const initialState = {
    name: '',
    email: '',
    password:'',
    bio: '',
    country : '',
    gender: '',
    skills: [],
    show:'',
    show2: ''
};

class PostForm extends React.Component{

    constructor(){
        super()

        this.myForm = React.createRef()
    }

    state = initialState;

    changeHandler = event =>{
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills:this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        }else{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    };

    submitHandler = event =>{
        event.preventDefault()
        console.log(this.state)

        this.myForm.current.reset()
        this.setState({
            ...initialState 
        })
    };

    clickHandler = event => {
        this.setState({
            show: document.getElementById("name").value,
            show2: document.getElementById("email").value
        })
    }

    render(){
        return(
            
            <div>
                
                <form ref={this.myForm} onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className="form-control" id="name" placeholder="@name" value={this.state.name} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="emailt" name='email' className="form-control" id="email" placeholder="@email" value={this.state.email} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="Password" name='password' className="form-control" id="password" placeholder="@password" value={this.state.password} onChange={this.changeHandler} />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="bio">Short bio</label>
                        <textarea type="text" name='bio' className="form-control" id="bio" placeholder="@bio" value={this.state.bio} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group  ">
                        <label htmlFor="country">Country</label>
                        <select id="country" name='country' className="form-control" onChange={this.changeHandler} >
                            <option value="">Choose...</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">China</option>
                        </select>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender" id="gender1" value='male' />
                                        <label className="form-check-label" htmlFor="gender1">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender" id="gender2" value='female' />
                                        <label className="form-check-label" htmlFor="gender2">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" onChange={this.changeHandler} type="radio" name="gender3" id="gender" value='other' />
                                        <label className="form-check-label" htmlFor="gender3">
                                            Other
                                        </label>
                                    </div>
                                </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                    <legend className="col-form-label col-sm-2 pt-0">Skills</legend>
                        <div className="form-check">
                            <input className="form-check-input" onChange={this.changeHandler} name='skills' type="checkbox" id="js" value='javascript' />
                            <label className="form-check-label" htmlFor="js">Javascript</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={this.changeHandler} name='skills' type="checkbox" id="react" value='react' />
                            <label className="form-check-label" htmlFor="react">React Js</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={this.changeHandler} name='skills' type="checkbox" id="php" value='php'/>
                            <label className="form-check-label" htmlFor="php">PHP</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={this.changeHandler} name='skills' type="checkbox" id="python" value='python'/>
                            <label className="form-check-label" htmlFor="python">Python</label>
                        </div>

                    </div>
                    <button onClick={this.clickHandler} type="submit" className='btn btn-primary'>submit</button>
                </form>
                <p>Hi i'am: {this.state.show} </p>
            </div>
        )
    }
}

export default PostForm;