import React from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'https://www.youtube.com/watch?v=pS-gbqbVd8c';

// some track meta information
const trackTitle = 'Great song by random artist';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;
  console.log(this.props)
  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});

class SongPlayer extends React.Component {
  render() {
    return (
      <AWSSoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle}
        preloadType="metadata" />
    );
  }
}
export default SongPlayer;
