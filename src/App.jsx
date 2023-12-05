import './App.css'
import Element from './components/element.component'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <div className='resultContainer'>
        <div className='resultSubtitle'>Your Result</div>
        <div className='resultScore'>
          <h1>76</h1>
          <h6>of 100</h6>
        </div>
        <div className='resultTitle'>
          <h2>Great</h2>
        </div>
        <div className='resultDescription'>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className='summaryContainer'>
        <div className='summaryTitle'>
          <h3>Summary</h3>
        </div>
        <div className='summaryElements'>
          <div className="summaryElement">
            <Element/>
          </div>
        </div>
        
        <div className='summaryActions'>
          <button>Continue</button>
        </div>
      </div>
    </div>
    
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/aiyangar">Gustavo A. Cárdenas</a>.
    </div>
    </>
  )
}

export default App
