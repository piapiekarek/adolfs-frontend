import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import UserTableRow from './UserTableRow';

export default class UserView extends React.Component {
    render() {
        //const {variable} = this.props;
        const tableHeading = {
            firstname: "Vorname",
            lastname: "Nachname",
            email: "Email-Adresse",
            id: "ID",
            password: "Passwort",
            role: "Rolle",            
        }

        const data = {
            users: [
                {
                    firstname: "test1",
                    lastname: "test1",
                    email: "test@test.de",
                    id: "test1",
                    password: "test1",
                    role: "supervisor",
                }, 
                {
                    firstname: "test2",
                    lastname: "test2",
                    email: "test@test.de",
                    id: "test2",
                    password: "test2",
                    role: "admin",
                },
                {
                    firstname: "test3",
                    lastname: "test3",
                    email: "test@test.de",
                    id: "test3",
                    password: "test3",
                    role: "supervisor",
                },
                {
                    firstname: "test4",
                    lastname: "test4",
                    email: "test@test.de",
                    id: "test4",
                    password: "test4",
                    role: "supervisor",
                }
            ]
            
        }

        return (
            <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Benutzerübersicht
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <Table>
                            <TableHead>
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
                            </TableHead>
                            <TableBody>
                                {
                                    Object.keys(data.users).map(function(entry){
                                        const user = data.users[entry];
                                        return(
                                            <UserTableRow 
                                                user_firstname={user.firstname} 
                                                user_lastname={user.lastname} 
                                                user_email={user.email} 
                                                user_role={user.role} 
                                                user_id={user.id}
                                            />
                                        )
                                    }, this)
                                }
                                
                            </TableBody>
                        </Table>
                    </Typography>
                </Grid>

        );

    }
}