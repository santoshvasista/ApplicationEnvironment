import React, { Component } from 'react'
import {MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeSearchContainer from '../containers/HomeContainers/HomeSearchContainer';
import HomeSearchResultContainer from '../containers/HomeContainers/HomeSearchResultContainer';
import '../../node_modules/mdbootstrap/css/bootstrap.min.css';

/* MuiThemeProvider - used for Material UI */
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{marginTop: "14%"}}>
          <div style={{ width: "33%", float: "left"}}>
            <div>
              <HomeSearchContainer/>
            </div>
          </div>
          
          <div style={{ width: "66%", float: "left", marginTop: "-8%"}}>
            <div style={{marginLeft: "3%"}} >
              <h5 className="card-header primary-color white-text" style={{backgroundColor: "#00bcd4", color: "white"}}> Application Information: </h5>
              <div className="card card-body">
                <HomeSearchResultContainer />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </MuiThemeProvider>
    )
  }
}

export default App;