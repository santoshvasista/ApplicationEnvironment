import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeAddAppEnvDbServerComponent from '../../components/HomeComponents/HomeAddAppEnvDbServerComponent';
import HomeAddAppEnvDbServerDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeAddAppEnvDbServerDispatch';

const mapStateToProps = (state) => {
  return {
    store : state.SaveAppEnvDbServer,
  }
}

const mapDispatchToProps = (dispatch) => ({
    AddRows : value => {HomeAddAppEnvDbServerDispatch(value, dispatch)}
})

const HomeAddAppEnvDbServerContainer = connect(mapStateToProps, mapDispatchToProps)(HomeAddAppEnvDbServerComponent)

export default HomeAddAppEnvDbServerContainer;