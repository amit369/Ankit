import { ReactSVG } from "react-svg";

export const showIcon = (selectedCard, currentCard) => {
  console.log(selectedCard, currentCard);
  if (currentCard === "screen1" && selectedCard === currentCard) {
    return <ReactSVG src="/Images/logo-white.svg" />;
  }
  if (currentCard === "screen1" && selectedCard !== currentCard) {
    return <ReactSVG src="/Images/logo.svg" />;
  }
  if (currentCard === "screen2" && selectedCard === currentCard) {
    return <ReactSVG src="/Images/logo1-white.svg" />;
  }
  if (currentCard === "screen2" && selectedCard !== currentCard) {
    return <ReactSVG src="/Images/logo1.svg" />;
  }
  if (currentCard === "screen3" && selectedCard === currentCard) {
    return <ReactSVG src="/Images/logo2-white.svg" />;
  }

  if (currentCard === "screen3" && selectedCard !== currentCard) {
    return <ReactSVG src="/Images/logo2.svg" />;
  }
  if (currentCard === "screen4" && selectedCard === currentCard) {
    return <ReactSVG src="/Images/logo3-white.svg" />;
  }

  if (currentCard === "screen4" && selectedCard !== currentCard) {
    return <ReactSVG src="/Images/logo3.svg" />;
  }
  if (currentCard === "screen5" && selectedCard === currentCard) {
    return <ReactSVG src="/Images/logo4-white.svg" />;
  }
  if (currentCard === "screen5" && selectedCard !== currentCard) {
    return <ReactSVG src="/Images/logo4.svg" />;
  }
};
