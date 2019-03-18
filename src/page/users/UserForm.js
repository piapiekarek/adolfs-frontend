import React from 'react';
import { TextField, Paper, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

export default class UserView extends React.Component {
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {first_name, last_name, email, password, role} = this.props;


        return (
            <Paper style={{maxWidth: 650, }}>
                <form noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    label="Vorname"
                    value={first_name}
                    sz
                    margin="normal"
                    style={{marginRight: 20}}
                    autoFocus
                    />
                    <TextField
                        id="standard-name"
                        label="Nachname"
                        value={last_name}
                        sz
                        margin="normal"
                    /><br/>
                    <TextField
                        id="standard-name"
                        label="Email"
                        value={email}
                        sz
                        margin="normal"
                        style={{marginRight: 20}}
                    />
                    <TextField
                        id="standard-name"
                        label="Passwort"
                        value={password}
                        displayEmpty
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
                            <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                            <MenuItem value={"administrator"}>Administrator</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </Paper>
        );

    }
}