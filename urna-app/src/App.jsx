import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonUrna from './componetes/Confirmar';

export default function ThreeBoxes() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{ display: 'flex', justifyContent: 'center' }}
        position="fixed"
      >
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
            <Container display={'flex'} flexDirection={'row'}>
            <Box display={'flex'} flexDirection={'row'} >
              <ButtonUrna className={"numeroVoto"} name={"1"}/>
              <ButtonUrna className={"numeroVoto"} name={"1"}/>
            </Box>
            <Box display= "flex" flexDirection={'column'}>
            <h2>CARGO</h2>
            <h2>NOME CANDITADO</h2>
            <h2>PARTIDO</h2>
            </Box>
            </Container>
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
            sx={{ border: '2px solid grey', bgcolor: '#4F4F4F', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
          >
            {/* Numeros pretos*/}
            <Box display={'flex'} flexDirection={'row'} >
              <ButtonUrna className={"numerico"} name={"1"} />
              <ButtonUrna className={"numerico"} name={"2"}  />
              <ButtonUrna className={"numerico"} name={"3"}  o />
            </Box>
            <Box display={'flex'} flexDirection={'row'} >
              <ButtonUrna className={"numerico"} name={"4"} />
              <ButtonUrna className={"numerico"} name={"5"} />
              <ButtonUrna className={"numerico"} name={"6"} />
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
              <ButtonUrna className={"numerico"} name={"7"} />
              <ButtonUrna className={"numerico"} name={"8"} />
              <ButtonUrna className={"numerico"} name={"9"} />
            </Box>
            <Box display={'flex'} flexDirection={'row'} >
              <ButtonUrna className={"numerico"} name={"0"} />
            </Box>

            {/* Botões de voto*/}
            <Box display="flex" position="relative" left="-15%" gap={1}>
              <ButtonUrna className={"branco"} name={"BRANCO"} />
              <ButtonUrna className={"corrige"} name={"CORRIGE"} />
              <ButtonUrna className={"confirmar"} name={"CONFIRMAR"} />
            </Box>

            {/* Conteúdo da terceira boz preta */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}