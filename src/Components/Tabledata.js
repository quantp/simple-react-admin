import React, { Component } from 'react';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

class Tabledata extends Component {
    constructor(props, context) {
        super(props, context);
        this.mapUserData = this.mapUserData.bind(this);
        
    }

    mapUserData() {
        
        const userData = this.props.userData;
        return (
            userData.map((val, key)=> (
                <tr key={key} id={val.id}>
                    <td>{val.firstname}</td>
                    <td>{val.lastname}</td>
                    <td>{val.jobtitle}</td>
                    <td>{val.DOB}</td>
                    <td><div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={()=>{this.props.editClick(val)}}>Edit</button>
                    <button type="button" className="btn btn-secondary" onClick={(e) => {this.props.deleteUser(e, val.id)}}>Delete</button>
                    </div>
                    </td>
                </tr>
        ))
        )

    }
    
    render() {
        return (
                <table id="demo-foo-addrow" className="table table-striped table-bordered m-b-0 toggle-circle" data-page-size={7}>
                  <thead>
                    <tr>
                      <th data-sort-initial="true" data-toggle="true">First Name</th>
                      <th>Last Name</th>
                      <th data-hide="phone">Job Title</th>
                      <th data-hide="phone, tablet">DOB</th>
                      <th data-hide="phone, tablet">ACtions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.mapUserData()}
                  </tbody>
                </table>
        );
    }
}

export default Tabledata;