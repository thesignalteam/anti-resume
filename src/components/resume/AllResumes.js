import React, { Component } from "react";
import { Segment, Grid } from 'semantic-ui-react';
import "../../App.css";
import Top_tile from "../Top_tile";
import Scrolling_tile from "../Scrolling_tile";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class AllResumes extends Component {


    render() {
        return (
            <div className="App" id="all_resumes">
                <Segment vertical textAlign="center">

                    {/* 2020 */}
                    <div className="year_header">
                        <h4 className="classYear">2020</h4>
                    </div>
                    <Grid columns={5} relaxed>
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
    
                        <Grid.Column>
                            <Scrolling_tile />
                        </Grid.Column>
                    
                    </Grid>
                </Segment>
            </div>
        );
    }

}

export default AllResumes;