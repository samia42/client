import { Container } from "@mui/system";
import { useState } from "react";
import ColorContainer from "./components/ColorContainer";
import Company from "./components/Company";
import image1 from './assets/company1.jpg'
import image2 from './assets/company2.jpg'
import image3 from './assets/company3.jpg'
import { Box, Button } from "@mui/material";

function App() {

  const [selectedCompany, setSelectedCompany] = useState();
  const companies = [
    {
      title: 'company 1',
      image: image1
    },
    {
      title: 'company 2',
      image: image2
    },
    {
      title: 'company 3',
      image: image3
    }
  ]
  const handleCompanyClick = (index) => {
    console.log(companies[index], 'index')
    setSelectedCompany(companies[index]);
  };
  return (
    <>
      <Container sx={{ display: 'flex', maxWidth: 'md', justifyContent: 'center' }}>
        {companies.map((company, index) => (
          <Box sx={{ bgcolor: '#cfe8fc', margin: '10px' }} >
            {company.title}
            <Button key={index} onClick={() => handleCompanyClick(index)}>
              View
            </Button>
          </Box>
        ))}

      </Container>
      <Box>
        {selectedCompany ? <Company company={selectedCompany} /> : null}
      </Box>



    </>
  );
}

export default App;
