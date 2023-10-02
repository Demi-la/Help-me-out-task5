import React from 'react';
import { Box, Button, Video, AspectRatio, IconButton } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <Box>
      <video ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Button onClick={handlePlay} leftIcon={<FaPlay />}>
        Play
      </Button>
      <Button onClick={handlePause} leftIcon={<FaPause />}>
        Pause
      </Button> */}
    </Box>
  );
};

export default VideoPlayer;
