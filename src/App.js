import React from 'react';
import firestore from './connections/firebaseDb';
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="400px" h="400px">
        hello world react
      </Box>
    </div>
  );
}

export default App;
