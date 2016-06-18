import React from 'react'
import { render } from 'react-dom'

render(<AppContainer />, document.getElementById('container'))


/*
function renderComponent() {
    render(<ArticleList articles = {articleStore.getAll()} />, document.getElementById('container'))
}

renderComponent()

articleStore.addChangeListener(renderComponent)
*/