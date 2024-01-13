import { useMemo } from "react";

const useEmoji = (interest) => {
  return useMemo(() => {
    switch (interest) {
      //Food and Drink
      case "Italian":
        return "🍝";
      case "Japanese":
        return "🍣";
      case "Chinese":
        return "🥡";
      case "Mexican":
        return "🌮";
      case "Spicy":
        return "🌶️";
      case "Seafood":
        return "🦀";
      case "Dessert":
        return "🍰";
      case "Tea":
        return "🍵";
      case "Alcohol":
        return "🍻";
      case "Vegetarian":
        return "🥬";
      case "Vegan":
        return "🍃";

      // Entertainment
      case "Movies":
        return "🎦";
      case "Dancing":
        return "💃";
      case "Writing":
        return "📒";
      case "Filming":
        return "📽️";
      case "Art":
        return "🖼️";
      case "Gaming":
        return "🎮";
      case "Beauty":
        return "💅";
      case "Music":
        return "🎼";
      case "Theatre":
        return "🎭";
      case "Photography":
        return "📷";
      case "Singing":
        return "🎤";

      // Sports
      case "Basketball":
        return "🏀";
      case "Football":
        return "🏈";
      case "Skiing":
        return "🎿";
      case "Tennis":
        return "🎾";
      case "Soccer":
        return "⚽";
      case "Bowling":
        return "🎳";
      case "Lifting":
        return "🏋️‍♂️";
      case "Biking":
        return "🚴‍♂️";
      case "Baseball":
        return "⚾";
      case "Badminton":
        return "🏸";
      case "Lacrosse":
        return "🥍";

      //Traveling & Activities
      case "Roadtrip":
        return "🛣️";
      case "Camping":
        return "🏕️";
      case "Scuba":
        return "🤿";
      case "SportsGame":
        return "🏟️";
      case "Carnival":
        return "🎡";
      case "Cafe":
        return "☕";
      case "Cooking":
        return "🍳";
      case "Sightseeing":
        return "🗼";

      //Pets
      case "Dogs":
        return "🐶";
      case "Cats":
        return "🐱";
      case "Fish":
        return "🐟";
      case "Birds":
        return "🐦";
      case "Reptiles":
        return "🐢";

      //Default Case
      default:
        return "";
    }
  }, [interest]);
};

export default useEmoji;
