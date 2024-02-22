import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function ThreeBoxes() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          height={700}
          width="100%"
          my={15}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey', bgcolor: '#d6dee9' }}
        >
          {/* Conteúdo da primeira boz branca */}
          <Box
            height={500}
            width="60%"
            my={15}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey', bgcolor: 'white', flexGrow: 1 }}
          >
            <img src="\src\componetes\image\Brasao.jpg" alt="Imagem"  height={300} width={800} />
          </Box>

          {/* Adicionando a terceira boz preta */}
          <Box
            height={500}
            width="30%"
            my={15}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            ml={4}
            sx={{ border: '2px solid grey', bgcolor: '#1a1d22', flexShrink: 0 }}
          >
            <Button variant="contained" color="success">
              Button
            </Button>
            {/* Conteúdo da terceira boz preta */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
} 