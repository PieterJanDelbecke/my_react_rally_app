import { useEffect, useState } from "react";
import _ from "lodash";

const useTennisState = (
	playerA,
	playerB,
	initialLeftPlayer,
	initialServer,
	sets
) => {
	const [server, setServer] = useState(initialServer);
	const [receiver, setReceiver] = useState(null);

	const [leftPlayer, setLeftPlayer] = useState(initialLeftPlayer);
	const [rightPlayer, setRightPlayer] = useState(null);

	const [pointsA, setPointsA] = useState("0");
	const [pointsB, setPointsB] = useState("0");

	const [leftPoints, setLeftPoints] = useState("0");
	const [rightPoints, setRightPoints] = useState("0");

	const [scoreA, setScoreA] = useState([0]);
	const [scoreB, setScoreB] = useState([0]);

	const [winner, setWinner] = useState(null);

	useEffect(() => {
		setReceiver(server === playerA ? playerB : playerA);
	}, [server]);

	useEffect(() => {
		setRightPlayer(leftPlayer === playerA ? playerB : playerA);
	}, [leftPlayer]);

	useEffect(() => {
		setLeftPoints(leftPlayer === playerA ? pointsA : pointsB);
		setRightPoints(leftPlayer === playerA ? pointsB : pointsA);
	}, [leftPlayer, pointsA, pointsB]);

	useEffect(() => {
		const gamesPlayed = _.sum(scoreA) + _.sum(scoreB);
		if (!winner && gamesPlayed != 0) {
			setServer(receiver);
			swapSides();
		}
	}, [scoreA, scoreB]);

	const pointToLeft = () => {
		if (winner) return;

		if (playerA === leftPlayer) {
			pointToPlayerA();
		} else {
			pointToPlayerB();
		}
	};

	const pointToRight = () => {
		if (winner) return;

		if (playerA === leftPlayer) {
			pointToPlayerB();
		} else {
			pointToPlayerA();
		}
	};

	const pointToPlayer = (
		pointsWinner,
		setPointsWinner,
		pointsLoser,
		setPointsLoser,
		gameToWinner
	) => {
		switch (pointsWinner) {
			case "0":
				setPointsWinner("15");
				break;
			case "15":
				setPointsWinner("30");
				break;
			case "30":
				setPointsWinner("40");
				break;
			case "40":
				if (pointsLoser === "40") {
					setPointsWinner("A");
				} else if (pointsLoser === "A") {
					setPointsLoser("40");
				} else {
					setPointsWinner("0");
					setPointsLoser("0");
					gameToWinner();
				}
				break;
			case "A":
				setPointsWinner("0");
				setPointsLoser("0");
				gameToWinner();
		}
	};

	const pointToPlayerA = () => {
		pointToPlayer(pointsA, setPointsA, pointsB, setPointsB, gameToPlayerA);
	};

	const pointToPlayerB = () => {
		pointToPlayer(pointsB, setPointsB, pointsA, setPointsA, gameToPlayerB);
	};

	const gameToWinner = (
		scoreWinner,
		setScoreWinner,
		scoreLoser,
		setScoreLoser,
		playerWinner
	) => {
		const currentSet = scoreWinner.length;
		let gameScore = scoreWinner[currentSet - 1];

		gameScore++;
		const newScore = [...scoreWinner];
		newScore[currentSet - 1] = gameScore;

		if (gameScore === 6) {
			if (wonMatch(newScore, sets)) {
				setWinner(playerWinner);
			} else {
				newScore.push(0);
				setScoreLoser([...scoreLoser, 0]);
			}
		}
		setScoreWinner(newScore);
	};

	const gameToPlayerA = () => {
		gameToWinner(scoreA, setScoreA, scoreB, setScoreB, playerA);
	};

	const gameToPlayerB = () => {
		gameToWinner(scoreB, setScoreB, scoreA, setScoreA, playerB);
	};

	const wonMatch = (score, sets) => {
		let setsWon = 0;

		for (const current of score) {
			if (current === 6) {
				setsWon++;
			}
		}

		if (sets === 1 && setsWon === 1) return true;
		if (sets === 3 && setsWon === 2) return true;
		if (sets === 5 && setsWon === 3) return true;

		return false;
	};

	const swapSides = () => {
		const gamesPlayed = _.sum(scoreA) + _.sum(scoreB);
		if (gamesPlayed % 2 === 1) {
			setLeftPlayer(rightPlayer);
		}
	};

	return {
		pointToLeft,
		pointToRight,
		pointsA,
		pointsB,
		scoreA,
		scoreB,
		server,
		receiver,
		leftPlayer,
		rightPlayer,
		leftPoints,
		rightPoints,
		winner,
	};
};

export default useTennisState;
