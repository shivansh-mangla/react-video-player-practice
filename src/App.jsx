import React from 'react'
import './App.css'
import carVideo from './assets/carVideo.mp4'
import ReactPlayer from 'react-player'

const App = () => {
  return (
    <div className='app'>
      <h1>This is my practice app for video players</h1>

      <main>
        <div className="player-wrapper">
          <h2>Native html video</h2>
          <video
            width='100%'
            height='100%'
            controls
          >
            <source src={carVideo} type='video/mp4'/>
            couldnt load video
          </video>
        </div>

        <div className="player-wrapper">
          <h2>React-player example</h2>
          <div className="player-wrapper-2">
            <ReactPlayer
              src='https://youtu.be/4LjNzuSN5uI' 
              controls={true}
              style={{
                width: "100%",
                height: "100%",
                "--controls": "none",
              }}
            />
          </div>
        </div>

        <div className="player-wrapper">
          <h2>React-player example</h2>
          <div className="player-wrapper-2">
            <ReactPlayer
              src='https://youtu.be/4LjNzuSN5uI' 
              controls={true}
              style={{
                width: "100%",
                height: "100%",
                "--controls": "none",
              }}
            />
          </div>
        </div>

        <div className="player-wrapper">
          <h2>React-player example</h2>
          <div className="player-wrapper-2">
            <ReactPlayer
              src='https://youtu.be/4LjNzuSN5uI' 
              controls={true}
              style={{
                width: "100%",
                height: "100%",
                "--controls": "none",
              }}
            />
          </div>
        </div>

        <div className="player-wrapper">
          <h2>React-player example</h2>
          <div className="player-wrapper-2">
            <ReactPlayer
              src='https://youtu.be/4LjNzuSN5uI' 
              controls={true}
              style={{
                width: "100%",
                height: "100%",
                "--controls": "none",
              }}
            />
          </div>
        </div>

      </main>      
    </div>
  )
}

export default App