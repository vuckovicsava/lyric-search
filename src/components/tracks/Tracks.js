import React, { Component } from 'react';
import { Consumer } from '../../context';
import Track from './Track';

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {({ track_list, heading }) => {
          if (track_list === undefined || track_list.length === 0) {
            return <h3>Loading...</h3>;
          } else {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track track={item.track} key={item.track.track_id} />
                  ))}
                </div>
              </>
            );
          }
        }}
      </Consumer>
    )
  }
}
