# **Memory Card Flip Game**

A React-based memory card matching game that challenges players to match all card pairs in the fewest possible turns. This project serves as a fun and interactive example of React component development, state management, and dynamic UI updates.

## Features

1. **Dynamic Card Shuffling**: Cards are shuffled randomly at the start of each game.

2. **Turn Tracking**: The game tracks the number of turns taken to match all pairs.

3. **Matched Pair Detection**: Cards stay flipped once matched.

4. **Win Condition**: A congratulatory message appears when all pairs are matched.

5. **Restart Option**: Restart the game anytime with a single click.

## Screenshots

Initial -

![image](https://github.com/user-attachments/assets/2ce0d68e-80e9-495f-afc9-e6179efb66bd)

Winning -

![image](https://github.com/user-attachments/assets/f6f1d52d-0928-4080-9473-850fcd9ffe14)

## Technologies Used

1. **React.js:** For building the interactive UI.

2. **CSS:** For styling the components.

## How to Run

### Prerequisites

- Node.js installed on your system.

- Basic understanding of React.

## Setup

- Clone the repository:

```
git clone https://github.com/yourusername/memory-card-flip-game.git
```

- Navigate to the project directory:

```
cd memory-card-flip-game
```

- Install dependencies:

```
npm install
```

- Start the development server:

```
npm start
```

- Open the game in your browser at http://localhost:3000#L4.

## File Structure

.
├── src
│   ├── components
│   │   └── SingleCard.js   # Component for individual card
|   |   └── SingleCard.css
│   ├── App.js             # Main application logic
│   ├── App.css            # Styles for the application
│   └── index.js           # Entry point
|   └── index.css
├── public
│   ├── img                # Images for cards
│   └── index.html         # HTML template
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

## How to Play

- Click any two cards to flip them.

- If the cards match, they remain flipped.

- If the cards do not match, they will flip back after a second.

- Repeat until all pairs are matched.

- Enjoy your win screen and try again to improve your score!

## Customization

**Adding New Cards**

- Add new images to the public/img folder.

- Update the cardImages array in App.js to include the new card(s):

```
const cardImages = [
  { "src": "/img/NewCard.png", matched: false },
  // other cards
];
```

**Changing Styles**

Modify the App.css file to update the game’s appearance.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Ensure your code is well-documented and tested.

## Acknowledgments

Special thanks to Pokémon for the card images used in this project.

Inspired by classic memory-matching games.
