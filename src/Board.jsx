import Square from './Square'

function checkForWin(gameState){
	const winningStreaks=[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[2,4,6],
		[0,4,8]
	]
	for(let i=0; i<winningStreaks.length;i++){
		let a,b,c;
		 [a,b,c]=winningStreaks[i];
		
		if (gameState[a] && gameState[a]===gameState[b]&& gameState[a]===gameState[c]){
			//console.log("Line 18, a,b,c looks like: ", a,b,c)
			console.log("winning streaks attained: ", gameState[a]);
			return true
		}
	}
	
	return null
	

}
// checkForWin(currentStateToDisplay)||
function Board({currentStateToDisplay,xIsNext,setHistory,history, currentMoveNumber,setCurrentMoveNumber}) {
	
	
	function handleSquareClick(squareIndex){
		
		console.log("Start of square click, You have clicked a square!")
		console.log("CurrentMoveNumber: ", currentMoveNumber)
		console.log("Line 35, if you expect X now, then xISNext shld be true",xIsNext)
		//console.log("Inside Board component, After square click, the number of clicks is: ", currentMoveNumber)
		console.log("line 39, check for win: ", checkForWin(currentStateToDisplay))
		if (checkForWin(currentStateToDisplay)||currentStateToDisplay[squareIndex]!=null){
			console.log("41-> someone WON: ", checkForWin(currentStateToDisplay))
			return;
		}
		const squares=currentStateToDisplay.slice()
		if (xIsNext){
			console.log("shld see true inside if xIsNext: ",xIsNext)
			squares[squareIndex]="X"
		
		}
		else{
			console.log("shld see false inside if xIsNext: ",xIsNext)
			squares[squareIndex]="O"}

		//push to history
		const newStateToPushToHistory=squares;
		const newHistory = [...history.slice(0,currentMoveNumber+1), newStateToPushToHistory]
		setHistory(newHistory)
		setCurrentMoveNumber(newHistory.length-1)
		
		
		console.log("End of Square click message")
	}

	let status;
	if (!checkForWin(currentStateToDisplay)){
		status=xIsNext?"Next player: X":"Next player: O"
	}
	else{
		status=+xIsNext?"Winner: O":"Winner: X"
	}

	return (
		<>
		<div>
			{status}
		</div>
		<div className='board-row'>
		<Square value={currentStateToDisplay[0]} handleSquareClick={()=>handleSquareClick(0)}/>
		<Square value={currentStateToDisplay[1]} handleSquareClick={()=>handleSquareClick(1)}/>
		<Square value={currentStateToDisplay[2]} handleSquareClick={()=>handleSquareClick(2)}/>
		</div>
		<div className='board-row'>
		<Square value={currentStateToDisplay[3]} handleSquareClick={()=>handleSquareClick(3)}/>
		<Square value={currentStateToDisplay[4]} handleSquareClick={()=>handleSquareClick(4)}/>
		<Square value={currentStateToDisplay[5]} handleSquareClick={()=>handleSquareClick(5)}/>
		</div>
		<div className='board-row'>
		<Square value={currentStateToDisplay[6]} handleSquareClick={()=>handleSquareClick(6)}/>
		<Square value={currentStateToDisplay[7]} handleSquareClick={()=>handleSquareClick(7)}/>
		<Square value={currentStateToDisplay[8]} handleSquareClick={()=>handleSquareClick(8)}/>
		</div>
		</>
	)
}

export default Board;