import React from 'react';
import { TextField, Paper, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

const roles = [
    {
      value: 'user',
      label: 'Anwender',
    },
    {
      value: 'supervisor',
      label: 'Supervisor',
    },
    {
      value: 'administrator',
      label: 'Administrator',
    },  
];

export default class EditUser extends React.Component {
    state={
        first_name : "",
        last_name : "", 
        email : "",
        password :"",
        role : "user"
       }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const {user_id} = this.props;
       
        const namevar = user_id;

        /* if(!user_id){
            Object.keys(this.props.data.specificUserData).forEach(entry=>{
                console.log(entry);
                console.log(this.props.data.specificUserData[entry]);

                if((namevar)===this.props.data.specificUserData[entry].id){
                    console.log("treffer!!");
                }
            })
        } else {
            
        } */
        
        let simple_switch = true;

        if (simple_switch) {
            return (
                <Paper style={{maxWidth: 650,}}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="first-name"
                            label="Vorname"
                            value={this.state.first_name}
                            margin="normal"
                            style={{marginRight: 20}}
                            autoFocus
                        />
                        <TextField
                            id="last-name"
                            label="Nachname"
                            value={this.state.last_name}
                            margin="normal"
                        /><br/>
                        <TextField
                            id="mail"
                            label="Email"
                            value={this.state.email}
                            margin="normal"
                            style={{marginRight: 20}}
                        />
                        <TextField
                            id="password"
                            label="Passwort"
                            value={this.state.password}
                            type="password"
                            margin="normal"
                        /><br/>
                        <TextField
                            id="outlined-select-role"
                            select
                            label="Rolle"
                            value={this.state.role}
                            onChange={this.handleChange('currency')}
                            helperText="Rolle auswählen"
                            margin="normal"
                            >
                            {roles.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                    </form>
                </Paper>
            );

        } else {
            return (null);
        }
    }
}
