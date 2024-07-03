import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { database } from "../../services/firebaseDb"; // Adjust path as per your project structure
import { RootState } from "../../types"; // Adjust as per your project structure
import { useAppDispatch } from "../../store/store";
import {
  gameEnd,
  rematch,
  resetGame,
  selectAndMoveFigure,
} from "../../store/slices/board/boardSlice";
import { addUpdatedGame } from "../../store/slices/board/boardSlice";
import { resetRoom } from "../../store/slices/rooms/roomsSlice";

import Player from "../../components/Board/Player";
import Square from "../../components/Board/Square";
import Menu from "../../components/Board/Menu";
import useModal from "../../hooks/useModal";
import Modal from "../../components/UI/Modal";
import ModalWinLose from "../../components/UI/ModalsTexts/ModalWinLose";
import PawnPromotion from "../../components/Board/PawnPromotion";
import Logo from "../../components/UI/Logo";

const Chess = () => {
  const dispatch = useAppDispatch();
  const { board } = useSelector((state: RootState) => state.game);
  const { activePlayer } = useSelector((state: RootState) => state.game);
  const { possibleMoves } = useSelector((state: RootState) => state.game);
  const { field } = useSelector((state: RootState) => state.game.current);
  const [row, column] = field?.split("-") || [];
  const { notation } = useSelector((state: RootState) => state.game);
  const notationWhite = notation?.filter((el, i) => i % 2 === 0);
  const notationBlack = notation?.filter((el, i) => i % 2 !== 0);
  const { captured } = useSelector((state: RootState) => state.game);
  const { shouldPawnPromote } = useSelector((state: RootState) => state.game);
  const { end } = useSelector((state: RootState) => state.game);
  const { isGameEnded } = end;
  const { isRematch } = end;
  const { isShowing, toggle } = useModal();
  const { status } = useSelector((state: RootState) => state.room);
  const { roomID } = useSelector((state: RootState) => state.room);
  const { game } = useSelector((state: RootState) => state);
  const { color } = useSelector((state: RootState) => state.room);
  const oppositeColor = color === "W" ? "B" : "W";

  const [playerOne, setPlayerOne] = useState({ color: "", name: "" });
  const [playerTwo, setPlayerTwo] = useState({ color: "", name: "" });

  // Read player names from database once
  useEffect(() => {
    const getPlayerOne = async () => {
      try {
        const snapshot = await database.ref("rooms/" + roomID + "/playerOne").get();
        setPlayerOne(snapshot.val() || { color: "", name: "Anonymous" });
      } catch (error) {
        console.error("Error fetching playerOne:", error);
      }
    };

    const getPlayerTwo = async () => {
      try {
        const snapshot = await database.ref("rooms/" + roomID + "/playerTwo").get();
        setPlayerTwo(snapshot.val() || { color: "", name: "Anonymous" });
      } catch (error) {
        console.error("Error fetching playerTwo:", error);
      }
    };

    if (roomID) {
      getPlayerOne();
      getPlayerTwo();
    }
  }, [roomID]);

  // Listen to changes in game object from Firebase and dispatch action to update game object in Redux store
  useEffect(() => {
    const gameRef = database.ref("rooms/" + roomID + "/game");

    const handleSnapshot = (snapshot: firebase.database.DataSnapshot) => {
      const data = snapshot.val();
      if (data) {
        const gameObj = JSON.parse(data);
        dispatch(addUpdatedGame(gameObj));
      }
    };

    if (roomID && status === "started") {
      gameRef.on("value", handleSnapshot);

      return () => gameRef.off("value", handleSnapshot); // Clean up listener
    }
  }, [roomID, status, dispatch]);

  // After all changes from players' side on game object, set it to Firebase
  useEffect(() => {
    const saveGameToFirebase = () => {
      if (status === "started") {
        const gameJSON = JSON.stringify(game);
        database.ref("rooms/" + roomID + "/game").set(gameJSON)
          .then(() => console.log("Game state saved successfully"))
          .catch(error => console.error("Error saving game state:", error));
      }
    };

    saveGameToFirebase();
  }, [game, roomID, status]);

  // Open modal when isGameEnded is changed
  useEffect(() => {
    if (isGameEnded) {
      toggle();
    }
  }, [isGameEnded, toggle]);

  // Close modal when isRematch is changed
  useEffect(() => {
    if (isRematch) {
      toggle();
    }
  }, [isRematch, toggle]);

  // Handle click to dispatch actions in Redux store to select and move figure (only allowed for active player)
  const onClickHandler = (
    fig:
      | "BB"
      | "BK"
      | "BN"
      | "BP"
      | "BQ"
      | "BR"
      | "WB"
      | "WK"
      | "WN"
      | "WP"
      | "WQ"
      | "WR"
      | null,
    field: string
  ) => {
    const currFigure = fig;
    const currField = field;

    if (activePlayer === color) {
      dispatch(selectAndMoveFigure({ currFigure, currField }));
    }
  };

  // Handle resign => dispatch action to update Redux store
  const handleResign = () => {
    if (activePlayer === color) {
      const loser = activePlayer;
      const winner = activePlayer === "W" ? "B" : "W";
      dispatch(gameEnd({ howIsGameEnded: "resign", winner, loser }));
    }
  };

  // Handle rematch
  const handleRematch = () => {
    dispatch(rematch());
  };

  // Handle reset
  const handleReset = () => {
    dispatch(resetRoom());
    dispatch(resetGame());
  };

  return (
    <Container>
      <PlayerOne>
        <Player
          color={color}
          activePlayer={activePlayer}
          capturedFigures={color && captured?.[color]}
          notation={color === "W" ? notationWhite : notationBlack}
          name={playerOne.color === color ? playerOne.name : playerTwo.name}
        >
          <Menu color={color} activePlayer={activePlayer} resign={handleResign} />
        </Player>
      </PlayerOne>

      <ChessBoardContainer isBlack={color === "B"}>
        {board?.map((el, i) =>
          el.map((elem, j) => (
            <Square
              key={`${i}-${j}`}
              field={`${i}-${j}`}
              isBlack={color === "B"}
              color={
                Number(row) === i && Number(column) === j
                  ? "selected"
                  : (i + j) % 2
                  ? "white"
                  : "black"
              }
              possibleMove={possibleMoves
                ?.map((element) => element.split("-"))
                .some((n) => Number(n[0]) === i && Number(n[1]) === j)}
              capturedFigures={possibleMoves
                ?.map((element) => element.split("-"))
                .some(
                  (n) =>
                    Number(n[0]) === i &&
                    Number(n[1]) === j &&
                    board[i][j] !== null &&
                    board[i][j]?.[0] !== activePlayer
                )}
              fig={elem}
              handleClick={onClickHandler}
            ></Square>
          ))
        )}
      </ChessBoardContainer>

      <PlayerTwo>
        <Player
          rotate="true"
          color={oppositeColor}
          activePlayer={activePlayer}
          capturedFigures={captured?.[oppositeColor]}
          notation={color !== "W" ? notationWhite : notationBlack}
          name={playerOne.color === oppositeColor ? playerOne.name : playerTwo.name}
        ></Player>
      </PlayerTwo>

      <Logo handleReset={handleReset} />

      {activePlayer === color &&
        shouldPawnPromote &&
        possibleMoves.length !== 0 ? (
          <PawnPromotion color={color} />
        ) : null}

      <Modal isShowing={isShowing} hide={toggle}>
        <h2>Game end</h2>

        <ModalWinLose
          handleRematch={handleRematch}
          reason={end.howIsGameEnded}
          winner={end.winner === color}
          player={playerOne.color === color ? playerOne.name : playerTwo.name}
        />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const ChessBoardContainer = styled.div<{ isBlack: boolean }>`
  display: grid;
  grid-template-columns: repeat(8, 60px);
  grid-template-rows: repeat(8, 60px);
  grid-gap: 1px;
  position: relative;
  border: 3px solid ${(props) => (props.isBlack ? "#f0f0f0" : "#202020")};
  background-color: ${(props) => (props.isBlack ? "#202020" : "#f0f0f0")};
`;

const PlayerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const PlayerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  transform: rotate(180deg);

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Chess;
