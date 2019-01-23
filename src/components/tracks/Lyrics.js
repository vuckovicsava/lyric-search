import React, { Component } from 'react';
import axios from 'axios';

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined || 
      lyrics === undefined || 
      track === Object.keys(track).length === 0 || 
      Object.keys(lyrics).length === 0
    ) {
      return <h3>Loading...</h3>;
    } else {
      return <h1>Data</h1>;
    }
  }
}
