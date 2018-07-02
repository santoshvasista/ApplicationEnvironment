
import React from 'react'

class PanelCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="card">
                <h6 className="card-header primary-color white-text" style={{backgroundColor: this.props.backgroundColor, color: this.props.color}}> {this.props.header}</h6>
                <div className="card-body"> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PanelCards;
