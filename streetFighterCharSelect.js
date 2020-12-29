function streetFighterSelection(fighters, position, moves) {
  let hoveredCharacters = [];
  let currentPosition = position;
  for (let move of moves) {
    switch (move) {
      case "up": {
        if (currentPosition[0] == 0) {
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        } else {
          currentPosition[0]--;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        }
        break;
      }

      case "down": {
        if (currentPosition[0] == 1) {
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        } else {
          currentPosition[0]++;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        }
        break;
      }

      case "left": {
        if (currentPosition[1] == 0) {
          currentPosition[1] = 5;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        } else {
          currentPosition[1]--;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        }
        break;
      }

      case "right": {
        if (currentPosition[1] == 5) {
          currentPosition[1] = 0;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        } else {
          currentPosition[1]++;
          hoveredCharacters.push(
            fighters[currentPosition[0]][currentPosition[1]]
          );
        }
        break;
      }
    }
  }

  return hoveredCharacters;
}
