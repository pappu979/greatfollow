// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem } from "@mui/material";

// const currencyRates = { INR: 1, USD: 0.012 }; // Example conversion rate

// const servicesData = [
//   { id: 1, name: "Service A", price: 1000, currency: "INR" },
//   { id: 2, name: "Service B", price: 2000, currency: "INR" },
//   { id: 3, name: "Service C", price: 3000, currency: "INR" },
//   // Add more services as needed
// ];

// const ServiceTable = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currency, setCurrency] = useState("INR");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   const handleCurrencyChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   const filteredServices = servicesData.filter(service =>
//     service.name.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <Paper>
//       <div style={{ padding: "1rem" }}>
//         <TextField
//           label="Search Services"
//           variant="outlined"
//           fullWidth
//           onChange={handleSearch}
//           style={{ marginBottom: "1rem" }}
//         />
//         <Select value={currency} onChange={handleCurrencyChange}>
//           <MenuItem value="INR">INR</MenuItem>
//           <MenuItem value="USD">USD</MenuItem>
//         </Select>
//       </div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//             <TableCell>Id</TableCell>
//               <TableCell>Service Name</TableCell>
//               <TableCell>Price ({currency})</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredServices.map((service) => (
//               <TableRow key={service.id}>
//                 <TableCell>{service.id}</TableCell>
//                 <TableCell>{service.name}</TableCell>
//                 <TableCell>
//                   {(service.price * currencyRates[currency]).toFixed(2)} {currency}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// };

// export default ServiceTable;


import React, { useState } from 'react';
import { Table, Form, Button, Col, Row, Dropdown, InputGroup } from 'react-bootstrap';
import "./serviceTable.css";
import { FaFilter } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const currencyRates = { INR: 1, USD: 0.012 };

const ServiceTable = () => {
  const [currency, setCurrency] = useState('INR');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const services = [
    { id: 7706, service: '🚨 Instagram Reel Views [ New Extreme Ultrafast ] [ Real HQ ] [ Start: 0-20 sec ]-🆕', rate: '5.50', minOrder: 100, maxOrder: 9000000, },
    { id: 8024, service: '🚨 Instagram Reel Views [ Ultrafast ] [ Running in Update ]', rate: '6.50', minOrder: 100, maxOrder: 2147483647, },
    // Add more services as needed...
  ];

  const filteredServices = services
    .filter(service => service.service.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(service => selectedFilter === 'All' || service.service.includes(selectedFilter));

  const filters = [
    'All',
    'Instagram Reel Views',
    'Instagram Reel Likes',
    'Instagram Reel Comments',
    'Special Service',
    'Celebrity & Influencers Choice',
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="p-3">
      <Row className="mb-3">
        <Col md={2}>
          {/* Filter Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="filter-dropdown" style={{
              display: 'flex',
              alignItems: 'center', padding: "10px 16px", justifyContent: 'center', backgroundColor: "#034a74", color: "#fff", fontWeight: "bold", fontSize: "15px"
            }}>
              <FaFilter style={{ marginRight: "5px" }}></FaFilter>{selectedFilter}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {filters.map((filter, idx) => (
                <Dropdown.Item key={idx} onClick={() => handleFilterChange(filter)}>
                  {filter}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={2}>
          <Form.Select value={currency} onChange={handleCurrencyChange} style={{
            padding: "10px 16px",
            backgroundColor: "#1e79e4", fontSize: "15px", fontWeight: "bold", color: "#fff"
          }}>
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
          </Form.Select>
        </Col>
        <Col md={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: "10px 16px" }}
            />
            <InputGroup.Text style={{ backgroundColor: "#78afef", color: "#fff", opacity: "0.8", padding: "10px 16px" }}>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      <Table responsive>
        <thead>
          <tr>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>ID</th>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>Service</th>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>Rate per 1000</th>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>Min order</th>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>Max order</th>
            <th style={{ backgroundColor: "rgba(40, 126, 177, 1)", color: "#fff", fontWeight: "bold" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map(service => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.service}</td>
              <td>{(service.rate * currencyRates[currency]).toFixed(2)} {currency}</td>
              <td>{service.minOrder}</td>
              <td>{service.maxOrder}</td>
              <td><Button variant="primary">View</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ServiceTable;
