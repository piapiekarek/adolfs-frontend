
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MachineItem from './MachineItem';
import './css/machines.css';

export default class MachineView extends React.Component {
    render() {
        //const {data} = this.props;
        const data = {
            machines : [
                {
                    name: "test1",
                    state: "on",
                    id: "asdf1"
                },
                {
                    name: "test2",
                    state: "on",
                    id: "asdf2"
                },
                {
                    name: "test3",
                    state: "off",
                    id: "asdf3"
                },
                {
                    name: "test4",
                    state: "on",
                    id: "asdf4"
                }, 
                {
                    name: "test5",
                    state: "on",
                    id: "asdf5"
                },
                {
                    name: "test6",
                    state: "on",
                    id: "asdf6"
                },
                {
                    name: "test7",
                    state: "off",
                    id: "asdf7"
                },
                {
                    name: "test8",
                    state: "on",
                    id: "asdf8"
                }, 
            ]
        }
        return (
            <div style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item xl={12}>
                        <Typography variant="body2" gutterBottom>
                            Das hier ist die Maschinenansicht <br/>
                            Hier ist die Liste <br/>
                        </Typography>
                        
                    </Grid>
                    
                    <Grid container spacing={16} alignItems={"stretch"} justify={"flex-start"}>
                            {
                                Object.keys(data.machines).map(function(entry){
                                    const machine = data.machines[entry];
                                    return(
                                        <MachineItem key={machine.id} machine_name={machine.name} machine_state={machine.state} machine_ID={machine.id}/>
                                    )
                                }, this)
                            }
                    </Grid>
                     
                </Grid>
            </div>
        );

    }
}