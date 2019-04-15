import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import SmartSwitchOverViewTableRow from './SmartSwitchOverViewTableRow';
import TableRow from "@material-ui/core/es/TableRow/TableRow";

export default class SmartSwitchOverView extends React.Component {
    render() {
        const {data, settingsForSubpages} = this.props;
        const tableHeading = {
            name: "Name",
            id: "ID",
            cardreader_id: "Verbundene Card Reader",
        };

        if(data) {
            return (
                <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {tableHeading.name}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.id}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.cardreader_id}
                                    </TableCell>
                                    <TableCell>
                                        Bearbeiten
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    Object.keys(data.smartswitches).map(function (entry) {
                                        const smartswitch = data.smartswitches[entry];
                                        return (
                                            <SmartSwitchOverViewTableRow
                                                key={smartswitch.id}
                                                smartswitch_name={smartswitch.name}
                                                connected_cardreader_id={smartswitch.cardreader_id}
                                                smartswitch_id={smartswitch.id}
                                                settingsForSubpages={settingsForSubpages}
                                                data={data}
                                            />
                                        )
                                    }, this)
                                }

                            </TableBody>
                        </Table>
                    </Typography>
                </Grid>

            );
        } else {
            return("keine Daten")
        }

    }
}