import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from './userinfoActions';
import A from './A';
import B from './B';
import C from './C';


class Hello extends  Component{
    render(){
        return (
            <div>
                <p>HelloWrold</p>
                <hr />
                <A userinfo = { this.props.userinfo } />
                <B userinfo = { this.props.userinfo } />
                <C actions = { this.props.userinfoActions } />
            </div>
        )
    }
    componentDidMount() {
        this.props.userinfoActions.login({
            userid : 'abc',
            city : 'beijing',
        })
    };
};



function mapStateToProps(state){
    console.log(state)
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions : bindActionCreators(userinfoActions, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);
