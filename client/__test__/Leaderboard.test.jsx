import React from "react";
import { render } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard";

describe("Leaderboard Component", () => {
  it("renders without crashing", () => {
    render(<Leaderboard />);
  });
});