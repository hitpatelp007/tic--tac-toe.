import React from 'react';
import Square from './Square'
import update from 'react-addons-update';
class Board extends React.Component {
  constructor(){
    super()
        this.state={
        arr:['','','','','','','','',''],
        count:0,
        message:''
        }
    }
    onC=()=>{

if(this.state.count===9){this.setState({message:"Draw X&Y"})}
if(this.state.arr[0]==='X'&& this.state.arr[1]==='X' && this.state.arr[2]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[0]==='X'&& this.state.arr[3]==='X' && this.state.arr[6]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[0]==='X'&& this.state.arr[4]==='X' && this.state.arr[8]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[3]==='X'&& this.state.arr[4]==='X' && this.state.arr[5]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[6]==='X'&& this.state.arr[7]==='X' && this.state.arr[8]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[1]==='X'&& this.state.arr[4]==='X' && this.state.arr[7]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[2]==='X'&& this.state.arr[5]==='X' && this.state.arr[8]==='X'){this.setState({message:"Winner X"})}
if(this.state.arr[6]==='X'&& this.state.arr[4]==='X' && this.state.arr[2]==='X'){this.setState({message:"Winner X"})}


if(this.state.arr[0]==='O'&& this.state.arr[1]==='O' && this.state.arr[2]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[0]==='O'&& this.state.arr[3]==='O' && this.state.arr[6]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[0]==='O'&& this.state.arr[4]==='O' && this.state.arr[8]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[3]==='O'&& this.state.arr[4]==='O' && this.state.arr[5]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[6]==='O'&& this.state.arr[7]==='O' && this.state.arr[8]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[1]==='O'&& this.state.arr[4]==='O' && this.state.arr[7]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[2]==='O'&& this.state.arr[5]==='O' && this.state.arr[8]==='O'){this.setState({message:"Winner O"})}
if(this.state.arr[6]==='O'&& this.state.arr[4]==='O' && this.state.arr[2]==='O'){this.setState({message:"Winner O"})}
    }

    fun=(val)=>{
    if(this.state.message===''){
         if(this.state.arr[val]!=='X' && this.state.arr[val]!=='O')
    {
    if(this.state.count%2===0){
            this.setState(
            update(
            this.state,{arr:{[val]:{$set:"X"}}}
            ),this.onC
            )
            this.setState({count:this.state.count+1})
            }else{
            this.setState(update(this.state,{arr:{[val]:{$set:"O"}}}),this.onC)
             this.setState({count:this.state.count+1})
            }
}
    }
    }
  renderSquare(i) {
    return <Square value={i} fun={this.fun} arr={this.state.arr}/>;
  }
  render() {
    let status = this.state.count%2==0?'Current player: X':'Current player: O';
    return (
      <div>
      <div class="pyro">
         <div class="before"></div>
         <div class="after"></div>
    </div>
        <div className="status">{status}</div>
        <div className="aap"><h1>{this.state.message}</h1></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;