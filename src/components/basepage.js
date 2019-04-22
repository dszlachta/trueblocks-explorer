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
                <Grid>
                    <GridColumn xs={1} lg={1}>
                        <Section background='primary' foreground='light'>
                            <h3>{this.props.lSection}</h3>
                            <div><p></p></div>
                            <Button background='tertiary' size={-1} onClick={this.clickHandler.bind(this)}>
                                {this.props.lButton}
                            </Button>
                        </Section>
                    </GridColumn>
                    <GridColumn xs={1} lg={9}>
                        <Section background='shade'>
                            {this.props.mSection}
                        </Section>
                    </GridColumn>
                    <GridColumn xs={1} lg={2}>
                        <Section background='secondary'>
                            {this.props.rSection}
                        </Section>
                    </GridColumn>
                </Grid>
            </div>
        );
    }
};
