import './App.css'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <div className='resultContainer'>
        <div className='subtitle'>Your Result</div>
        <div className='result'>
          <h1>76</h1>
          <h6>of 100</h6>
        </div>
        <div className='title'>
          <h2>Great</h2>
        </div>
        <div className='description'>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className='summaryContainer'></div>
    </div>
    
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/aiyangar">Gustavo A. Cárdenas</a>.
    </div>
    </>
  )
}

export default App
