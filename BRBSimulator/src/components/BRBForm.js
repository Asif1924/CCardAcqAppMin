import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldSmall: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldLong: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },  
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const provinces = [
  { value: '', label: ' ', },
  { value: 'AB', label: 'AB - Alberta', },
  { value: 'MB', label: 'MB - Manitoba', },
  { value: 'NB', label: 'NB - New Brunswick', },
  { value: 'NL', label: 'NL - Newfoundland and Labrador', },
  { value: 'NS', label: 'NS - Nova Scotia', },
  { value: 'NT', label: 'NT - Northwest Territorie', },
  { value: 'NU', label: 'NU - Nunavut', },
  { value: 'ON', label: 'ON - Ontario', },
  { value: 'PE', label: 'PE - Prince Edward Island', },
  { value: 'QC', label: 'QC - Quebec', },
  { value: 'SK', label: 'SK - Saskatchewan', },
  { value: 'YT', label: 'YT - Yukon', },
];

const languages = [
  { value: '', label: ' ', },
  { value: 'en', label: 'en - English', },
  { value: 'fr', label: 'fr - French', },
  { value: 'xxx', label: 'xxx - Other', },
];

class TextFields extends React.Component {

  constructor(props) {
    super(props)    
    this.generateEmail = this.generateEmail.bind(this);
    this.uuid='';    
    this.state = {
      requestingSystem: 'BRBSIM',
      ecommId: this.createUUID(),
      email: this.generateEmail(),
      firstName: '',
      lastName: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      province: '',
      postalCode: '',
      loyaltyProgram: 'CTMA',
      loyaltyNumber: '',
      language: '',
      labelWidth: 0,
      error: null,
      isLoaded: false,
      items: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.createUUID = this.createUUID.bind(this);
    this.handleRequestingSystemChange = this.handleRequestingSystemChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAddressLine1Change = this.handleAddressLine1Change.bind(this);
    this.handleAddressLine2Change = this.handleAddressLine2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
    this.handleLoyaltyProgramChange = this.handleLoyaltyProgramChange.bind(this);
    this.handleLoyaltyNumberChange = this.handleLoyaltyNumberChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }    

  handleRequestingSystemChange(event) { this.setState({requestingSystem: event.target.value}); }
  handleEmailChange(event) { this.setState({email: event.target.value}); }
  handleFirstNameChange(event) { this.setState({firstName: event.target.value}); }
  handleLastNameChange(event) { this.setState({lastName: event.target.value}); }
  handlePhoneChange(event) { this.setState({phone: event.target.value}); }
  handleAddressLine1Change(event) { this.setState({addressLine1: event.target.value}); }
  handleAddressLine2Change(event) { this.setState({addressLine2: event.target.value}); }
  handleCityChange(event) { this.setState({city: event.target.value}); }
  handleProvinceChange(event) { this.setState({province: event.target.value}); }
  handlePostalCodeChange(event) { this.setState({postalCode: event.target.value}); }
  handleLoyaltyProgramChange(event) { this.setState({loyaltyProgram: event.target.value}); }
  handleLoyaltyNumberChange(event) { this.setState({loyaltyNumber: event.target.value}); }
  handleLanguageChange(event) { this.setState({language: event.target.value}); }
  /*
  handleChange = requestingSystem => event => {
    this.setState({ [requestingSystem]: event.target.value });    
  };  */

   // Not a real UUID, just a fake look alike...
  createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    
    this.uuid = s.join("");
    return this.uuid;
  }

  generateEmail() {
    return this.uuid.substring(0, 8) + "@noreply.com";
  }

  handleClick() {
    console.log('Entered value : ' + 
    " requestingSystem : " + this.state.requestingSystem + " " +
    " ecommId : " + this.state.ecommId + " " +
    " email : " + this.state.email + " " +
    " firstName : " + this.state.firstName + " " +
    " lastName : " + this.state.lastName + " " +
    " phone : " + this.state.phone + " " +
    " addressLine1 : " + this.state.addressLine1 + " " +
    " addressLine2 : " + this.state.addressLine2 + " " +
    " city : " + this.state.city + " " +
    " province : " + this.state.province + " " +
    " postalCode : " + this.state.postalCode + " " +
    " loyaltyProgram : " + this.state.loyaltyProgram + " " +
    " loyaltyNumber : " + this.state.loyaltyNumber + " " +
    " language : " + this.state.language );

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://d9cbwpdssa03:8765/BRBMiddlewareBroker/PersistService', true);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' + 
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ' +
            'xmlns:per="http://persistservice.BRB.ctfs.com/">' +         
            '<soapenv:Body>' +
                '<per:request>' +
                    '<per:requestingSystem>'+this.state.requestingSystem+'</per:requestingSystem>' +
                    '<per:customerInfo>' +
                      '<per:ecommCustomerId>'+this.state.ecommId+'</per:ecommCustomerId>' +
                      '<per:email>'+this.state.email+'</per:email>' +
                      '<per:firstName>'+this.state.firstName+'</per:firstName>' +
                      '<per:lastName>'+this.state.lastName+'</per:lastName>' +
                      '<per:phone>'+this.state.phone+'</per:phone>' + 
                      '<per:addressDetails>' +
                        '<per:addressLine1>'+this.state.addressLine1+'</per:addressLine1>' +
                        '<per:addressLine2>'+this.state.addressLine2+'</per:addressLine2>' +
                        '<per:city>'+this.state.city+'</per:city>' +
                        '<per:province>'+this.state.province+'</per:province>' +
                        '<per:postalCode>'+this.state.postalCode+'</per:postalCode>' +
                      '</per:addressDetails>' +
                      '<per:loyaltyDetails>' + 
                        '<per:loyaltyProgram>'+this.state.loyaltyProgram+'</per:loyaltyProgram>' +
                        '<per:loyaltyNumber>'+this.state.loyaltyNumber+'</per:loyaltyNumber>' +
                      '</per:loyaltyDetails>' +                              
                    '</per:customerInfo>' +                   
                '</per:request>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                // alert('done. use firebug/console to see network response');
            }
        }
    }
    
    console.log("Request : " + sr);
    
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'application/xml');
    xmlhttp.send(sr);
    // send request
    // ...

    /*
    // POST request API
    fetch('https://api.github.com/gists', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      description: 'Fetch API Post example',
      public: true
    })
    }).then(function(response) {
      return response.json();
    }, 
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }).then(function(data) {
      console.log('Created Gist:', data.html_url);
    });

    // GET request API 
    fetch("https://www.reddit.com/r/reactjs.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )   */
  }

  render() {
    const { classes } = this.props;
    console.log("Environment Flag :: "+this.props.environmentFlag);

    return (
      <form className={classes.container} noValidate autoComplete="off">        

        <TextField
          id="standard-requestingSystem"
          label="Requesting System"
          className={classes.textFieldLong}
          value={this.state.requestingSystem}
          onChange={this.handleRequestingSystemChange}
          margin="normal"
          variant="outlined"
        />       

        <TextField
          id="standard-ecommId"
          label="EComm ID"
          className={classes.textFieldLong}
          value={this.state.ecommId}
          // onChange={this.handleEmailChange}
          margin="normal"
          variant="outlined"
          disabled
        />

        <TextField
          id="standard-email"
          label="Email"
          className={classes.textFieldLong}
          value={this.state.email}
          onChange={this.handleEmailChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-firstName"
          label="First Name"
          className={classes.textFieldLong}
          value={this.state.firstName}
          onChange={this.handleFirstNameChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-lastName"
          label="Last Name"
          className={classes.textFieldLong}
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-phone"
          label="Phone"
          className={classes.textFieldLong}
          value={this.state.phone}
          onChange={this.handlePhoneChange}
          margin="normal"
          variant="outlined"
          type="number"
        />

        <TextField
          id="standard-addressLine1"
          label="Address Line1"
          className={classes.textFieldLong}
          value={this.state.addressLine1}
          onChange={this.handleAddressLine1Change}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-addressLine2"
          label="Address Line 2"
          className={classes.textFieldLong}
          value={this.state.addressLine2}
          onChange={this.handleAddressLine2Change}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-city"
          label="City"
          className={classes.textFieldLong}
          value={this.state.city}
          onChange={this.handleCityChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-province-native"
          select
          label="Province"
          className={classes.textField}
          value={this.state.province}
          onChange={this.handleProvinceChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          //helperText="Please select your province"
          margin="normal"
          variant="outlined"
        >
          {provinces.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="standard-postalCode"
          label="Postal Code"
          className={classes.textFieldSmall}
          value={this.state.postalCode}
          onChange={this.handlePostalCodeChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-loyaltyProgram"
          label="Loyalty Program"
          className={classes.textFieldSmall}
          value={this.state.loyaltyProgram}
          onChange={this.handleLoyaltyProgramChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="standard-loyaltyNumber"
          label="Loyalty Number"
          className={classes.textFieldLong}
          value={this.state.loyaltyNumber}
          onChange={this.handleLoyaltyNumberChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-language-native"
          select
          label="Language"
          className={classes.textField}
          value={this.state.language}
          onChange={this.handleLanguageChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          //helperText="Please select your language"
          margin="normal"
          variant="outlined"
        >
          {languages.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>        
                
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
          Begin Credit Card Application Supplying Above Data
        </Button>
      </form>
      
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
