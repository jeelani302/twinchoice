# TwinChoice — Showdown 🎬

> **Pick your ultimate favorite in a head-to-head elimination game.**

TwinChoice is an interactive decision-making platform where users are presented with two options at a time. The chosen option survives, while the rejected one is dynamically replaced by a fresh challenger — repeating until a single ultimate favorite remains.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Overview

TwinChoice gamifies the classic "would you rather" concept into a structured, single-elimination tournament. Instead of ranking a long list manually, users make one simple binary choice at a time. After every pick, the loser is discarded and the next item steps in — until only the true champion stands.

The result screen goes beyond just naming a winner: it generates a **personalised taste profile** based on the genres associated with the winning choice, giving the experience a satisfying, introspective finish.

---

## ✨ Features

- **Binary Elimination Engine** — Two options face off per round; the winner battles the next challenger automatically.
- **Multiple Categories** — Choose from:
  - 🎬 **Actors** → Foreign Actors or Indian Actors
  - 🍿 **Movies**
- **Randomised Order** — Items are shuffled with a Fisher-Yates algorithm every session, ensuring a fresh experience each time.
- **Live Progress Bar** — Visual indicator showing how many contenders remain.
- **Personalised Taste Profile** — The result screen analyses the winner's genre tags and generates a unique summary of your cinematic preferences.
- **Smooth Animations** — Card entrance animations and a glowing VS badge for a polished, dynamic feel.
- **Ambient Background** — Animated gradient blobs create a visually rich backdrop.
- **Fully Responsive** — Works seamlessly on desktop and mobile viewports.
- **Play Again** — Instantly restart with a new randomised bracket from the result screen.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite 6](https://vitejs.dev/) |
| Styling | Vanilla CSS (custom design system) |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Image Proxy | [images.weserv.nl](https://images.weserv.nl/) |
| Language | JavaScript (ES Modules) |

---

## 📁 Project Structure

```
twinchoice/
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Core game state machine & routing
    ├── index.css           # Full design system & animations
    ├── components/
    │   ├── GameScreen.jsx  # Head-to-head card layout
    │   ├── ActorCard.jsx   # Individual choice card
    │   ├── ProgressBar.jsx # Remaining items indicator
    │   └── ResultScreen.jsx# Winner reveal & taste profile
    └── data/
        ├── actors.js       # Foreign actors dataset
        ├── indian_actors.js# Indian actors dataset
        └── movies.js       # Movies dataset
```

---

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/twinchoice.git
cd twinchoice

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**.

---

## 📦 Build for Production

```bash
npm run build
```

Output is placed in the `dist/` directory and can be served by any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

To preview the production build locally:

```bash
npm run preview
```

---

## 🎮 Usage

1. **Select a Category** — Pick between *Actors* or *Movies* from the home screen. For Actors, choose between *Foreign* or *Indian* actors.
2. **Make Your Choice** — Two cards are presented side by side with a glowing **VS** badge. Click the one you prefer.
3. **Keep Choosing** — The winner holds their spot; a new challenger replaces the loser. The progress bar tracks how many remain.
4. **See Your Result** — When all challengers are exhausted, the ultimate winner is revealed along with a personalised taste profile.
5. **Play Again** — Hit the *Play Again* button to start a new randomised session.

---

## 🗺️ How the Game Engine Works

```
Initial State:
  champion  = shuffled[0]
  challenger= shuffled[1]
  remaining = shuffled[2..n]

Each Round:
  user picks → winner becomes new champion
  loser is added to eliminated[]
  next item from remaining[] becomes new challenger

Final Round (remaining is empty):
  user picks last pair → game over
  winner is the ultimate champion
```

The entire game state is managed in a single React `useState` object, updated immutably via a `useCallback` reducer pattern — no external state library needed.

---

## 🔮 Future Improvements

- [ ] **Custom Lists** — Allow users to upload their own items (CSV / JSON) for a fully personalised tournament.
- [ ] **More Categories** — Extend to TV shows, sports players, music artists, books, etc.
- [ ] **Share Results** — Generate a shareable card or link to post your winner on social media.
- [ ] **Bracket View** — Display a full tournament bracket on the result screen.
- [ ] **Leaderboard** — Aggregate winner data across sessions to surface community favourites.
- [ ] **Dark / Light Theme Toggle** — User-selectable colour scheme.
- [ ] **Keyboard Navigation** — Arrow key or number key shortcuts for power users.
- [ ] **Backend & Persistence** — Save session history and taste profiles across visits.

---

## 🌐 Live Demo

**[▶ twinchoice.vercel.app](https://twinchoice.vercel.app)**

Or run it locally:

```bash
git clone https://github.com/jeelani302/twinchoice.git
cd twinchoice && npm install && npm run dev
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ — TwinChoice</p>
