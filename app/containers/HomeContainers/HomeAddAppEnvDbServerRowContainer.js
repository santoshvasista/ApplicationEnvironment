import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeAddAppEnvDbServerRowComponent from '../../components/HomeComponents/HomeAddAppEnvDbServerRowComponent';
import HomeAddAppEnvDbServerApplicationDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeAddAppEnvDbServerApplicationDispatch';
import HomeAddAppEnvDbServerEnvironmentDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeAddAppEnvDbServerEnvironmentDispatch';
import HomeAddAppEnvDbServerDatabaseDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeAddAppEnvDbServerDatabaseDispatch';
import HomeAddAppEnvDbServerServerDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeAddAppEnvDbServerServerDispatch';


const mapStateToProps = (state, ownProps) => {
  let ListOfApplications = state.ApplicationEnvironment.ListOfApplications.map((a) => a.Name);;
  let ListOfEnvironments = state.ApplicationEnvironment.ListOfEnvironments.map((a) => a.Name);
  
  state.SaveAppEnvDbServer.forEach((s, index) => {
    if(index != ownProps.index) {
      if(s.AppName != null) {
        if(!ListOfApplications.includes(s.AppName))
            ListOfApplications.push(s.AppName);
      }
      if(s.EnvName != null) {
        if(!ListOfEnvironments.includes(s.EnvName))
            ListOfEnvironments.push(s.EnvName);
      }
    }
  })

  return {
    ListOfApplications: ListOfApplications,
    ListOfEnvironments: ListOfEnvironments,
    index : ownProps.index
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  AddUpdateApplication : value => {HomeAddAppEnvDbServerApplicationDispatch(ownProps.index, value, dispatch)},
  AddUpdateDatabase : value => {HomeAddAppEnvDbServerDatabaseDispatch(ownProps.index, value, dispatch)},
  AddUpdateEnvironment : value => {HomeAddAppEnvDbServerEnvironmentDispatch(ownProps.index, value, dispatch)},
  AddUpdateServer : value => {HomeAddAppEnvDbServerServerDispatch(ownProps.index, value, dispatch)},
})

const HomeAddAppEnvDbServerContainer = connect(mapStateToProps, mapDispatchToProps)(HomeAddAppEnvDbServerRowComponent)

export default HomeAddAppEnvDbServerContainer;