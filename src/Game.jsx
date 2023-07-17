import { useState } from 'react'
import './index.css'
import Board from './Board'
function Game() {
	const [currentMoveNumber, setCurrentMoveNumber] = useState(0)
	const [history, setHistory] = useState([Array(9).fill(null)])
	const xIsNext=currentMoveNumber%2===0;
	const currentStateToDisplay=history[currentMoveNumber]
	

	function jumpTo(index){
		setCurrentMoveNumber(index)
	}
	const moves = history.map((item, index)=>{
		let description;
		if (index>0){
			 description= "Go to move #"+index
		}
		else{
			 description= "Go to game start"
		}
		return (
			<li><button className="description" onClick={()=>jumpTo(index)}>{description}</button></li>
		)
	})
	return(
		<>
		<div>
<Board currentStateToDisplay={currentStateToDisplay} history={history} xIsNext={xIsNext} setHistory={setHistory}  currentMoveNumber={currentMoveNumber} setCurrentMoveNumber={setCurrentMoveNumber}/>
		</div>
		
		<div className="game-info">
			<ol>
				{moves}
			</ol>
		</div>
		</>
	)
}

export default Game;