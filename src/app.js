import React from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/AppContainer'
import store from './stores'

render(<AppContainer store={store} />, document.getElementById('container'))


/*
function renderComponent() {
    render(<ArticleList articles = {articleStore.getAll()} />, document.getElementById('container'))
}

renderComponent()

articleStore.addChangeListener(renderComponent)
*/