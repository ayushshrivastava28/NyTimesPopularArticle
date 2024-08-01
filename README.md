# NY Times Most Popular Articles

This project is a simple React application with TypeScript that fetches and displays the most popular articles from the New York Times. The articles are displayed as cards, and clicking on a card will open the article in a new tab. The application is responsive and includes a loader while fetching data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 12.x)
- Yarn

### Installation

1. **Clone the repository:**

````sh
git clone <repository-url>
cd nytimes-popular-articles
2. Install dependencies:
yarn install
3. Get an NYT API key:
Sign up at the NY Times Developer site to get your API key.
4. Configure the API key:
Replace the API_KEY in src/services/ApiService.ts with the API key you obtained.
const API_KEY = 'your-nyt-api-key-here';

- ** Running the Application **

To start the development server, run:
yarn start
This will start the application on http://localhost:3000.
- Running Tests
- Unit Tests
To run unit tests with Jest and React Testing Library:
yarn test

- ** Test Coverage **

To generate a test coverage report:
yarn test --coverage
This will create a coverage report in the coverage/ directory.

- ** Project Structure **

nytimes-popular-articles/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ArticleList.tsx
│   │   ├── ArticleList.css
│   ├── services/
│   │   └── ApiService.ts
│   ├── types/
│   │   └── Article.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
• src/components/ArticleList.tsx: Displays a list of articles as cards.
• src/components/ArticleList.css: CSS styling for ArticleList.
• src/services/ApiService.ts: Service to fetch articles from the NY Times API.
• src/types/Article.ts: Type definitions for articles.
• src/App.tsx: Main app component.
• src/index.tsx: Entry point for React.
• src/setupTests.ts: Setup file for Jest and React Testing Library.

- ** Key Features **

• Responsive Design: The layout adapts to different screen sizes, displaying article cards in a column for mobile and row for desktop.
• Loader: Displays a loading message while fetching data.```

- ** Testing **: Unit tests are written with Jest and React Testing Library.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## Authors

- **Ayush Shrivastava**
````
