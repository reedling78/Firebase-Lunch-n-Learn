import React, { Component } from 'react';
import './App.css';

import firebase from './firebase';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screen: null,
      assets: []
    }
  }

  componentDidMount(){
    firebase.firestore.collection('screens').doc('screen-1').onSnapshot(snap => {
      const data = snap.data()
      
      this.setState({
        screen: data
        
      })
    })

    firebase.firestore.collection('screens').doc('screen-1').collection('assets').onSnapshot(snap => {
      const assets = []
      snap.forEach(element => {
        assets.push(element.data())
      });
      
      this.setState({ assets: assets })
    })
  }


  render() {

    const styles = (this.state.screen) ? this.state.screen.styles : {}

    return (
      <div className="canvas" style={styles}>
        {this.state.assets.filter(f => f.type === 'IMAGE').map(asset => (
          <img src={asset.image} style={asset.styles} alt="whatever" />
        ))}

      {this.state.assets.filter(f => f.type === 'TEXT').map(asset => (
          <h1 style={asset.styles}>{asset.text}</h1>
        ))}


        {this.state.assets.filter(f => f.type === 'MENU').map(asset => (
          <ul style={asset.styles}>
            {asset.items.map(item => (
              <li>{item.name} {item.price}</li>
            ))}
          </ul>
        ))}


      </div>
    )
  }





}

export default App;
