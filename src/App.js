import React, { Component } from 'react';
import Userform from './Components/userform';
import './App.css';
import Search from './Components/Search';
import Tabledata from './Components/Tabledata';
import data from './data.json';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      canShow: false,
      data: [],
      isAdd: false
    };
    this.changeState = this.changeState.bind(this);
    this.getSearchTxt = this.getSearchTxt.bind(this);
    this.getNewUser = this.getNewUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.canclePopup = this.canclePopup.bind(this);
    this.edit = this.edit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(data));
    }   
    var temp = JSON.parse(localStorage.getItem('userData'));
    this.setState({data: temp});
  }
  
  editUser(user) {
    //serach user by ID
    this.setState({
      editUser: user,
      canShow: true
    });
  }
  canclePopup() {
    this.setState(
      {
        canShow: false,
        editUser: {}
      }
    );
  }
  changeState() {
    this.setState(
      {
        isAdd: !this.state.isAdd
      });
  }
  getNewUser(e, user) {
    e.preventDefault();
    const temp = this.state.data;
    temp.push(user);
    this.setState({data: temp});
  }
  getSearchTxt(e) {
    const temp = [];
    this.setState({
      [e.target.name]: e.target.value
    })
    data.forEach(element => {
      if(element.firstname.indexOf(e.target.value) >= 0) {
        temp.push(element);
      }
    });
    this.setState({data: temp});
  }
  edit(e, user) {
    e.preventDefault();
    const tempdata = this.state.data;

    tempdata.map((ele)=> {

      if(ele.id === this.state.editUser.id) {
        ele = Object.assign(ele, user);
      }
    });
    this.setState({data: tempdata});
  }
  deleteUser(e, id) {
    const tempdata = this.state.data;
    const filteredArr = tempdata.filter((el)=> {
      return el.id !== id
    });
    this.setState({data: filteredArr});
  }
  render() {
     
    return (
      <div className="App">
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <h4 className="page-title">Foo Tables</h4>
                </div>
              </div>
            </div>
            <h4 className="m-t-0 header-title">Add &amp; Remove Rows</h4>
                <p className="text-muted m-b-30 font-13">
                  Add or remove rows from your FooTable.
                </p>
            <Search  xulyclick={this.changeState} isEdit={this.state.isAdd} changeHandler={this.getSearchTxt}/>
          <div className="row">
            <div className="col-sm-9">
              <div className="card-box">
                <Tabledata deleteUser={this.deleteUser} userData={this.state.data} editClick={this.editUser}/>
              </div>
            </div>
            <Userform edit={this.edit} add={this.getNewUser} user={this.state.editUser} canShow={this.state.canShow || this.state.isAdd} canclePopup={this.canclePopup}/>
          </div>
          

          </div></div>
      </div>
    );
  }
}

export default App;
