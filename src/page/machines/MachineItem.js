
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import '../../css/machines.css';

export default class MachineView extends React.Component {
    
    render() {
        const {machine_name, machine_ID, machine_state} = this.props;

        let ClassName = "red";
        if("on" === machine_state){
            ClassName = "green";
        } else {
            ClassName = "red";
        }

        return (
            <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                <Paper>
                    <div className={"machine_item"}>
                        <Typography variant="h5" gutterBottom>
                            {machine_name} 
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            ----------
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {machine_ID}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {machine_state}
                        </Typography>
                        <div className={"circle " + ClassName}> </div>
                    </div>
                       
                </Paper>
            </Grid>
            
        );

    }
}