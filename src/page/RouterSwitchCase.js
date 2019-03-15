import React from 'react';
import { Route } from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core';

export default class RouterSwitchCase extends React.Component {
    render() {
        const {data, layoutName, link, module_title} = this.props;
        const LayoutName = layoutName;

        /*          <Route exact
                   path={"/" + link} render={(props) =>
                <React.Fragment>
                    <Grid item xs={12}>
                        asdfg{link}
                        <LayoutName data={data} />
                    </Grid>

                </React.Fragment>
            } />*/
        return (

            <Route exact
                   path={"/" + link}
                   key={link + "5"}
                   render={(props)=>

                       <Grid item xs={12}>
                           {
                               module_title ? (
                                   <Typography variant="h5" gutterBottom>
                                       <br/>
                                       {module_title}
                                       <br/>
                                   </Typography>
                               ):(<div> </div>)
                           }
                           asdfg{link}
                           <LayoutName data={data} />
                       </Grid>
                   }
            />

        );

    }
}
