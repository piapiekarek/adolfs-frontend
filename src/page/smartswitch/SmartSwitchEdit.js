import React from 'react';
import { TextField, Paper} from '@material-ui/core';

export default class SmartSwitchEdit extends React.Component {
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
                        />
                        
                    </form>
                </Paper>
            );

        } else {
            return (null);
        }
    }
}
