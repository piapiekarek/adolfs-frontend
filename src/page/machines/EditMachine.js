import React from 'react';
import { TextField, Paper} from '@material-ui/core';

export default class EditMachine extends React.Component {
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {smartswitch_id} = this.props;
        alert(smartswitch_id)
        let simple_switch = false;
        let first_name, last_name;
        if (simple_switch) {
            return (
                <Paper style={{maxWidth: 650,}}>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="name"
                            label="Name"
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
                        />
                        <FormControl>
                            <InputLabel htmlFor="s-selection">Rolle</InputLabel>
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
