import React, {Component} from 'react';
import calculatorImg from '../../calculator.png'

class Calculator extends Component {
    constructor () {
        super()

        this.state = {
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false
        }
    }

    updateHeader = (val)=> {
        this.setState({ header: val})
    }

    setDisplay = (num) => {
        let display;
        if (this.state.display=== '0') {
            display = num;
        } else {
            display = this.state.display + num; 
        }

        if (this.state.display.length<13) {
        this.setState({display: display})

        }
    }

    setOperator = (ourOperator) => {
        if(!this.state.operator) {

        }
        this.setState({operator: ourOperator,
        temp: Number(this.state.display),
        display: '0'
    })
    }

    calculate= ()=>{
        var result;
        if(this.state.operator=='+'){result = this.state.temp+Number(this.state.display)}
        else if (this.state.operator=='-'){result = this.state.temp-Number(this.state.display)}
        else if (this.state.operator=='*'){result = this.state.temp*Number(this.state.display)}
        else if (this.state.operator=='/'){result = this.state.temp/Number(this.state.display)}

        this.setState({display: String(result)})
    }

    clearDisplay=()=>{
        this.setState({display: '0', temp:'0',operator: '', resetDisplay: false});
    }

    render() {
        return (
                <div id="calculator-container">
                  <input onChange = {(e)=>this.updateHeader(e.target.value)} id="header-input"/>
                  <h1 id="header"> {this.state.header} </h1>
                  <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                  <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                      <span className="total">{this.state.display}</span>
                    </div>
              
                    <div className="btn clear" onClick={()=>this.clearDisplay()}></div>
              
                    <div onClick={()=> this.setDisplay('0')} className="btn zero"></div>
                    <div onClick={()=> this.setDisplay('1')} className="btn one"></div>
                    <div onClick={()=> this.setDisplay('2')} className="btn two"></div>
                    <div onClick={()=> this.setDisplay('3')} className="btn three"></div>
                    <div onClick={()=> this.setDisplay('4')} className="btn four"></div>
                    <div onClick={()=> this.setDisplay('5')} className="btn five"></div>
                    <div onClick={()=> this.setDisplay('6')} className="btn six"></div>
                    <div onClick={()=> this.setDisplay('7')} className="btn seven"></div>
                    <div onClick={()=> this.setDisplay('8')} className="btn eight"></div>
                    <div onClick={()=> this.setDisplay('9')} className="btn nine"></div>
              
                    <div className="btn equal" onClick = {()=>this.calculate()}> </div>
                    <div onClick = {() => this.setOperator('*')} className="btn multiply"></div>
                    <div onClick = {() => this.setOperator('/')} className="btn divide"></div>
                    <div onClick = {() => this.setOperator('-')} className="btn subtract"></div>
                    <div onClick = {() => this.setOperator('+')} className="btn add"></div>
                  </div>
                </div>
              )
    }
}

export default Calculator