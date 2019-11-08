import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  containerButton: {
    width: 500, margin:25
  }
});

class ViewCurrentResponse extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
         
        }
        this.handleDevClick = this.handleDevClick.bind(this);
        
    }
    handleDevClick(){
      const {environmentFlagValue} = this.props.location.state
      console.log("handleClick : environmentFlagValue :: View Current Response: " + environmentFlagValue); 
     
    }
    render() {
      const { classes } = this.props;
      
      const {environmentFlagValue} = this.props.location.state

      console.log("Environment Flag Render View Current Response:: "+ environmentFlagValue);
      if(environmentFlagValue == 1){
        // BRB Development
        return (
          <div>
          <center>
            <h1>DEVELOPMENT Simulator</h1>
            <h2>This page simulates the data in the responses sent back to the eCommerce system</h2></center><br></br>
          <center><Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick} 
           >
            <Link style={{ textDecoration: 'none', color: 'white' }}  to='/BRBDev'>Start New Application</Link>
          </Button><br></br>

          <Button  className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick}>*** CAUTION - Delete Responses Older Then 24 Hours ***
          </Button><br></br>

          <Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick}>*** CAUTION - Simulate eComm Error Return ***
          </Button><br></br>

          <Button className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick} 
            margin="15px"
            fullWidth='true'>*** CAUTION - Simulate eComm Timeout ***
          </Button><br></br>
          </center>
          </div>
        )
      }else if(environmentFlagValue == 2){
        //BRB Preprod
        return (
          <div>
          <center>
            <h1>PREPROD Simulator</h1>
            <h2>This page simulates the data in the responses sent back to the eCommerce system</h2></center><br></br>
          <center><Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handlePreProdClick} 
           >
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/BRBPrep'>Start New Application</Link>
          </Button><br></br>

          <Button  className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handlePreProdClick} 
           >*** CAUTION - Delete Responses Older Then 24 Hours ***</Button><br></br>
          
          <Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handlePreProdClick} 
            >*** CAUTION - Simulate eComm Error Return ***</Button><br></br>

          <Button className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handlePreProdClick} 
            margin="15px"
            fullWidth='true'>*** CAUTION - Simulate eComm Timeout ***
           </Button><br></br>
          </center>
          </div>
        )
      }else if(environmentFlagValue == 4){
         // BRB PROD
         return (
          <div>
          <center>
            <h1>PROD Simulator</h1>
            <h2>This page simulates the data in the responses sent back to the eCommerce system</h2></center><br></br>
          <center><Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleProdClick} 
           >
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/BRBProd'>Start New Application</Link>
          </Button><br></br>

          <Button  className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleProdClick} >*** CAUTION - Delete Responses Older Then 24 Hours ***
          </Button><br></br>

          <Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleProdClick}>*** CAUTION - Simulate eComm Error Return ***
          </Button><br></br>

          <Button className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleProdClick} 
            margin="15px"
            fullWidth='true'>*** CAUTION - Simulate eComm Timeout *** 
          </Button><br></br>
          </center>
          </div>
        )
      }else{
        return (
          <div>
          <center>
            <h1>DEVELOPMENT Simulator</h1>
            <h2>This page simulates the data in the responses sent back to the eCommerce system</h2></center><br></br>
          <center><Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick} 
           >
            <Link style={{ textDecoration: 'none', color: 'white' }}  to='/BRBDev'>Start New Application</Link>
          </Button><br></br>

          <Button  className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick}>*** CAUTION - Delete Responses Older Then 24 Hours ***
          </Button><br></br>

          <Button 
            className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick}>*** CAUTION - Simulate eComm Error Return ***
          </Button><br></br>

          <Button className={classes.containerButton} 
            variant="contained"
            color="secondary"
            onClick={this.handleDevClick} 
            margin="15px"
            fullWidth='true'>*** CAUTION - Simulate eComm Timeout ***
          </Button><br></br>
          </center>
          </div>
        )
      }
       
    }
}

ViewCurrentResponse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewCurrentResponse);
