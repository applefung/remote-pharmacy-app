import { Avatar, Box, Typography } from "@mui/material";

import Wrapper from "shared/Wrapper";
import { mockPharmacyData } from "../../constants/mock";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const pharmacy = mockPharmacyData.find((item) => item.id === Number(id));

  if (!pharmacy) {
    return "Pharmacy not found";
  }

  return (
    <Wrapper title="Pharmacy Detail">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Avatar />
        <Box>
          {
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gap="40px"
              border="1px solid grey"
              padding="10px"
              sx={{ color: "black" }}
            >
              <Typography variant="h6">Pharmacy ID: {id}</Typography>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Name</Typography>
                <Typography>{pharmacy?.name}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography>{pharmacy?.phone}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography>{pharmacy?.email}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Address</Typography>
                <Typography>{pharmacy?.address}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Specialty</Typography>
                <Typography>{pharmacy?.specialty}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>District</Typography>
                <Typography>{pharmacy?.district}</Typography>
              </Box>
            </Box>
          }
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Detail;
