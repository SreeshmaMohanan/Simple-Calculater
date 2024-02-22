import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button } from '@mui/material';

function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [isPrincipleValid,setIsPrincipleValid]=useState(true)//validation
  const [israteValid,setIsrateValid]=useState(true)
  const [isyrValid,setIsyrValid]=useState(true)
  const validateInput=(e)=>{
    const {value,name}=e.target
    if(!!value.match(/^[0-9]+$/)){
      if(name==='principle'){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==='rate'){

        setRate(value)
        setIsrateValid(true)
        
      }else{
        setYear(value)
        setIsyrValid(true)
      }
      
    }else{
      if(name==='principle'){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==='rate'){
        setRate(value)
        setIsrateValid(false)

      }else{
        setYear(value)
        setIsyrValid(false);
      }
    }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("please fill the form")
    }else{
      setInterest(principle*rate*year/100)
      console.log(interest);
    }
  }
  const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleValid(true)
    setIsrateValid(true)
    setIsyrValid(true)
  }

  return (
    <div style={{ height: '100vh' }} className='w-100'>
      <div style={{ width: '500px' }} className=' bg-light rounded p-5'>
        <div className='heading'>
          <h3>Simple Calculater</h3>
          <p>Calculate your simple interest easily</p>
        </div>
        <div style={{ height: '150px' }} className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-warning text-light shadow">
          <h1>₹{' '}{interest} </h1>
          <p className='fw-bold'>  Total simple interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="₹ Principle amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
          </div>
          {/* isvalid -- validation*/}
          {
            !isPrincipleValid &&
            <div className='text-danger'>
              *Invalid input

          </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined"value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !israteValid &&
            <div className='text-danger'>
              *Invalid input

          </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="Time period ( Yr )" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isyrValid &&
            <div className='text-danger'>
              *Invalid input

          </div>
          }
          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{width:'200px',height:'70px'}} disabled={isPrincipleValid && israteValid && isyrValid?false:true} className='bg-dark' variant="contained" >Calculate</Button>
            <Button style={{width:'200px',height:'70px'}} variant="outlined" onClick={handleReset}>Reset</Button>

          </Stack>
        </form>

      </div>
    </div>
  );
}

export default App;
