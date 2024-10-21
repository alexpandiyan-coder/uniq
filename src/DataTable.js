import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import './table.css';
import axios from 'axios';

function DataTable() {
  const [TableData, setTableData] = useState({
    name: '',
    batch: '',
    date: '',
    startTime: '',
    endTime: '',
    currentCompany: '',
    interviewCompany: ''
  });
  
  const [interviewData, setInterviewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:3003/interviewData');
      setInterviewData(res.data);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setTableData((state) => ({ ...state, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3003/interviewData', TableData);
      const res = await axios.get('http://localhost:3003/interviewData'); 
      setInterviewData(res.data); 
    } catch (error) {
      console.error('Error submitting form', error);
    }
  }

  return (
    <section>
      <div className="m-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={TableData.name}
            name="name"
            className="form-table"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            onChange={handleChange}
            value={TableData.batch}
            name="batch"
            className="form-table"
            placeholder="Enter Your Batch"
          />
          <input
            type="date"
            onChange={handleChange}
            value={TableData.date}
            name="date"
            className="form-table"
            placeholder="Enter Interview Date"
          />
          <input
            type="time"
            onChange={handleChange}
            value={TableData.startTime}
            name="startTime"
            className="form-table"
            placeholder="Enter Interview Start Time"
          />
          <input
            type="time"
            onChange={handleChange}
            value={TableData.endTime}
            name="endTime"
            className="form-table"
            placeholder="Enter Interview End Time"
          />
          <input
            type="text"
            onChange={handleChange}
            value={TableData.currentCompany}
            name="currentCompany"
            className="form-table"
            placeholder="Enter Your Current Company"
          />
          <input
            type="text"
            onChange={handleChange}
            value={TableData.interviewCompany}
            name="interviewCompany"
            className="form-table"
            placeholder="Enter Your Interview Company"
          />
          <input className="form-table" type="submit" value="Submit" />
        </form>
      </div>

      <Table striped bordered hover className="m-1">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Batch Details</th>
            <th>Interview Date</th>
            <th>Interview Start Time</th>
            <th>Interview End Time</th>
            <th>Current Company Name</th>
            <th>Interview Company Name</th>
          </tr>
        </thead>
        <tbody>
          {interviewData && interviewData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.batch}</td>
              <td>{data.date}</td>
              <td>{data.startTime}</td>
              <td>{data.endTime}</td>
              <td>{data.currentCompany}</td>
              <td>{data.interviewCompany}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default DataTable;
