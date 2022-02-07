import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';



const rows = [
  {
      id: 1,
      Pax_Name: '@MUI',
      Contact: '0000020',
      PNR: 22,
      GSD_PNR: 22,
      Carrer: 'none',
      TotalFare: '8888',
      Sold: 'none',
      TimeLimit: 'null',
  },

];



const TemporaryBooking = ()=> {

  const [value, setValue] = React.useState(null);

  return <div>
  <Container maxWidth="md">
      <Box xs={{ mt: 5 }}>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
              >
                  <Typography>View Form</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  {/* .......................form............................ */}
                  <div>

                      <h1>Tempoary Booking</h1>
                      {/* <Box sx={{ bgcolor '#cfe8fc', height: '10:0vh' }} /> */}
                      <Box
                          component="form"
                          sx={{
                              '& > :not(style)': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                      >
                          <TextField
                              id="outlined-name"
                              label="Pax Name"
                          />
                          <TextField
                              id="outlined-name"
                              label="Contact"
                          />
                          <TextField
                              id="outlined-name"
                              label="PNR"
                          />
                          <TextField
                              id="outlined-name"
                              label="GSD PNR"
                          />
                          <TextField
                              id="outlined-name"
                              label="Carrer"
                          />
                          <TextField
                              id="outlined-name"
                              label="Total Fare"
                          />
                          <TextField
                              id="outlined-name"
                              label="Sold"
                          />
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                  label="Time Limit"
                                  value={value}
                                  onChange={(newValue) => {
                                      setValue(newValue);
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                              />
                          </LocalizationProvider>
                      </Box>
                      <Box sx={{ '& button': { m: 1 } }}> <div>
                          <Button variant="outlined" size="large">
                              Submit
                          </Button>
                          <Button color="secondary" variant="outlined" size="large">
                              Reset
                          </Button>
                      </div></Box>
                  </div>
              </AccordionDetails>
          </Accordion>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
              >
                  <Typography>View Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  {/* ...................Table............................ */}
                  <div style={{ height: 250, width: '100%' }}>
                      <DataGrid
                          columns={[{ field: 'Pax_Name', width: 100 },
                          { field: 'Contact', width: 100 },
                          { field: 'PNR', width: 100 },
                          { field: 'GSD_PNR', width: 100 },
                          { field: 'Carrer', width: 100 },
                          { field: 'TotalFare', width: 100 },
                          { field: 'Sold', width: 100 },
                          { field: 'TimeLimit', width: 100 }]}
                          rows={rows}
                      />
                  </div>
              </AccordionDetails>
          </Accordion>
      </Box>


  </Container>
</div>;
}

export default  TemporaryBooking;