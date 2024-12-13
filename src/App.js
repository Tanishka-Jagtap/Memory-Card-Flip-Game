import React, { Component } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/Blastoise.png", matched: false},
  {"src": "/img/Bulbasaur.png", matched: false},
  {"src": "/img/Charizard.png", matched: false},
  {"src": "/img/Ledian.png", matched: false},
  {"src": "/img/Pikachu.png", matched: false},
  {"src": "/img/Alakazam.png", matched: false}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      turns: 0,
      choiceOne: null,
      choiceTwo: null,
      disabled: false,
      matchedPairs: 0,
      showWinModal: false
    };
  }

  shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index + 1 }));

    this.setState({
      choiceOne: null,
      choiceTwo: null,
      cards: shuffleCards,
      turns: 0,
      matchedPairs: 0,
      showWinModal: false
    });
  };

  handleChoice = (card) => {
    const { choiceOne, choiceTwo, turns } = this.state;

    if (!choiceOne) {
      this.setState({ choiceOne: card });
    } else {
      this.setState({ choiceTwo: card, turns: turns + 1, disabled: true });
    }
  };

  resetTurn = () => {
    this.setState({
      choiceOne: null,
      choiceTwo: null,
      disabled: false
    });
  };

componentDidUpdate(prevProps, prevState) {
    const { choiceOne, choiceTwo, cards, showWinModal } = this.state;

    if (choiceOne && choiceTwo) {
        if (choiceOne.src === choiceTwo.src) {
            const updatedCards = cards.map((card) =>
                card.src === choiceOne.src ? { ...card, matched: true } : card
            );

            this.setState(
                {
                    cards: updatedCards,
                    disabled: false,
                    choiceOne: null,
                    choiceTwo: null
                },
                () => {
                    // Check for win condition after updating the state
                    const matchedPairs = updatedCards.filter((card) => card.matched).length / 2;
                    if (matchedPairs === cardImages.length && !showWinModal) {
                        this.setState({ showWinModal: true });
                    }
                }
            );
        } else {
            setTimeout(() => {
                this.setState({
                    disabled: false,
                    choiceOne: null,
                    choiceTwo: null
                });
            }, 1000);
        }
    }
}



  handleModalClose = () => {
    this.setState({ showWinModal: false });
    this.shuffleCards();
  };

  componentDidMount() {
    this.shuffleCards();
  }

  render() {
    const { cards, turns, disabled, choiceOne, choiceTwo, showWinModal } = this.state;

    return (
      <div className="App">
        <h1>Memory Card Flip Game</h1>
        <button onClick={this.shuffleCards}>Restart Game</button>

        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={this.handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>

        {showWinModal && (
          <div className="win-modal">
            <div className="win-modal-content">
              <h2>Congratulations!</h2>
              <p>You won the game in {turns} turns.</p>
              <button onClick={this.handleModalClose}>Play Again</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
