import React, { Component } from 'react';
import Grid from 'constructicon/grid';
import GridColumn from 'constructicon/grid-column';
import Section from 'constructicon/section';
import Button from 'constructicon/button'

export default class BasePage extends Component {

    clickHandler() {
        console.log('Click fired!')
    }

    render() {
        return (
            <div>
                <Grid styles={{ backgroundColor: 'lightyellow', color: 'brown', border: '1px dotted black' }}>
                    <GridColumn xs={1} lg={1} styles={{ padding: '1px' }} >
                    </GridColumn>
                    <GridColumn xs={1} lg={9}>
                    <br/>
                        <h2>{this.props.lSection}</h2>
                        <Section styles={{ border: '1px dotted black' }} background='shade'>
                            {this.props.mSection}
                        </Section>
                    </GridColumn>
                    <GridColumn xs={1} lg={2}>
                        <Section>
                            <br/>
                            {this.props.rSection}
                        </Section>
                    </GridColumn>
                    
                    <GridColumn xs={1} lg={8} styles={{ padding: 0, margin: 0 }}>
                    </GridColumn>
                    <GridColumn xs={1} lg={2} styles={{ padding: 0, margin: 0 }}>
                        <Section>
                            <h3>{this.props.lSection}</h3>
                        </Section>
                    </GridColumn>
                    <GridColumn xs={1} lg={2} styles={{ padding: 0, margin: 0 }}>
                    </GridColumn>
                </Grid>
            </div>
        );
    }
};
