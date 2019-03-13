import React from 'react';
import Header from "./header/Header";
import { Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default class PageLayout extends React.Component {
    render() {
        const {header, data} = this.props;
        const LayoutItem = header[layoutName];



        return (
            <Route exact path={link} render={(props) =>
                <React.Fragment>
                    <Header header={header.headerItems} />
                    <Grid item xs={12}>
                        {
                            Object.keys(header.headerItems).map(function (entry) {
                                const item = header.headerItems(entry);
                                if ("layoutItem" in item) {
                                    return (
                                        <LayoutItem data={data}/>
                                    )
                                }
                            }, this)
                        }
                    </Grid>
                </React.Fragment>
            } />
        );

    }
}