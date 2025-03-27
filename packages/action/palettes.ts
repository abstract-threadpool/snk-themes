import { DrawOptions as DrawOptions } from "@snk/svg-creator";

export const basePalettes: Record<
  string,
  Pick<
    DrawOptions,
    "colorDotBorder" | "colorEmpty" | "colorSnake" | "colorDots" | "dark"
  >
> = {
  "github-light": {
    colorDotBorder: "#1b1f230a",
    colorDots: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
  },
  "github-dark": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#01311f", "#034525", "#0f6d31", "#00c647"],
    colorSnake: "purple",
  },
  "fire": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#161b22",
    colorDots: ["#161b22", "#801100", "#B62203", "#D73502", "#FC6400"],
    colorSnake: "orange",
  },
  "acid": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#1e1f21",
    colorDots: ["#1e1f21", "#0c8900", "#2bc20e", "#9cff00", "#39ff13"],
    colorSnake: "black",
  },
  "ocean": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#051124",
    colorDots: ["#051124", "#9fe3ee", "#1e5880", "#103e62", "#002848"],
    colorSnake: "white",
  },
  "rainbow": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#0e2595",
    colorDots: ["#0e2595", "#077f3b", "#e5d72e", "#ee7631", "#e22b3c"],
    colorSnake: "purple",
  },
  "plant": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#97b953",
    colorDots: ["#97b953", "#3d7e44", "#eef0d1", "#c69c5c", "#7f4b1e"],
    colorSnake: "yellow",
  },
  "candy": {
    colorDotBorder: "#1b1f230a",
    colorEmpty: "#ffe3c6",
    colorDots: ["#ffe3c6", "#fafdd1", "#d5f3eb", "#ebd5f3", "#f8e8f3"],
    colorSnake: "white",
  },
};

// aliases
export const palettes = { ...basePalettes };
palettes["github"] = palettes["github-light"];
palettes["default"] = palettes["github"];
