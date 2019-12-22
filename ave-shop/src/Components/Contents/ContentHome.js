import React, { Component } from 'react';
import ContentSort from './ContentSort';
import ContentItems from './ContentItems';
import ContentDemoLookbook from './ContentDemoLookbook';

class ContentHome extends Component {
    render() {
        return (
            <div className="content__home">
                <ContentSort></ContentSort>
                <ContentItems></ContentItems>
                <ContentDemoLookbook></ContentDemoLookbook>
            </div>
        );
    }
}

export default ContentHome;