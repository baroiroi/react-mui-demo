import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align='center'>Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    TableData.map((row) => (
                        <TableRow 
                        key={row.id}
                        sx={{ '&:last-child td, &: last-child th': {border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell align='center'>{row.gender}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    </TableContainer>
  )
}

const TableData = 
    [{
  "id": 1,
  "first_name": "Deedee",
  "last_name": "Cluitt",
  "email": "dcluitt0@booking.com",
  "gender": "Genderfluid",
  "ip_address": "161.124.50.82"
}, {
  "id": 2,
  "first_name": "Annadiane",
  "last_name": "Djorvic",
  "email": "adjorvic1@domainmarket.com",
  "gender": "Female",
  "ip_address": "142.42.213.70"
}, {
  "id": 3,
  "first_name": "Earle",
  "last_name": "Jansema",
  "email": "ejansema2@jiathis.com",
  "gender": "Male",
  "ip_address": "74.175.53.171"
}, {
  "id": 4,
  "first_name": "Lola",
  "last_name": "Audiss",
  "email": "laudiss3@aol.com",
  "gender": "Female",
  "ip_address": "226.28.30.144"
}, {
  "id": 5,
  "first_name": "Averell",
  "last_name": "Sambeck",
  "email": "asambeck4@thetimes.co.uk",
  "gender": "Male",
  "ip_address": "169.6.26.56"
}, {
  "id": 6,
  "first_name": "Myrtle",
  "last_name": "Malthus",
  "email": "mmalthus5@google.co.uk",
  "gender": "Female",
  "ip_address": "187.22.209.151"
}, {
  "id": 7,
  "first_name": "Tommy",
  "last_name": "Crich",
  "email": "tcrich6@chron.com",
  "gender": "Male",
  "ip_address": "130.41.223.172"
}, {
  "id": 8,
  "first_name": "Homere",
  "last_name": "Sloan",
  "email": "hsloan7@google.co.uk",
  "gender": "Male",
  "ip_address": "215.217.65.236"
}, {
  "id": 9,
  "first_name": "Donn",
  "last_name": "Bossons",
  "email": "dbossons8@themeforest.net",
  "gender": "Male",
  "ip_address": "92.112.79.9"
}, {
  "id": 10,
  "first_name": "Kitty",
  "last_name": "Scudamore",
  "email": "kscudamore9@buzzfeed.com",
  "gender": "Female",
  "ip_address": "217.15.57.8"
}]