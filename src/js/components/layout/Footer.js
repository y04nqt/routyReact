import React from 'react';

export default class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "AKR",
      clause : "All Rights Reserved"
    }
    this.nameChanged = false;
    this.changeName = function(){
      if(this.state.name == "AKR" && this.nameChanged == false ){
        setTimeout(() => {
          this.setState({name : 'AARONI'})
          this.nameChanged = true;
        }, 2000)
      }else if(this.state.name != "AKR"){
        return null;
      }else{
        console.log('error!');
      }
    };
    this.copyright = "Copyright ©"
  }
  render(){
    let d = new Date();
    let y = d.getFullYear();
    this.changeName();
    this.fullCR = this.copyright+" "+y+" "+this.state.name+" "+this.state.clause;
    setTimeout(() => {
      this.setState({name : 'AARONI'})
    }, 2000)
    return(
      <footer>
        <h2>{this.fullCR}</h2>
      </footer>
    );
  }
}
