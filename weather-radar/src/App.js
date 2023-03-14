import './App.css';


function App() {

  const cityList = [
    {
      id: 1,
      name: "Boston",
      zipCode: "02111",
      country: {
        id: "US",
        name: "United States"
      },
      admin: {
        id: "MA",
        name: "Massachusetts",
        type: "State"
      }
    },
    {      
      id: 2,
      name: "Los Angeles",
      zipCode: "90048",
      country: {
        id: "US",
        name: "United States"
      },
      admin: {
        id: "CA",
        name: "California",
        type: "State"
      }
    },
    {      
      id: 3,
      name: "New York City",
      zipCode: "10001",
      country: {
        id: "US",
        name: "United States"
      },
      admin: {
        id: "NY",
        name: "New York",
        type: "State"
      }
    }
   ];

   const handleDisplayInput = (e) => {
    console.log(e.target.value)
   }

   const CityDisplay = (props) => {
    return(
    props.list.map(
      cityList=> (
      <ul key={cityList.id}>
        <li>{cityList.name}, {cityList.admin.id}, {cityList.country.id}</li>
      </ul>
    )
    )
    )
  }

  return (
    <div className='inputDisplay'>
      <h1>Weather Radar</h1>
      <label htmlFor='city-name'>city: </label>
      <input id='city-name' name='city-name' type='text' onChange={handleDisplayInput}></input>
      <hr />
      <CityDisplay list = {cityList} />
    </div>
  )
}

export default App;
