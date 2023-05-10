
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
function App() {

  const [state, setData] = useState([])
  const [filtervalue, setfilterval] = useState("")
  const [searchapi, setsearchapi] = useState([])
  useEffect(() => {
    fetch("https://reqres.in/api/unknown").then((Sonu) => {
      Sonu.json().then((resp) => {
        setData(resp.data)
        setsearchapi(resp.data)
        // console.log(resp.data)
      })
    })
  }, [])
  console.log(filtervalue)
  function handlefilter(e) {
    console.log(e)
    if (e == '') {
      setData(searchapi )
    }
    else {
      const filterdata = searchapi.filter((item) => item.name.toLowerCase().includes(e.toLowerCase()))
      setData(filterdata)
    }
    setfilterval(e)
  }

  return (
    <> 
      <input placeholder='search' onChange={(e) => handlefilter(e.target.value)} ></input>
      <table border={1} bgcolor={"geen"}>
        <tr>
          <td bgcolor={"yellow"}>serial no.</td>
          <td bgcolor={"yellow"}>name</td>
          <td bgcolor={"yellow"}>year</td>
          <td bgcolor={"yellow"}>color</td>
          <td bgcolor={"yellow"}>values</td>
        </tr>


        {state?.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.pantone_value}</td>
            </tr>


          )
        }


      </table >
    </>
  )
}
export default App;
