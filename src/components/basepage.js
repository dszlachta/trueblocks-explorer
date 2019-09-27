import React, { Component } from 'react';
import Grid from 'constructicon/grid';
import GridColumn from 'constructicon/grid-column';
import Section from 'constructicon/section';
//import Button from 'constructicon/button'

export default class BasePage extends Component {

    clickHandler() {
        console.log('Click fired!')
    }

    render() {
        return (
            <div>
                <Grid>

                    <GridColumn xs={1} lg={1}>
                    </GridColumn>

                    <GridColumn xs={1} lg={10}>
                        <Section styles={{ border: '1px dotted black' }} background='shade'>
                            {this.props.mSection}
                        </Section>
                    </GridColumn>

                    <GridColumn xs={1} lg={1}>
                    </GridColumn>
                    
                    <GridColumn xs={2} lg={12}>
                        <br />
                    </GridColumn>

                </Grid>
            </div>
        );
    }
};
