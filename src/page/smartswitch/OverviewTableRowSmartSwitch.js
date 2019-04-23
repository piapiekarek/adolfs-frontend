import React from 'react';
import { TableCell, TableRow, Button, Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class OverViewTableRowSmartSwitch extends React.Component {
    render() {
        const {smartswitch_name, smartswitch_id, connected_cardreader_id, settingsForSubpages} = this.props;
        let LinkToEditSmartSwitch = true;


        return (

            <TableRow>
                <TableCell>
                    {smartswitch_name}
                </TableCell>
                <TableCell>
                    {smartswitch_id}
                </TableCell>
                <TableCell>
                    {connected_cardreader_id.join(", ")}
                </TableCell>
                <TableCell>
                    {LinkToEditSmartSwitch ?
                        <Tooltip title="Smart-Switch hinzufügen">
                            <Button>
                                <Icon color="primary">
                                    edit
                                </Icon>
                            </Button>
                        </Tooltip>
                        :
                        ""
                    }
                </TableCell>
            </TableRow>
        );

    }
}