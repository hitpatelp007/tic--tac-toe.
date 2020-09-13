import React from 'react';
class Square extends React.Component {

    handle =(props)=>{
        this.props.fun(this.props.value)
    }
  render() {

    return (
      <button onClick={this.handle} className={`square`}>
            {this.props.arr[this.props.value]}

      </button>
    );
  }
}
export default Square;