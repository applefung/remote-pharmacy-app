import { Avatar, Box, Typography } from "@mui/material";

import SearchBar from "shared/SearchBar";
import Wrapper from "shared/Wrapper";
import { mockPharmacyData } from "../../constants/mock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Pharmacy {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  specialty: string;
  district: string;
}

const PharmacyList = () => {
  const navigate = useNavigate();
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>(mockPharmacyData);

  return (
    <Wrapper title="Pharmacy List" isAuth>
      <Box>
        <SearchBar
          placeholder="Search Pharmacy"
          onSubmit={(value: Record<"search", string>) => {
            const doctors = mockPharmacyData.filter(({ name }) =>
              name.toLowerCase().includes(value.search.toLowerCase())
            );
            setPharmacies(doctors);
          }}
        />
        <Box
          display="grid"
          gridTemplateColumns="auto auto auto"
          gap="40px"
          marginTop="10px"
        >
          {pharmacies.map(({ name, id }, index) => (
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              key={index}
              gap="40px"
              border="1px solid grey"
              padding="10px"
              onClick={() => navigate(`/doctors/${id}`)}
            >
              <Avatar />
              <Box>
                <Typography sx={{ color: "black" }}>{name}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default PharmacyList;
