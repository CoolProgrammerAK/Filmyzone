import React, { Component } from 'react'
class Loading extends Component {
    render() {
        return (
            <>
            <div style={{    position: 'fixed',
                left: 0,background:'black',
                top: 0,
                width:'100%',display:'flex',alignItems:'center',justifyContent:'center',
                height: '100%'}}>
              <img src="/loading.gif" alt="dfs"></img>
            </div>
            </>
        )
    }
}

export default Loading
