import React from 'react';
import { TextField, Paper, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

export default class AddNewUser extends React.Component {
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        let first_name = ""; 
        let last_name = "";
        let email = "";
        let password = ""; 
        let role = "user";

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
  
    }
}
