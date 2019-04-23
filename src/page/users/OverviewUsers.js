import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableHead, Tooltip } from '@material-ui/core';
import UsersOverviewTableRow from './OverviewTableRowUsers';
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import {Button, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class OverviewUsers extends React.Component {
    render() {
        const {data, settingsForSubpages} = this.props;
        const tableHeading = {
            firstname: "Vorname",
            lastname: "Nachname",
            email: "Email-Adresse",
            id: "ID",
            password: "Passwort",
            role: "Rolle",   
            edit:"Bearbeiten",         
        };

        if(data) {
            return (
                <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {tableHeading.firstname}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.lastname}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.email}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.role}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.id}
                                    </TableCell>
                                    <TableCell>
                                        {tableHeading.edit}
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    Object.keys(data.users).map(function (entry) {
                                        const user = data.users[entry];
                                        return (
                                            <UsersOverviewTableRow
                                                key={user.id}
                                                user_firstname={user.first_name}
                                                user_lastname={user.last_name}
                                                user_email={user.email}
                                                user_role={user.role}
                                                user_id={user.id}
                                                settingsForSubpages={settingsForSubpages}
                                                data={data}
                                            />
                                        )
                                    }, this)
                                }

                            </TableBody>
                        </Table>

                        <div className={"button-add-new"}>
                            <Tooltip title="Benutzer hinzufügen">
                                <Link to={"/adduser"} className={"icon-link"}>
                                    <Button >
                                        <Icon color="primary" fontSize="large">
                                            add_circle
                                        </Icon>
                                    </Button>
                                </Link>
                            </Tooltip>
                        </div>
                    </Typography>
                </Grid>

            );
        } else {
            return("keine Daten")
        }

    }
}