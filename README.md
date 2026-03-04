# Leo CLI

A Node.js command-line interface tool built with TypeScript and Commander.js. The CLI is themed around Leo, a Labrador Retriever, and demonstrates API integration and CLI development using Node.js.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Available Commands](#available-commands)
- [Example Usage](#example-usage)
- [Technologies Used](#technologies-used)

---

## Prerequisites

- Node.js v18 or higher
- npm v8 or higher

---

## Setup Instructions

**1. Clone the repository**

```bash
git clone <repository-url>
cd myCommand
```

**2. Install dependencies**

```bash
npm install
```

**3. Compile TypeScript to JavaScript**

```bash
npx tsc
```

**4. Link the CLI globally** (makes the `leo` command available system-wide)

```bash
npm link
```

---

## Available Commands

| Command              | Description                                              |
|----------------------|----------------------------------------------------------|
| `leo greet <name>`   | Greets the provided name                                 |
| `leo breed`          | Displays Leo's dog breed                                 |
| `leo mother`         | Displays Leo's mother's name                             |
| `leo age`            | Displays Leo's age                                       |
| `leo weight`         | Displays Leo's weight                                    |
| `leo speak`          | Makes Leo bark                                           |
| `leo image`          | Fetches a random Labrador image URL via Dog CEO API      |
| `leo info`           | Fetches detailed breed info via The Dog API              |
| `leo joke`           | Fetches a random joke via the Official Joke API          |
| `leo fact`           | Fetches a random dog fact via the Dog Facts API          |

---

## Example Usage

```bash
# Greet a user
leo greet Alice
# Output: Hello Alice

# Get Leo's breed
leo breed
# Output: I'm a Labrador Retriever

# Get Leo's age
leo age
# Output: I'm 3 years old

# Make Leo speak
leo speak
# Output: Bowww! Boww!

# Fetch a random Labrador image URL
leo image
# Output: https://images.dog.ceo/breeds/labrador/...

# Get detailed breed information
leo info
# Output: Breed: Labrador Retriever
#         Origin: Canada
#         Life Span: 10 - 12 years
#         Temperament: Kind, Outgoing, Agile, ...

# Fetch a random joke
leo joke
# Output: Why don't scientists trust atoms?
#         Because they make up everything.

# Fetch a random dog fact
leo fact
# Output: Dogs' nose prints are as unique as human fingerprints...
```

---

## Technologies Used

| Technology   | Purpose                                           |
|--------------|---------------------------------------------------|
| Node.js      | Runtime environment                               |
| TypeScript   | Static typing and compiled output                 |
| Commander.js | CLI framework for defining and parsing commands   |
| Axios        | HTTP client for external API requests             |

---

## External APIs

- [Dog CEO API](https://dog.ceo/dog-api/) — Random Labrador images
- [The Dog API](https://thedogapi.com/) — Breed information
- [Official Joke API](https://official-joke-api.appspot.com/) — Random jokes
- [Dog Facts API](https://dogapi.dog/) — Random dog facts
