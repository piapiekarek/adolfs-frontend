import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import CardReaderOverViewTableRow from './CardReaderOverViewTableRow';

export default class CardReaderOverView extends React.Component {
    render() {
        const {data, settingsForSubpages} = this.props;
        const tableHeading = {
            name: "Name",
            interval: "Aktivitätszeit",
            role: "Rolle",
            id: "ID",
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
                                        {tableHeading.interval}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.role}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.id}
                                    </TableCell>
                                    <TableCell>

                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    Object.keys(data.cardreaders).map(function (entry) {
                                        const cardreader = data.cardreaders[entry];
                                        return (
                                            <CardReaderOverViewTableRow
                                                key={cardreader.id}
                                                cardreader_name={cardreader.name}
                                                cardreader_role={cardreader.role}
                                                cardreader_id={cardreader.id}
                                                cardreader_interval={cardreader.interval}
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