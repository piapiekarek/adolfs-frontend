import React from 'react';
import { TextField, Paper, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

export default class UserView extends React.Component {
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {user_id} = this.props;
        console.log("test");
        console.log(this.state);
       
        const namevar = user_id;

        let first_name; 
        let last_name;
        let email;
        let password; 
        let role;

        if(!user_id){
            Object.keys(this.props.data.specificUserData).forEach(entry=>{
                console.log(entry);
                console.log(this.props.data.specificUserData[entry]);

                if((namevar)===this.props.data.specificUserData[entry].id){
                    console.log("treffer!!");
                }
            })
        } else {
            first_name = "";
            last_name = "";
            email = "";
            password = "";
            role = "user";
        }
        let simple_switch = true;

        if (simple_switch) {
            return (
                <Paper style={{maxWidth: 650,}}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="first-name"
                            label="Vorname"
                            value={first_name}
                            margin="normal"
                            style={{marginRight: 20}}
                            autoFocus
                        />
                        <TextField
                            id="last-name"
                            label="Nachname"
                            value={last_name}
                            margin="normal"
                        /><br/>
                        <TextField
                            id="mail"
                            label="Email"
                            value={email}
                            margin="normal"
                            style={{marginRight: 20}}
                        />
                        <TextField
                            id="password"
                            label="Passwort"
                            value={password}
                            type="password"
                            margin="normal"
                        /><br/>
                        <FormControl>
                            <InputLabel htmlFor="role-selection">Rolle</InputLabel>
                            <Select
                                value={role}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'role',
                                    id: 'role-selection',
                                }}
                            >
                            <MenuItem value={"user"}>Anwender</MenuItem>
                                <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                                <MenuItem value={"administrator"}>Administrator</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </Paper>
            );

        } else {
            return (null);
        }
    }
}
