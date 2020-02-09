//Code that counts how many times the ball is seen passing through 
// the window depending on the height of the building, the height of 
// the viewer and the height that the ball is dropped

function bouncingBall(heigth, bounce, window) {
    var result = 0;
		do {
			if (heigth <= 0 || bounce >= 1 || bounce <= 0 || window >= heigth)
				return -1;
			if (heigth > window) //going up
				result++;
			heigth = heigth * bounce;
			if (heigth > window) //come down
				result++;
		} while (heigth > window);

		return result;
}
