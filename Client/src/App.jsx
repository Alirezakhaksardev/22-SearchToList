import { useEffect, useState } from "react";
import { Users } from "./users";
import Table from "./Table";
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  // const keys = ["first_name" , "last_name" , "email"]
  // const search = (data) => {
  //   let new_data = data.filter((item) => 
  //     keys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))
  //   );
  //   return new_data
  // }

  const [data , setData] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data)
    }
    fetchUsers();
  } , [query])

  return (
    <div className="app">
      <input type="text" placeholder="جستجو..." className="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Table data={data ? data : []} />
    </div>
  );
}

export default App;
