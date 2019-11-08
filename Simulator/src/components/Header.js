import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import LinearProgress from '@material-ui/core/LinearProgress';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
	backgroundColor: theme.palette.background.paper,	
  },
  nested: {
	paddingLeft: theme.spacing(4),
  },
  nestedSpacingEight: {
	paddingLeft: theme.spacing(8),
  },
  nestedSpacingTwelve: {
	paddingLeft: theme.spacing(12),
  },
  title: {
	flexGrow: 1,
	textAlign: 'center',
  },
  progressBarWidth : {
	  width: 25,
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [brb, setBRB] = React.useState(true);
  const [wici, setWICI] = React.useState(true);
  const [ecomm, setEcomm] = React.useState(false);
  const [oic, setOic] = React.useState(false);
  const [oicdev, setOicdev] = React.useState(false);
  const [oicpreprod, setOicpreprod] = React.useState(false);
  const [oicprod, setOicprod] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleBRBClick() {
    setBRB(!brb);
  }

  function handleWICIClick() {
    setWICI(!wici);
  }

  function handleEcommClick() {
    setEcomm(!ecomm);
  }
  
  function handleOICClick() {
	setOic(!oic);
  }

  function handleOICDevClick() {
	setOicdev(!oicdev);
  }

  function handleOICPreProdClick() {
	setOicpreprod(!oicpreprod);
  }
  function handleOICProdClick() {
	setOicprod(!oicprod);
  }

  return (
    <div className={classes.root}>
      
	  <AppBar position="static">
        <Toolbar>
		  <LinearProgress className={classes.progressBarWidth} variant="indeterminate" value={completed} valueBuffer={buffer} />          
          <Typography variant="h6" className={classes.title}>
            WICI / BRB SIMULATOR
          </Typography>
		  <LinearProgress className={classes.progressBarWidth} variant="query" value={completed} valueBuffer={buffer} />          
        </Toolbar>
      </AppBar>
      
	  	<List component="nav" aria-label="BRB Ecomm and OIC">
		  <ListItem button onClick={handleBRBClick}>
		        <ListItemIcon>
		          <StarIcon />
		        </ListItemIcon>
		        <ListItemText primary="BRB (BIG RED BUTTON)" />
		        {brb ? <ExpandLess /> : <ExpandMore />}
		    </ListItem>
				<Collapse in={brb} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
					<ListItem button onClick={handleEcommClick} className={classes.nested}>
						<ListItemIcon>
						<StarBorder />
						</ListItemIcon>
						<ListItemText primary="EComm (ECommerce Site)" />
						{ecomm ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={ecomm} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
						<ListItem button className={classes.nestedSpacingEight}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>		            
							<Link to='/BRBDev'>DEVELOPMENT</Link>
						</ListItem>
						<ListItem button className={classes.nestedSpacingEight}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<Link to='/BRBPrep'>PREPROD</Link>
						</ListItem>
						{/*<ListItem button className={classes.nestedSpacingEight}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<Link to='/BRBPrepwaf'>PREPROD(WAF)</Link>
                         </ListItem>*/}
						<ListItem button className={classes.nestedSpacingEight}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<Link to='/BRBProd'>PROD  (DO NOT TEST)</Link>						
						</ListItem>
						{/*<ListItem button className={classes.nestedSpacingEight}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<Link to='/BRBProdwaf'>PROD(WAF)</Link>
						</ListItem>*/}
						</List>
					</Collapse>
					<ListItem button onClick={handleOICClick} className={classes.nested}>
						<ListItemIcon>
						<StarBorder />
						</ListItemIcon>
						<ListItemText primary="OIC (Online Instant Credit)" />
						{oic ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={oic} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
						<ListItem button className={classes.nestedSpacingEight} onClick={handleOICDevClick}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<ListItemText primary="DEVELOPMENT" />
							{oicdev ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={oicdev} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://www-dev.ctal.ctc/content/dsa/en.html?cardType=OMX">Dev OMX</a>					
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://www-dev.ctal.ctc/content/dsa/en.html?cardType=OMZ">Dev OMZ</a>
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://www-dev.ctal.ctc/content/dsa/en.html?cardType=OMP">Dev OMP</a>
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://www-dev.ctal.ctc/content/dsa/en.html?cardType=OMR">Dev OMR</a>
							</ListItem>		          
							</List>
						</Collapse>		
						<ListItem button className={classes.nestedSpacingEight} onClick={handleOICPreProdClick}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<ListItemText primary="PREPROD" />
							{oicpreprod ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={oicpreprod} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://qa-mastercard.cantire.net/content/dsa/en.html?cardType=OMX">PreProd OMX</a>													
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://qa-mastercard.cantire.net/content/dsa/en.html?cardType=OMZ">PreProd OMZ</a>								
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://qa-mastercard.cantire.net/content/dsa/en.html?cardType=OMP">PreProd OMP</a>								
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://qa-mastercard.cantire.net/content/dsa/en.html?cardType=OMR">PreProd OMR</a>
							</ListItem>		          
							</List>
						</Collapse>		
						<ListItem button className={classes.nestedSpacingEight} onClick={handleOICProdClick}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<ListItemText primary="PROD (DO NOT TEST)"/>
							{oicprod ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={oicprod} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://mastercard.canadiantire.ca/content/dsa/en.html?cardType=OMX">Prod OMX</a>													
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://mastercard.canadiantire.ca/content/dsa/en.html?cardType=OMZ">Prod OMZ</a>								
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://mastercard.canadiantire.ca/content/dsa/en.html?cardType=OMP">Prod OMP</a>								
							</ListItem>
							<ListItem button className={classes.nestedSpacingTwelve}>
								<ListItemIcon>
								<StarBorder />
								</ListItemIcon>
								<a target="_blank" href="https://mastercard.canadiantire.ca/content/dsa/en.html?cardType=OMR">Prod OMR</a>
							</ListItem>		          
							</List>
						</Collapse>	         
					          
						</List>
					</Collapse>				          
				</List>
		    </Collapse>
				          
			
			<ListItem button onClick={handleWICIClick}>
		        <ListItemIcon>
					<StarIcon />
					</ListItemIcon>
					<ListItemText primary="WICI (WEB INSTANT CREDIT)" />
					{wici ? <ExpandLess /> : <ExpandMore />}
				</ListItem>	
				<Collapse in={wici} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<a target="_blank" href="http://dev8.ctal.ctc/WICISimulatorDev/index.html">DEVELOPMENT</a>					
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
							<StarBorder />
							</ListItemIcon>
							<a target="_blank" href="http://dev8.ctal.ctc/WICISimulatorPreprod/index.html">PREPROD</a>
						</ListItem>							          
					</List>
				</Collapse>	        	    			  			  
	      </List>
	      <Divider />      	  
    </div>
  );
}