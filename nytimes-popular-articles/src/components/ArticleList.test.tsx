import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { fetchMostPopularArticles } from "../services/ApiService";
import { Article } from "../types/Article";
import ArticleList from "./ArticleList";

// Mock the fetchMostPopularArticles function
jest.mock("../services/ApiService");

const articles: Article[] = [
  {
    id: 1,
    title: "Test Article 1",
    abstract: "This is the first test article.",
    url: "https://www.nytimes.com/test-article-1",
    byline: "By Test Author 1",
    source: "New York Times",
    published_date: "2024-07-30",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "Test caption 1",
        copyright: "Test copyright 1",
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/test-article-1.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
        ],
      },
    ],
  },
];

describe("ArticleList", () => {
  beforeEach(() => {
    (fetchMostPopularArticles as jest.Mock).mockResolvedValue(articles);
  });

  it("fetches and displays articles", async () => {
    render(<ArticleList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText(/Test Article 1/i)).toBeInTheDocument()
    );
    expect(
      screen.getByText(/This is the first test article./i)
    ).toBeInTheDocument();
  });
});
