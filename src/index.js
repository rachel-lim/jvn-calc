import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TotalReduction(props) {
	const driven = props.values.driven.reduce((prod, val) => prod*val)
	const driving = props.values.driving.reduce((prod, val) => prod*val)
	const reduction = driven/driving
	let freeSpeed = 1
	switch (props.values.motor) {
		case 'CIM':
			freeSpeed = 5330;
			break
		case 'MiniCIM':
			freeSpeed = 5840;
			break
		case 'NEO':
			freeSpeed = 5676;
			break
		case 'Falcon':
			freeSpeed = 6380;
			break
		default:
			freeSpeed = 1;
	}
	const dtFreeSpeed = freeSpeed*props.values.wheelDiameter*3.142*(1/reduction)/12/60
	const dtAdjSpeed = dtFreeSpeed*props.values.speedLoss/100

	return (
		<div style={{width: "300px", margin: "auto"}}>
			<h1>output</h1>
      <div style={outputLabel}>overall reduction:</div><output>{reduction.toFixed(2)}:1</output>
			<div style={outputLabel}>free speed:</div><output>{dtFreeSpeed.toFixed(2)} fps</output>
			<div style={outputLabel}>adjusted speed:</div><output>{dtAdjSpeed.toFixed(2)} fps</output>
		</div>
	);
}

const divStyle = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
  float: 'center',
  padding: '0px 50px 0px 50px'
};

const label = {
  display: 'inline-block',
  width: '250px',
  textAlign: 'left'
};

const outputLabel = {
  display: 'inline-block',
  width: '150px',
  textAlign: 'left',
  float: 'left'
};

class JVNCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	motor: "CIM", 
    	speedLoss: 81, 
    	effeciency: 90,
    	numGearboxes: 2,
    	numMotors: 2,
    	weight: 154,
    	weightOnDriven: 100,
    	wheelDiameter: 4,
    	wheelCoeff: 1.1,
    	driving: [1,1,1], 
    	driven: [1,1,1]};

  }

  handleChange(event) {
  	this.setState({[event.target.name]: event.target.value});
  }

  handleChangeGearing(event, ind) {
	let newIds = [...this.state[event.target.name]];
	console.log(event.target.value);
	newIds[ind] = event.target.value;
	this.setState({[event.target.name]: newIds});
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>motor</h1>
          <select name="motor" value={this.state.motor} onChange={event => this.handleChange(event)}>
            <option value="CIM">CIM</option>
            <option value="MiniCIM">MiniCIM</option>
            <option value="NEO">NEO</option>
            <option value="Falcon">Falcon</option>
          </select>
        	<h1>drivetrain</h1>
        	<div style={label}>speed loss constant [%]:</div>
        	<input style={{width: "30px"}} name="speedLoss" value={this.state.speedLoss} onChange={event => this.handleChange(event)}/>

          <div style={label}>drivetrain effeciency [%]:</div>
        	<input style={{width: "30px"}} name="effeciency" value={this.state.effeciency} onChange={event => this.handleChange(event)}/>

        	<div style={label}>number of gearboxes [#]:</div>
        	<input style={{width: "30px"}} name="numGearboxes" value={this.state.numGearboxes} onChange={event => this.handleChange(event)}/>
        	
          <div style={label}>number of motors per gearbox [#]:</div>
        	<input style={{width: "30px"}} name="numMotors" value={this.state.numMotors} onChange={event => this.handleChange(event)}/>

        	<div style={label}>total weight [lb]:</div>
        	<input style={{width: "30px"}} name="weight" value={this.state.weight} onChange={event => this.handleChange(event)}/>

        	<div style={label}>weight on driven wheels [%]:</div>
        	<input style={{width: "30px"}} name="weightOnDriven" value={this.state.weightOnDriven} onChange={event => this.handleChange(event)}/>

        	<div style={label}>wheel diameter [in]:</div>
        	<input style={{width: "30px"}} name="wheelDiameter" value={this.state.wheelDiameter} onChange={event => this.handleChange(event)}/>

        	<div style={label}>wheel coeffecient:</div>
        	<input style={{width: "30px"}} name="wheelCoeff" value={this.state.wheelCoeff} onChange={event => this.handleChange(event)}/>
          	<h1>gearing</h1>
            	<div style={divStyle}>
            		<div>driving</div>
            		<div>driven</div>
            		<div><input style={{width: "75px"}} name="driving" value={this.state.driving[0]} onChange={event => this.handleChangeGearing(event, 0)}/></div>
            		<div><input style={{width: "75px"}} name="driven" value={this.state.driven[0]} onChange={event => this.handleChangeGearing(event, 0)}/></div>

            		<div><input style={{width: "75px"}} name="driving" value={this.state.driving[1]} onChange={event => this.handleChangeGearing(event, 1)}/></div>
                <div><input style={{width: "75px"}} name="driven" value={this.state.driven[1]} onChange={event => this.handleChangeGearing(event,1)}/></div>
            		
                <div><input style={{width: "75px"}} name="driving" value={this.state.driving[2]} onChange={event => this.handleChangeGearing(event, 2)}/></div>
                <div><input style={{width: "75px"}} name="driven" value={this.state.driven[2]} onChange={event => this.handleChangeGearing(event,2)}/></div>
            	</div>
        <TotalReduction values={this.state}/>
      </form>
      </div>
    );
  }
}

ReactDOM.render(
  <JVNCalc />,
  document.getElementById('root')
);