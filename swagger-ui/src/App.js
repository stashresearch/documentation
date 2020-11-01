import React from 'react'
import './App.css'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

const DOM_ID = 'swagger-ui-mountpoint'

const DisableTryItOutPlugin = function() {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false
        }
      }
    }
  }
}

class App extends React.Component {

  componentDidMount () {
    SwaggerUI({
      dom_id: `#${DOM_ID}`,
      url: "https://stashresearch.org/documentation/openapi.json",
      plugins: [
        DisableTryItOutPlugin
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <div id={ DOM_ID }></div>
      </div>
    )
  }
}

export default App
