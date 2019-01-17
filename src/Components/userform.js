import React, { Component } from 'react';

class Userform extends Component {
    constructor(props, context) {
        super(props, context);
        this.showForm = this.showForm.bind(this);
        this.collectVal = this.collectVal.bind(this);
        this.state = {};
    }
    collectVal(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    showForm() {
        if(this.props.canShow) {
            if(Object.keys(this.props.user).length) {
                return (
                <div className="card border-primary">
                    <div className="card-header">
                    Edit USer: <strong>{this.props.user.id}</strong>
            
                    </div>
                    <div className="card-body">
                    <form className="add-user"  onSubmit={(e) => {this.props.edit(e,this.state)}}>
                    
                    <div className="form-group">
                        <input type="text" defaultValue={this.props.user.firstname} name="firstname" className="form-control" placeholder="First Name" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={this.props.user.lastname} name="lastname" className="form-control" placeholder="Last Name" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={this.props.user.jobtitle} name="jobtitle" className="form-control" placeholder="Job Title" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group btn-group">
                        <div className="btn-group">
                            <input type="hidden" value={this.props.user.id} />
                            <button type="submit" className="btn btn-outline-success">Save</button>
                            <button type="reset" className="btn btn-outline-danger" onClick={this.props.canclePopup}>Cancle</button>
                        </div>

                    </div></form>
                    </div>
                    </div>
                )
            }
            return (
                
                    <div className="card border-primary">
                    <div className="card-header">
                    Add New User
            
                    </div>
                    <div className="card-body">
                    <form className="add-user"  onSubmit={(e) => {this.props.add(e,this.state)}}>
                    
                    <div className="form-group">
                        <input type="text" name="firstname" className="form-control" placeholder="First Name" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastname" className="form-control" placeholder="Last Name" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="jobtitle" className="form-control" placeholder="Job Title" onChange={this.collectVal}/>
                    </div>
                    <div className="form-group btn-group">
                        <div>
            <button type="submit" className="btn btn-outline-success">Save</button>
            <button type="reset" className="btn btn-outline-danger" onClick={this.props.canclePopup}>Cancle</button>
            </div>

                    </div></form>
                    </div>
                    </div>
            )
        }
    }
    render() {
       
        return (
            <div className="col-sm-3">
                {this.showForm()}
            </div>
        );
    }
}

export default Userform;