import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, TextField, InputLabel, MenuItem, Button, Checkbox, Switch, FormControlLabel } from '@material-ui/core';

const dropdownlist = {
  list1: [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
    {
      value: 'option3',
      label: 'Option 3',
    },
    {
      value: 'option4',
      label: 'Option 4',
    },
  ],
};

const StyledFormControlLabel = withStyles((theme) => ({
  root: {
    margin: '0px',
    justifyContent: 'flex-end',
    height: theme.spacing.unit * 2,
  },
  label: {
    color: `${theme.palette.common.darkWhite}`,
  },
}))(FormControlLabel);


const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    height: '100vh',
  },
  title: {
    padding: '1vh',
    paddingBottom: '1vh',
    borderBottom: `0.5px solid ${theme.palette.common.darkWhite}`,
  },
  textField: {
    width: '50%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    width: '20%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },
  textFieldMulti: {
    width: '50%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textLabel: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: theme.spacing.unit * 2,
  },
  checkboxClass: {
    marginLeft: theme.spacing.unit,
    height: theme.spacing.unit * 2,
  },
  correctValidation: {
  },
});

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        simpleTextField: '',
        simpleTextFieldMultiLine: '',
        password1: 'a.2',
        isPassword1: true,
        password2: 'Incorrect',
        isPassword2: false,
        isCheckbox1: false,
        email: '',
      },
    };
  }
  handleChange = (name, targetval = 'value') => (event) => {
    const val = event.target[targetval];
    this.setState((prevState) => ({
      formdata: {
        ...prevState.formdata,
        [name]: val,
      },
    }));
  };
  render() {
    const { classes } = this.props;
    const { simpleTextField, simpleTextFieldMultiLine, password1, password2, dropdown1, optiondesc, email, isCheckbox1, isCheckbox2 } = this.state.formdata;
    const isPassword1 = password1.length > 0 ? password1.indexOf('.') > 0 : true;
    const isPassword2 = password2.length > 0 && password1.length > 0 ? password1 === password2 : true;
    return (
      <Paper className={classes.root} elevation={0}>
        <Grid
          container
          spacing={8}
          justify="flex-start"
          style={{ height: '100%' }}
        >
          <Grid item xs={12}>
            <Paper elevation={0}>
              <Typography className={classes.title} variant="display2" >Form Elements</Typography>
            </Paper>
          </Grid>
          <Grid style={{ height: '90%' }} item xs={12}>
            <Grid
              container
              spacing={24}
              justify="space-around"
              style={{ height: '100%' }}
            >
              <Grid item xs={12} sm={4}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  {/* <Grid container spacing={24} justify='space-between' style={{ height: '100%', backgroundColor: 'rgba(0,155,0,0.1)' }}> */}
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="simple-text"
                        className={classes.textLabel}
                      >
                        Standard Text Field
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="simple-text"
                        className={classes.textField}
                        placeholder="Enter any text"
                        variant="outlined"
                        value={simpleTextField}
                        onChange={this.handleChange('simpleTextField')}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="simple-text-multiline"
                        className={classes.textLabel}
                      >
                        Standard MultiLine field Static
                                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="simple-text-multiline"
                        multiline
                        rows="6"
                        variant="outlined"
                        className={classes.textFieldMulti}
                        placeholder="You can write multiple lines"
                        value={simpleTextFieldMultiLine}
                        onChange={this.handleChange('simpleTextFieldMultiLine')}
                      />
                    </Grid>
                  </Grid>
                  {/* </Grid> */}
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item sm={10} xs={12}>
                      <Button variant="text" color="primary" className={classes.button}>Primary</Button>
                      <Button variant="contained" color="primary" className={classes.button}>Reset</Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  {/* <Grid container spacing={24} justify='space-between' style={{ height: '100%', backgroundColor: 'rgba(0,155,0,0.1)' }}> */}
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="password-1"
                        className={classes.textLabel}
                      >
                        Enter Password
                                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={!isPassword1}
                        id="password-1"
                        className={classes.textField}
                        type="Password"
                        value={password1}
                        variant="outlined"
                        onChange={this.handleChange('password1')}
                        autoComplete="current-password"
                        helperText={`${isPassword1 ? '' : 'Password must contain a dot(.) but not as the first character'}`}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ backgroundColor: 'rgba(255,0,0,0)', marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="dropdown-1"
                        className={classes.textLabel}
                      >
                        List of options
                                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="dropdown-1"
                        className={classes.textField}
                        select
                        value={dropdown1}
                        variant="outlined"
                        onChange={this.handleChange('dropdown1')}
                        placeholder="Select options"
                      >
                        {dropdownlist.list1.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="email"
                        className={classes.textLabel}
                      >
                        Email
                                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={!(email.length <= 2 || (email.length > 2 && email.indexOf('@') > -1))}
                        id="email"
                        className={classes.textField}
                        type="email"
                        value={email}
                        variant="outlined"
                        onChange={this.handleChange('email')}
                        helperText={`${email.length <= 2 || (email.length > 2 && email.indexOf('@') > -1) ? '' : 'Needs an \'@ \' to complete an email address'}`}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  {/* <Grid container spacing={24} justify='space-between' style={{ height: '100%', backgroundColor: 'rgba(0,155,0,0.1)' }}> */}
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginBottom: '24px' }}
                  >
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="password-2"
                        className={classes.textLabel}
                      >
                        Confirm Password
                                        </InputLabel>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password-2"
                        error={!isPassword2}
                        className={classes.textField}
                        type="Password"
                        value={password2}
                        variant="outlined"
                        onChange={this.handleChange('password2')}
                        autoComplete="current-password"
                        helperText={`${isPassword2 ? '' : 'Passwords do not match'}`}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ backgroundColor: 'rgba(255,0,0,0)', paddingTop: 5, paddingBottom: 5, marginBottom: '24px' }}
                  >
                    <Grid
                      container
                      spacing={8}
                      justify="space-around"
                    >
                      <Grid item xs={12}>
                        <InputLabel
                          htmlFor="optiondesc"
                          className={classes.textLabel}
                        >
                          {`${!dropdown1 ? 'Option Details' : `Option Details - ${dropdown1}`}`}
                        </InputLabel>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="optiondesc"
                          className={classes.textField}
                          disabled={!dropdown1}
                          multiline
                          rowsMax="6"
                          value={optiondesc}
                          variant="outlined"
                          placeholder={`${dropdown1 ? `Please describe ${dropdown1}` : 'Choose an Option'}`}
                          onChange={this.handleChange('optiondesc')}
                          helperText={`${dropdown1 ? 'This is a dynamic multiline' : 'will be enabled after you choose an option'}`}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={16}
                    justify="space-between"
                    align="space-between"
                    style={{ marginTop: '14px', marginBottom: '24px' }}
                  >
                    <Grid item sm={12} xs={12}>

                      <StyledFormControlLabel
                        style={{ width: '30%' }}
                        control={
                          <Checkbox
                            checked={isCheckbox1}
                            onChange={this.handleChange('isCheckbox1', 'checked')}
                            value="isCheckbox1"
                            color="primary"
                            style={{ padding: 5 }}
                          />
                        }
                        label="Are you Ok?"
                        labelPlacement="start"
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>

                      <StyledFormControlLabel
                        style={{ width: '30%' }}
                        control={
                          <Switch
                            checked={isCheckbox2}
                            onChange={this.handleChange('isCheckbox2', 'checked')}
                            value="isCheckbox2"
                            color="secondary"
                          />
                        }
                        label={`${isCheckbox2 ? 'You\'re on !' : 'You\'re off'}`}
                        labelPlacement="start"
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
Forms.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(Forms);
