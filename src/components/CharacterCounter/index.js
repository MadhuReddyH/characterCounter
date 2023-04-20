import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const initialCharacterList = []

class CharacterCounter extends Component {
  state = {
    character: '',
    addCharacterList: initialCharacterList,
  }

  onAddCharacter = event => {
    event.preventDefault()
    const {character} = this.state
    const AddNewCharacter = {
      id: uuidv4(),
      character,
    }

    this.setState(prevState => ({
      addCharacterList: [...prevState.addCharacterList, AddNewCharacter],
      character: '',
    }))
  }

  onEnterTheText = event => {
    this.setState({character: event.target.value})
  }

  render() {
    const {character, addCharacterList} = this.state
    return (
      <div className="app-bg">
        <div className="no-input-card-bg">
          <h1 className="counting-heading">
            {' '}
            Count the characters like a Boss
          </h1>

          {addCharacterList.length === 0 ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            addCharacterList.map(eachChar => (
              <ul key={eachChar.id}>
                <li className="list-items">
                  {' '}
                  <p>
                    {`${eachChar.character} : ${eachChar.character.length} `}{' '}
                  </p>
                </li>
              </ul>
            ))
          )}
        </div>

        <div className="input-card-bg">
          <h1 className="counter-heading"> Character Counter </h1>
          <form onSubmit={this.onAddCharacter}>
            <input
              className="input"
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onEnterTheText}
              value={character}
            />

            <button className="add-button" type="submit">
              {' '}
              Add{' '}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
