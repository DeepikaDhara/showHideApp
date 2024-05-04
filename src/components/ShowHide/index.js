// Write your code here
import {Component} from 'react'
import './index.css'
class ShowHide extends Component {
  state={
    showsFName:false,
    showsLName:false
  }
  showFirstName=()=>{
    this.setState((prevState)=>(
      {showsFName:!prevState.showsFName}
      ))}
  showLastName=()=>{
    this.setState((prevState)=>(
      {showsLName:!prevState.showsLName}
      ))}
  }
  render(){
    const {showsFName, showsLName}=this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div class="sub-container">
        <div className="name-container">
          <button className="button button-1" onClick={this.showFirstName}>Show/Hide FirstName</button>
          {showsFName && <p className="name">Joe</p>}
        </div>
        <div className="name-container">
          <button className="button button-2" onClick={this.showLastName}>Show/Hide LastName</button>
          {showsLName && <p className="name">Jonas</p>}
        </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
