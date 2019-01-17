import React, { Component } from 'react';

class Search extends Component {
    constructor(props, context) {
        super(props, context);    
        this.adjustTxt = this.adjustTxt.bind(this)    
    }
    adjustTxt() {
        if(this.props.isEdit) {
            return (
                <span><i className="mdi mdi-plus-circle mr-2" />Hide Popup</span>)
        }
        return  (
            <span><i className="mdi mdi-plus-circle mr-2" />Add New Row</span>
        )
    }
    render() {
        return (
            <div className="mb-3">
            <div className="row">
              <div className="col-12 text-sm-center form-inline">
                <div className="form-group mr-2">
                  <button id="demo-btn-addrow" className="btn btn-primary" onClick={()=>this.props.xulyclick()}> {this.adjustTxt()}</button>
                </div>
                <div className="form-group">
                  <input id="demo-input-search2" name="search" type="text" placeholder="Search" className="form-control" autoComplete="off" onChange={this.props.changeHandler}/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Search;