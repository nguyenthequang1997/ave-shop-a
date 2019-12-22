import React, { Component } from 'react';

class ContentLookbookItem extends Component {
    render() {
        return (
            <div>
                <div className ="content__lookbook-item">
                  <img src={this.props.imglookbook} className="content__lookbook-img"/>
                  <div className="content__lookbook-text">
                  <h3 ><b>{this.props.namelookbook}</b><br />LOOKBOOK</h3><br />{this.props.textlookbook}
                 <br /><div className="btn btn-outline-dark">VIEW NOW</div>
                 </div>
                  </div>
                 
            </div>
        );
    }
}

export default ContentLookbookItem;