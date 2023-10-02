import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import ChromeStore from './components/ChromeStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoReady from './components/VideoReady';

import VideoRepository from './components/VideoRepository';
import SingleVideoPage from './components/SingleVideoPage';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={"'Work Sans', sans-serif"}>
      

        <Router>
          <Routes>
            <Route exact path="/" element={<ChromeStore />} />
            <Route exact path="/videoready" element={<VideoReady />} />
            <Route
              exact
              path="/VideoRepository"
              element={<VideoRepository />}
            />
            <Route
              exact
              path="/singlevideopage"
              element={<SingleVideoPage />}
            />
            {/* <Route path="/movies/:id" element={<SingleVideoPage />} /> */}
       
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
