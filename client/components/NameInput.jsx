import React from 'react'

import {appendWidget, addName} from '../api'

export default class AddName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: '',
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    appendWidget(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <p><input placeholder='Rating' name='rating'
            onChange={this.handleChange}
            value={this.state.rating}
          /></p>
          <button type='button' onClick={this.addWidget}>Add widget</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}