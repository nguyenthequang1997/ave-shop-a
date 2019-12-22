import React, { Component } from 'react';
import './Content.css';
import ContentLookbookItem from './ContentLookbookItem';

class ContentDemoLookbook extends Component {
    render() {
        return (
            <div>
                
                <div className="content__lookbook-demo">
                    <div className="container-fluid">
                        <div className="row">
                            <ContentLookbookItem 
                            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                            imglookbook="./image/men.png" namelookbook="MEN'S"
                            textlookbook="Lorem ipsum amet consectetur adipisicing elit. Qui officia 
                            ipsam labore, officiis laboriosam quos maiores vel vitae ipsa magni ">
                            </ContentLookbookItem>
                            <ContentLookbookItem 
                            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                            imglookbook="./image/women.png" namelookbook="WOMEN'S"
                            textlookbook="Lorem ipsum amet consectetur adipisicing elit. Qui officia 
                            ipsam labore, officiis laboriosam quos maiores vel vitae ipsa magni ">

                            </ContentLookbookItem>
                            <ContentLookbookItem 
                            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                            imglookbook="./image/your.png" namelookbook="YOUR'S"
                            textlookbook="Lorem ipsum amet consectetur adipisicing elit. Qui officia 
                            ipsam labore, officiis laboriosam quos maiores vel vitae ipsa magni ">

                            </ContentLookbookItem>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentDemoLookbook;