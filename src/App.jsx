import "boxicons";

// import { useEffect } from "react"
// import { useReducer } from "react"
// const API_KEY="32b7a5b5e839b0591ed01ab390d97473"
// const initialState={
//   initialCity:"rasht",
//   searchQuery:"",
//   currentCityData:{},
// }
// const reducer=(state,action)=>{
//   switch(action.type){
//     case "setCity":return{
//       ...state,searchQuery:action.payload
//     }
//     case "setCurrentCityData":return{
//       ...state,currentCityData:action.payload
//     }
//     default:throw new Error("action type not defined")
//   }
// }
function App() {
  // const [{searchQuery,currentCityData,initialCity},dispatch]=useReducer(reducer,initialState)
  // useEffect(()=>{
  //   async function fetchData(){
  //     try {
  //       const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${initialCity}&appid=${API_KEY}`)
  //       const data=await res.json()
  //       dispatch({type:"setCurrentCityData",payload:data})
  //       console.log(data)

  //     } catch (error) {
  //       console.error(error)
  //     }
  //         }
  //         fetchData()
  // },[initialCity])
  // const handleSubmit=()=>{
  //   async function fetchData(){
  //     try {
  //       const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`)
  //       const data=await res.json()
  //       dispatch({type:"setCurrentCityData",payload:data})
  //       console.log(data,currentCityData)

  //     } catch (error) {
  //       console.error(error)
  //     }
  //         }
  //         fetchData()
  // }

  // https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=07d957dba5a7f571e543ee9af0f213d7

  return (
    <>
      {/* <form action="" onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
        }}>
        <input type="text" name="query" placeholder="Enter your city name" value={searchQuery} onChange={(e)=>{dispatch({type:"setCity",payload:e.target.value})}}/>
        <button disabled={searchQuery?false:true}>submit</button>
      </form> */}
      <div className="max-w-[1366px] overflow-hidden font-Edu-SA">
        <div className="flex w-full bg-slate-900 p-5">
          <div className="text-gray-400 w-full p-5 flex flex-col gap-10">
            <div className="text-right text-white">
              <p>21 April 2023 | 11:00</p>
            </div>
            <div>
              <div className="text-center flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <h1 className="text-9xl">Rasht , IR</h1>
                  <h1 className="text-5xl">Heavy Rain</h1>
                </div>
                {/* <div className="bg-gray-400 h-[1px] w-full rounded-full"></div> */}
                <div className="flex justify-center items-center gap-5">
                  <div>humidity</div>
                  <div>humidity</div>
                  <div>humidity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 text-gray-100 h-screen w-auto p-5">
            <div className="relative">
              <span className="absolute left-0 top-1">
                <box-icon name="location-plus" color="#ffffff"></box-icon>
              </span>
              <input
                type="text"
                className="w-full h-8 rounded text-white bg-white bg-opacity-10 text-center"
              />
            </div>
            <div className="flex-col">
              <div className="text-7xl">
                <span>11</span>
                <span>°C</span>
              </div>
              <div>
                <p>North west 38 km/h</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-slate-600"></div>
            <div>
              <p>The Next Days Forecast</p>
            </div>
            <div>
              <div>
                <ul className="flex gap-1">
                  <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">5 days</li>
                  <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">14 days</li>
                  <li className="bg-black bg-opacity-20 w-16 text-center p-1 rounded">30 days</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-1">
                  <li>
                    <div className="flex justify-between p-1 items-center">
                      <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                        <box-icon name="cloud" color="#ffffff"></box-icon>
                      </div>
                      <div className="flex flex-col">
                        <span>Friday</span>
                        <span>Cloudy</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>14</span>
                        <span>17</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between p-1 items-center">
                      <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                        <box-icon name="cloud" color="#ffffff"></box-icon>
                      </div>
                      <div className="flex flex-col">
                        <span>Friday</span>
                        <span>Cloudy</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>14</span>
                        <span>17</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between p-1 items-center">
                      <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                        <box-icon name="cloud" color="#ffffff"></box-icon>
                      </div>
                      <div className="flex flex-col">
                        <span>Friday</span>
                        <span>Cloudy</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>14</span>
                        <span>17</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between p-1 items-center">
                      <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                        <box-icon name="cloud" color="#ffffff"></box-icon>
                      </div>
                      <div className="flex flex-col">
                        <span>Friday</span>
                        <span>Cloudy</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>14</span>
                        <span>17</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between p-1 items-center">
                      <div className="bg-white bg-opacity-10 inline-flex justify-center items-center p-1 rounded">
                        <box-icon name="cloud" color="#ffffff"></box-icon>
                      </div>
                      <div className="flex flex-col">
                        <span>Friday</span>
                        <span>Cloudy</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>14</span>
                        <span>17</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
{
  /* <box-icon name='cloud' color='#ffffff' ></box-icon>
<box-icon name='cloud-drizzle' color='#ffffff' ></box-icon>
<box-icon name='cloud-light-rain' color='#ffffff' ></box-icon>
<box-icon name='cloud-lightning' color='#ffffff' ></box-icon>
<box-icon name='cloud-rain' color='#ffffff' ></box-icon>
<box-icon name='cloud-rain' color='#ffffff' ></box-icon>
<box-icon name='wind' color='#ffffff' ></box-icon>
<box-icon name='sun' color='#ffffff' ></box-icon> */
}
