
import React from 'react';
import { Grid } from '@material-ui/core';
import MachineItem from './MachineItem';
import '../../css/machines.css';

export default class OverviewMachine extends React.Component {
    render() {
        const {data} = this.props;
        if(undefined !== data){
            return (
                <div style={{ padding: 20 }}>
                
                    <Grid container spacing={40}>
                        <Grid container
                              spacing={16}
                              alignItems={"stretch"}
                              justify={"flex-start"}
                        >
                            {
                                Object.keys(data.machines).map(function(entry){
                                    const machine = data.machines[entry];
                                    return(
                                        <MachineItem
                                            key={machine.id}
                                            machine_name={machine.name}
                                            machine_state={machine.state}
                                            machine_ID={machine.id}
                                        />
                                    )

                                }, this)
                            }
                        </Grid>

                    </Grid>
                </div>
            );
        } else {
            return(<div> keine Daten </div>)
        }


    }
}