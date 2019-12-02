import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function TotalReduction(props) {
	const driven = props.values.driven.reduce((prod, val) => prod*val)
	const driving = props.values.driving.reduce((prod, val) => prod*val)
	const reduction = driven/driving
	let freeSpeed = 1
	let stallTorque = 1
	let stallCurrent = 1
	let freeCurrent = 1
	switch (props.values.motor) {
		case 'CIM':
			freeSpeed = 5330;
	      	stallTorque = 2.41;
	      	stallCurrent = 131;
	      	freeCurrent = 2.7;
			break
		case 'MiniCIM':
			freeSpeed = 5840;
      		stallTorque = 1.41;
      		stallCurrent = 89;
      		freeCurrent = 3;
			break
		case 'NEO':
			freeSpeed = 5676;
      		stallTorque = 2.6;
      		stallCurrent = 105;
      		freeCurrent = 1.8;
			break
		case 'Falcon':
			freeSpeed = 6380;
      		stallTorque = 4.69;
      		stallCurrent = 257;
      		freeCurrent = 1.5;
			break
	}
	const dtFreeSpeed = freeSpeed*props.values.wheelDiameter*3.142*(1/reduction)/12/60
	const dtAdjSpeed = dtFreeSpeed*props.values.speedLoss/100
    const currentDraw = (stallCurrent - freeCurrent)/stallTorque*props.values.weight*props.values.weightOnDriven/100*props.values.wheelCoeff/props.values.numGearboxes*4.44822161526*props.values.wheelDiameter*0.0254/2/(props.values.effeciency/100)/props.values.numMotors/reduction+freeCurrent

	return (
		<div>
		<Typography variant="h5" align="center">output</Typography>
		<div style={divStyle}>
      	<div style={outputLabel}>overall reduction:</div><div style={output}>{reduction.toFixed(2)}:1</div>
		<div style={outputLabel}>free speed:</div><div style={output}>{dtFreeSpeed.toFixed(2)} fps</div>
		<div style={outputLabel}>adjusted speed:</div><div style={output}>{dtAdjSpeed.toFixed(2)} fps</div>
      	<div style={outputLabel}>pushing current draw:</div><div style={output}>{currentDraw.toFixed(2)} amps</div>
      </div>
		</div>
	);
}

function getFalconPinion(props) {
	let pinion = ''
	switch (props) {
		case '8':
			pinion = '217-6915 (steel, 10T center distance)';
			break
		case '9':
			pinion = '217-6916 (steel, 10T center distance)';
			break
		case '10':
			pinion = '217-6917 (steel, 12T center distance)';
			break
		case '11':
			pinion = '217-6918 (steel, 12T center distance)';
			break
		case '12':
			pinion = '217-6919 (steel)';
			break
		case '13':
			pinion = '217-6921 (steel, 14T center distance)';
			break
		case '14':
			pinion = '217-6922 (steel)';
			break
	}
	return pinion;
}

	let pinion = ''
	switch (props) {
		case '9':
			pinion = '217-6335 (steel, 10T center distance)';
			break
		case '10':
			pinion = '217-6334 (steel, 12T center distance)';
			break
		case '11':
			pinion = '217-3107 (steel, 12T center distance)';
			break
		case '12':
			pinion = ['217-3099 (steel)', <br/>, '217-2614 (aluminum)'];
			break
		case '13':
			pinion = '217-6921 (steel, 14T center distance)';
			break
		case '14':
			pinion = '217-6922 (steel)';
			break
	}
	return pinion;
}

function getHalfHexGear(props) {
	let gear = ''
	switch (props) {
		case '18':
			gear = ['217-3209', <br/>, '217-5460 (steel)'];
			break
		case '20':
			gear = ['217-2702', <br/>, '217-5461 (steel)'];
			break
		case '22':
			gear = ['217-5462', <br/>, '217-5463 (steel)'];
			break
		case '24':
			gear = ['217-2704', <br/>, '217-5464 (steel)'];
			break
		case '26':
			gear = ['217-5465', <br/>, '217-5466 (steel)'];
			break
		case '28':
			gear = ['217-5467', <br/>, '217-5468 (steel)'];
			break
		case '30':
			gear = ['217-2705', <br/>, '217-5469 (steel)'];
			break
		case '32':
			gear = '217-5470';
			break
		case '34':
			gear = '217-2706';
			break
		case '36':
			gear = '217-3214';
			break
		case '38':
			gear = '217-5471';
			break
		case '40':
			gear = '217-2708';
			break
		case '42':
			gear = '217-3216';
			break
		case '44':
			gear = '217-2710';
			break
		case '46':
			gear = '217-5472';
			break
		case '48':
			gear = '217-3218';
			break
		case '50':
			gear = ['217-3572', <br/>, '217-2712 (with VersaKeys)'];
			break
		case '52':
			gear = '217-5473';
			break
		case '54':
			gear = ['217-3573', <br/>, '217-3221 (with VersaKeys)'];
			break
		case '56':
			gear = '217-5474';
			break
		case '58':
			gear = '217-5475';
			break
		case '60':
			gear = ['217-3574', <br/>, '217-2714 (with VersaKeys)'];
			break
		case '62':
			gear = '217-5476';
			break
		case '64':
			gear = ['217-3575', <br/>, '217-2715 (with VersaKeys)'];
			break
		case '66':
			gear = '217-5476 (with VersaKeys)';
			break
		case '68':
			gear = '217-5477';
			break
		case '70':
			gear = '217-3224 (with VersaKeys)';
			break
		case '72':
			gear = ['217-3576', <br/>, '217-2716 (with VersaKeys)'];
			break
		case '74':
			gear = '217-5478';
			break
		case '76':
			gear = '217-5479';
			break
		case '78':
			gear = '217-5480';
			break
		case '80':
			gear = '217-5481';
			break
		case '82':
			gear = '217-5482';
			break
		case '84':
			gear = ['217-3577', <br/>, '217-2717 (with VersaKeys)'];
			break
	}
	return gear;
}

function PartNumbers(props) {
	let pinion = ''
	switch (props.values.motor) {
		case 'CIM':
			pinion = getCimPinion(props.values.driving[0])
			break
		case 'MiniCIM':
			pinion = getCimPinion(props.values.driving[0])
			break
		case 'NEO':
			pinion = getCimPinion(props.values.driving[0])
			break
		case 'Falcon':
			pinion = getFalconPinion(props.values.driving[0])
			break
	}
	return (
		<div>
		<Typography variant="h5" align="center">part numbers</Typography>
		<div style={divStyle}>
		<div style={outputLabel}>{props.values.driving[0]}T {props.values.motor} pinion:</div><div style={output}>{pinion}</div>
		<div style={outputLabel}>{props.values.driven[0]}T gear:</div><div style={output}>{getHalfHexGear(props.values.driven[0])}</div>
		<div style={outputLabel}>{props.values.driving[1]}T gear:</div><div style={output}>{getHalfHexGear(props.values.driving[1])}</div>
		<div style={outputLabel}>{props.values.driven[1]}T gear:</div><div style={output}>{getHalfHexGear(props.values.driven[1])}</div>
		<div style={outputLabel}>{props.values.driving[2]}T gear:</div><div style={output}>{getHalfHexGear(props.values.driving[2])}</div>
		<div style={outputLabel}>{props.values.driven[2]}T gear:</div><div style={output}>{getHalfHexGear(props.values.driven[2])}</div>
		</div>
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
  textAlign: 'left',
  float: 'right',
  padding: '0px 0px 0px 50px'
};

const output = {
  display: 'inline-block',
  textAlign: 'left',
  padding: '0px 0px 0px 20px'
};

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 200,
    minWidth: 130,
  }
});

class Calculator extends React.Component {
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
  	const {classes} = this.props
    return (
      <Container maxWidth="sm">
          <Typography variant="h5" align="center">motor</Typography>
	          <div align="center">
			        <Select
			        	className={classes.textField}
			         	name="motor"
			          	value={this.state.motor}
			          	onChange={event => this.handleChange(event)}
			          	margin="dense"
			          	variant="outlined"
			        >
			          <MenuItem value='CIM'>CIM</MenuItem>
			          <MenuItem value='MiniCIM'>MiniCIM</MenuItem>
			          <MenuItem value='NEO'>NEO</MenuItem>
			          <MenuItem value='Falcon'>Falcon</MenuItem>
			        </Select>
			    </div>
        	<Typography variant="h5" align="center">drivetrain</Typography>
	        	<div style={divStyle}>
	        	<TextField
	        	  name="speedLoss"
		          label="speed loss constant"
		          className={classes.textField}
		          value={this.state.speedLoss}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		          InputProps={{
		            endAdornment: <InputAdornment position="start">%</InputAdornment>,
		          }}
		        />
		        <TextField
		          name="effeciency"
		          label="drivetran effeciency"
		          className={classes.textField}
		          value={this.state.effeciency}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		          InputProps={{
		            endAdornment: <InputAdornment position="start">%</InputAdornment>,
		          }}
		        />
		        <TextField
		          name="numGearboxes"
		          label="number of gearboxes"
		          className={classes.textField}
		          value={this.state.numGearboxes}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		        />
		        <TextField
		          name="numMotors"
		          label="motors per gearbox"
		          className={classes.textField}
		          value={this.state.numMotors}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		        />
		        <TextField
		          name="weight"
		          label="weight"
		          className={classes.textField}
		          value={this.state.weight}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		          InputProps={{
		            endAdornment: <InputAdornment position="start">lb</InputAdornment>,
		          }}
		        />
		        <TextField
		          name="weightOnDriven"
		          label="weight on driven wheels"
		          className={classes.textField}
		          value={this.state.weightOnDriven}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		          InputProps={{
		            endAdornment: <InputAdornment position="start">%</InputAdornment>,
		          }}
		        />
		        <TextField
		          name="wheelDiameter"
		          label="wheel diameter"
		          className={classes.textField}
		          value={this.state.wheelDiameter}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		          InputProps={{
		            endAdornment: <InputAdornment position="start">in</InputAdornment>,
		          }}
		        />
		        <TextField
		          name="wheelCoeff"
		          label="wheel coeffecient"
		          className={classes.textField}
		          value={this.state.wheelCoeff}
		          onChange={event => this.handleChange(event)}
		          margin="dense"
		          variant="outlined"
		        />
		    </div>
          	<Typography variant="h5" align="center">gearing</Typography>
            	<div style={divStyle}>
            		<Typography variant="h7" align="center">driving</Typography>
            		<div align="center">driven</div>
            		<TextField
			          name="driving"
			          className={classes.textField}
			          value={this.state.driving[0]}
			          onChange={event => this.handleChangeGearing(event, 0)}
			          margin="dense"
			          variant="outlined"
			        />
			        <TextField
			          name="driven"
			          className={classes.textField}
			          value={this.state.driven[0]}
			          onChange={event => this.handleChangeGearing(event, 0)}
			          margin="dense"
			          variant="outlined"
			        />
			        <TextField
			          name="driving"
			          className={classes.textField}
			          value={this.state.driving[1]}
			          onChange={event => this.handleChangeGearing(event, 1)}
			          margin="dense"
			          variant="outlined"
			        />
			        <TextField
			          name="driven"
			          className={classes.textField}
			          value={this.state.driven[1]}
			          onChange={event => this.handleChangeGearing(event, 1)}
			          margin="dense"
			          variant="outlined"
			        />
			        <TextField
			          name="driving"
			          className={classes.textField}
			          value={this.state.driving[2]}
			          onChange={event => this.handleChangeGearing(event, 2)}
			          margin="dense"
			          variant="outlined"
			        />
			        <TextField
			          name="driven"
			          className={classes.textField}
			          value={this.state.driven[2]}
			          onChange={event => this.handleChangeGearing(event, 2)}
			          margin="dense"
			          variant="outlined"
			        />
            	</div>
        <TotalReduction values={this.state}/>
        <PartNumbers values={this.state}/>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Calculator);