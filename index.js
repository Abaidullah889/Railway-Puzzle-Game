// DATA
const EasyMaps = [
    [
        [{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"},{name:"oasis"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"oasis"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180}],
        [{name:"bridge" , angle:0},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"mountain" , angle:90}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]

]

const HardMaps = [


    [
        [{name:"empty"},{name:"mountain" , angle:90},{name:"oasis"},{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"mountain" , angle:270},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"oasis"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]

    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"oasis"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"}]
        
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:0},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"bridge" , angle:90},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]

]

const Button_Rules = document.querySelector(".action-btn");
const Container_Menu = document.querySelector(".container");
const Container_Rules = document.querySelector(".rules-container");
const Button_Back = document.querySelector(".back-btn");
const Button_Start = document.querySelector(".start-btn");
const Button_LeaderBoard = document.querySelector("#Leaderboard");
const leaderboardContainer = document.querySelector('.leaderboard-container');
const leaderboardList = document.querySelector('.leaderboard-list');

const Container_Game = document.querySelector(".game-screen");

const Easy_Button = document.querySelector("#easy-btn");
const Hard_Button = document.querySelector("#hard-btn");
const usernameInput = document.getElementById('username');
const Grid = document.querySelector(".grid");
const winScreen = document.querySelector('.win-screen');


const divRouteDesigner = document.querySelector(".designer-name");
const PlayAgain_Button = document.querySelector('.playagain-btn');
const Restart_Button = document.querySelector('.restart-btn');
const leaderboardBack_Button = document.querySelector('#leaderboard-back-btn');


let elapsedSeconds = 0;
let timerInterval = null;


let difficultySelected = false;
let difficulty = "";
let mapNumber = randomly(0,4);
let usernameFilled = false;
let routeDesigner = "";
let current_Map = null;
let startButtonClicked = false;
let resetButtonClicked = false;


let selectedPaletteItem = null;
let selectedPaletteItemAngle = null;
let selectedPaletteItemDirections = [];



////////////////////////////////////////////////////////////////////////////////////




// Functionality


document.querySelectorAll('.palette-item').forEach(piece => {

    piece.addEventListener('dragstart', function (e) {
        
        
        e.dataTransfer.setData('track_Type', piece.getAttribute('data-type'));
        e.dataTransfer.setData('track_angle',piece.getAttribute('id'));
    });
});


Grid.addEventListener('click', function (e) 
{
    const target = e.target.closest("td");
    if (target) 
    {
        const row = e.target.closest("tr").getAttribute("id");
        const col = e.target.closest("td").getAttribute("id");

        switch (current_Map[row][col].name) 
                {

                    case "track":
                        current_Map[row][col].angle =  current_Map[row][col].angle==0 ? 90 : 0;

                        switch(current_Map[row][col].angle)
                            {
                                case 0:
                                    current_Map[row][col].Directions[0] = "up";
                                    current_Map[row][col].Directions[1] = "down";
                                    break;
                                case 90:
                                    current_Map[row][col].Directions[0] = "left";
                                    current_Map[row][col].Directions[1] = "right";
                                    break;


                            }

                        break;
                    case "curve":
                        let angle = current_Map[row][col].angle += 90;
                        angle = angle % 360;
                      

                        switch(angle){

                            case 0:
                                current_Map[row][col].Directions[0] = "right";
                                current_Map[row][col].Directions[1] = "down";
                                break;
                            case 90:
                                current_Map[row][col].Directions[0] = "down";
                                current_Map[row][col].Directions[1] = "left";
                                break;
                            case 180:
                                current_Map[row][col].Directions[0] = "left";
                                current_Map[row][col].Directions[1] = "up";
                                break;
                            case 270:
                                current_Map[row][col].Directions[0] = "up";
                                current_Map[row][col].Directions[1] = "right";
                                break;

                        }

                        current_Map[row][col].angle = angle;
                        break;
                    default:
                        console.log("Invalid palette item selected");
                        return;
                }

                render(current_Map);
                saveGameState();      

                if(isWin(current_Map))
                {
                    stopTimer();
                    displayWinScreen();
                    addWinner(routeDesigner,elapsedSeconds);
                    console.log("wins");
                
                } 

    }

  

});

Grid.addEventListener('contextmenu',function(e)
{
    if(e.target.closest("td"))
    {
        e.preventDefault();
        const row = e.target.closest("tr").getAttribute("id");
        const col = e.target.closest("td").getAttribute("id");

        switch (current_Map[row][col].name)
        {
            case "track":
                if(difficulty ==="easy")
                {
                    current_Map[row][col] = JSON.parse(JSON.stringify(EasyMaps[mapNumber][row][col]));

                }
                else
                {
                    current_Map[row][col] = JSON.parse(JSON.stringify(HardMaps[mapNumber][row][col]));
                }
                break;
            case "curve":
                if(difficulty ==="easy")
                    {
                        current_Map[row][col] = JSON.parse(JSON.stringify(EasyMaps[mapNumber][row][col]));
    
                    }
                    else
                    {
                        current_Map[row][col] = JSON.parse(JSON.stringify(HardMaps[mapNumber][row][col]));
                    }
                break;
        }

        render(current_Map);
        saveGameState();
    }

});



leaderboardBack_Button.addEventListener('click',function(){
    leaderboardContainer.classList.add('hidden');
    Container_Menu.classList.remove("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.add("hidden");

})

Button_LeaderBoard.addEventListener('click',function() {

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboardList.innerHTML = '';

    leaderboard.forEach((entry,index) => {

        const listItem = document.createElement('li');


        const rankSpan = document.createElement('span');
        rankSpan.classList.add('leaderboard-rank');
        rankSpan.textContent = `#${index + 1}`;

  
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('leaderboard-name');
        nameSpan.textContent = entry.name;

       
        const timeSpan = document.createElement('span');
        timeSpan.classList.add('leaderboard-time');

        const time = entry.time;

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

 
        const ftime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        timeSpan.textContent = ftime;



        listItem.appendChild(rankSpan);
        listItem.appendChild(nameSpan);
        listItem.appendChild(timeSpan);

        leaderboardList.appendChild(listItem);
    });

    leaderboardContainer.classList.remove('hidden');
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.add("hidden");



});

Restart_Button.addEventListener('click', function() {
    resetButtonClicked = true;
    saveGameState();
    resetGame();

});

PlayAgain_Button.addEventListener('click', function() {
    winScreen.classList.add('hidden');
    resetGame();
});

Button_Rules.addEventListener("click",function(e)
{
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.remove("hidden");
})

Button_Back.addEventListener("click",function(e)
{
    Container_Rules.classList.add("hidden");
    Container_Menu.classList.remove("hidden");
})

Button_Start.addEventListener("click",function(e)
{
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.remove("hidden");
    startButtonClicked = true;
    if(difficulty === "easy")
    {
        current_Map=JSON.parse(JSON.stringify(EasyMaps[mapNumber]));
    }
    else
    {
        current_Map=JSON.parse(JSON.stringify(HardMaps[mapNumber]));
    }

    divRouteDesigner.textContent = routeDesigner;
    render(current_Map);
    saveGameState();
    startTimer();
    
})

usernameInput.addEventListener('input', function () {
    usernameFilled = usernameInput.value.trim() !== '';
    if(usernameFilled)
    {
        routeDesigner = usernameInput.value;
    }
    saveGameState();
    checkFormValidity();

});

Easy_Button.addEventListener('click', function () {
    difficultySelected = true;
    difficulty = "easy";
    Easy_Button.classList.add('selected');
    Hard_Button.classList.remove('selected');
    checkFormValidity();
    saveGameState();
});

Hard_Button.addEventListener('click', function () {
    difficultySelected = true;
    difficulty = "hard";
    Hard_Button.classList.add('selected');
    Easy_Button.classList.remove('selected');
    checkFormValidity();
    saveGameState();
});

function giveTile(obj)
{
    const image = document.createElement("img");

    switch(obj.name)
    {
        case "empty":
            image.src="empty.png";
            image.alt="empty";
            break;
        case "mountain":
            image.src="mountain.png";
            image.alt="mountain";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "bridge":
            image.src="bridge.png";
            image.alt="bridge";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "oasis":
            image.src="oasis.png";
            image.alt="oasis";
            break;
        case "track":
            image.src="straight_rail.png";
            image.alt="straight_rail";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }

            break;
        case "bridge_track":
            image.src="bridge_rail.png";
            image.alt="bridge_rail";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "mountain_curve":
            image.src="mountain_rail.png";
            image.alt="mountain_rail";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "curve":
            image.src="curve_rail.png";
            image.alt="curve_rail";
            if (obj.angle !== undefined) { 
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;




        default:
            console.log("Invalid name tag");
        
    }

    return image;
}

function render(map)
{
    saveGameState();
    Grid.innerHTML="";
    for(let i=0;i<map.length;i++)
    {
        const tr = document.createElement('tr');
        for(let j=0;j<map[i].length;j++)
        {
            const td = document.createElement('td');
           td.classList.add("cell");
           const tileImage = giveTile(map[i][j]);
           td.appendChild(tileImage)
           td.setAttribute("id", j);      
           tr.appendChild(td);
        }
        tr.setAttribute("id", i);
        Grid.appendChild(tr);
    }

    addDragAndDropListeners();
}

function checkFormValidity() 
{

    if (difficultySelected && usernameFilled) {
        Button_Start.disabled = false;
    } else {
        Button_Start.disabled = true;
    }
}

function randomly(a,b)
{
  return Math.floor(Math.random()*(b-a+1)+a);
}

function validPosition(currMap, row, col) {
    return row >= 0 && row < currMap.length && col >= 0 && col < currMap[0].length;
}

function allFilled(currMap)
{
    for(let i = 0; i < currMap.length; i++) {
        for (let j = 0; j < currMap[i].length; j++) {
            
            if(currMap[i][j].name === "empty" || currMap[i][j].name === "mountain"  || currMap[i][j].name === "bridge")
            {
                return false;
            }
        }
    }

    return true;
}

function oppositeDirection(direction) 
{
    const opposites = 
    {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left'
    };

    return opposites[direction];
}

function validTrackConnection(currMap, x, y) {
    const cell = currMap[x][y];

    if(cell.Directions)
    {
        for (const direction of cell.Directions) 
            {
                let neighbor;
        
                if (direction === 'up')
                {
                    neighbor = currMap[x - 1][y];
                }               
                else if (direction === 'down')
                {
                    neighbor = currMap[x + 1][y];
                }        
                else if (direction === 'left') 
                {
                    neighbor = currMap[x][y - 1];
                }            
                else if (direction === 'right')
                {
                    neighbor = currMap[x][y + 1];
        
                }
        
                if (!neighbor || !neighbor.Directions.includes(oppositeDirection(direction))) 
                {
                    return false;
                }
        
            }

    }
    

    return true;
}

function isWin(currMap) 
{

    if(allFilled(currMap))
    {
        for (let i = 0; i < currMap.length; i++) 
        {
            for (let j = 0; j < currMap[i].length; j++) 
            {

                if (!validTrackConnection(currMap, i, j)) {
                    return false;
                }
                
            }
        }   
        return true;
    }
    else
    {
        return false;
    }
}

function displayWinScreen() {
    winScreen.classList.remove('hidden');
    
    // Calculate the time in minutes and seconds format
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Set the text content for completion time in the win screen
    document.querySelector('.completion-time').textContent = `Completion Time: ${formattedTime}`;
}

function resetGame() {

    localStorage.removeItem('gameState');
    difficultySelected = false;
    difficulty = "";
    mapNumber = randomly(0, 4);
    usernameFilled = false;
    routeDesigner = "";
    selectedPaletteItem = "";
    current_Map = null;
    elapsedSeconds = 0;
    startButtonClicked = false;
    stopTimer();
    
    usernameInput.value = "";


    Easy_Button.classList.remove('selected');
    Hard_Button.classList.remove('selected');


    Button_Start.disabled = true;


    Container_Game.classList.add('hidden');
    winScreen.classList.add('hidden');

    Container_Menu.classList.remove('hidden');
    document.querySelector('.elapsed-time').textContent = '00:00';
    localStorage.removeItem('gameState'); 
}


function saveGameState() {
    const gameState = 
    {
        difficultySelected: difficultySelected,
        difficulty: difficulty,
        mapNumber: mapNumber,
        usernameFilled: usernameFilled,
        routeDesigner: routeDesigner,
        current_Map: current_Map,
        selectedPaletteItem: selectedPaletteItem,
        selectedPaletteItemAngle: selectedPaletteItemAngle,
        elapsedSeconds: elapsedSeconds,
        startButtonClicked:startButtonClicked,
        resetButtonClicked:resetButtonClicked
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));


}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    const gameState = JSON.parse(savedState);

    if (gameState && !gameState.resetButtonClicked) {

        difficultySelected = gameState.difficultySelected;
        difficulty = gameState.difficulty;
        mapNumber = gameState.mapNumber;
        usernameFilled = gameState.usernameFilled;
        routeDesigner = gameState.routeDesigner;
        current_Map = gameState.current_Map;
        selectedPaletteItem = gameState.selectedPaletteItem;
        selectedPaletteItemAngle = gameState.selectedPaletteItemAngle;
        elapsedSeconds = gameState.elapsedSeconds || 0;
        startButtonClicked = gameState.startButtonClicked;

        usernameInput.value = routeDesigner;
        if (difficulty === "easy") {
            Easy_Button.classList.add('selected');
        } else if (difficulty === "hard") {
            Hard_Button.classList.add('selected');
        }
        divRouteDesigner.textContent = routeDesigner;

        checkFormValidity();

        if(startButtonClicked === true)
        {
            Container_Menu.classList.add('hidden');
            Container_Rules.classList.add('hidden');
            Container_Game.classList.remove('hidden');
            render(current_Map);
            startTimer();

            if(isWin(current_Map))
            {
                stopTimer();
                displayWinScreen();
                console.log("wins");
                    
            }
    
        } 
        else 
        {
            resetGame();
        }

    }

}

function startTimer() 
{
    const timeDisplay = document.querySelector('.elapsed-time');

    if(timerInterval)
    {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        elapsedSeconds++;


        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;


        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        

        timeDisplay.textContent = formattedTime;
        saveGameState();

    }, 1000);
} 

function stopTimer() {
    clearInterval(timerInterval);
}

function addWinner(winnerName , time){

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: winnerName, time: time});
    leaderboard.sort((a,b) => a.time - b.time);

    if(leaderboard.length > 5)
    {
        leaderboard = leaderboard.slice(0,5);
    }
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}



loadGameState();












function addDragAndDropListeners() 
{

    document.querySelectorAll('.grid td').forEach(cell => {
        cell.addEventListener('dragover', function(e) {
            e.preventDefault(); 
            this.classList.add('drag-over');
        });

        cell.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
        });

        cell.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');

            const selectedPaletteItem = e.dataTransfer.getData('track_Type');
            const selectedPaletteItemAngle = parseInt(e.dataTransfer.getData('track_angle'));


            if (selectedPaletteItem) {

                const row = e.target.closest("tr").getAttribute("id");
                const col = e.target.closest("td").getAttribute("id");


                switch (current_Map[row][col].name) 
                {
                    case "empty":
                        if(selectedPaletteItem =="track")
                        {
                            current_Map[row][col].name = selectedPaletteItem;
                            current_Map[row][col].angle = selectedPaletteItemAngle;
                            current_Map[row][col].Directions = ["up","down"];


                        }
                        if(selectedPaletteItem == "curve")
                        {
                            current_Map[row][col].name = selectedPaletteItem;
                            current_Map[row][col].angle = selectedPaletteItemAngle;
                            current_Map[row][col].Directions = ["right","down"];
                        }
                        break;
                    case "bridge":
                        if(selectedPaletteItem == "bridge_track")
                        {
                            current_Map[row][col].name = selectedPaletteItem;
                            current_Map[row][col].Directions = [];

                            switch(current_Map[row][col].angle)
                            {
                                case 0:
                                    current_Map[row][col].Directions.push("up");
                                    current_Map[row][col].Directions.push("down");
                                    break;
                                case 90:
                                    current_Map[row][col].Directions.push("left");
                                    current_Map[row][col].Directions.push("right");
                                    break;
                            }
                        }
                        break;
                    case "mountain":
                    if(selectedPaletteItem == "mountain_curve")
                    {
                        current_Map[row][col].name = selectedPaletteItem;
                        current_Map[row][col].Directions = JSON.parse(JSON.stringify(selectedPaletteItemDirections));

                        switch(current_Map[row][col].angle)
                        {

                            case 0:
                                current_Map[row][col].Directions[0] = "right";
                                current_Map[row][col].Directions[1] = "down";
                                break;
                            case 90:
                                current_Map[row][col].Directions[0] = "down";
                                current_Map[row][col].Directions[1] = "left";
                                break;
                            case 180:
                                current_Map[row][col].Directions[0] = "left";
                                current_Map[row][col].Directions[1] = "up";
                                break;
                            case 270:
                                current_Map[row][col].Directions[0] = "up";
                                current_Map[row][col].Directions[1] = "right";
                                break;
        
                        }

                    }
                    break;
                    case "track":
                        current_Map[row][col].angle =  current_Map[row][col].angle==0 ? 90 : 0;

                        switch(current_Map[row][col].angle)
                            {
                                case 0:
                                    current_Map[row][col].Directions[0] = "up";
                                    current_Map[row][col].Directions[1] = "down";
                                    break;
                                case 90:
                                    current_Map[row][col].Directions[0] = "left";
                                    current_Map[row][col].Directions[1] = "right";
                                    break;


                            }

                        break;
                    case "curve":
                        let angle = current_Map[row][col].angle += 90;
                        angle = angle % 360;
                    

                        switch(angle){

                            case 0:
                                current_Map[row][col].Directions[0] = "right";
                                current_Map[row][col].Directions[1] = "down";
                                break;
                            case 90:
                                current_Map[row][col].Directions[0] = "down";
                                current_Map[row][col].Directions[1] = "left";
                                break;
                            case 180:
                                current_Map[row][col].Directions[0] = "left";
                                current_Map[row][col].Directions[1] = "up";
                                break;
                            case 270:
                                current_Map[row][col].Directions[0] = "up";
                                current_Map[row][col].Directions[1] = "right";
                                break;

                        }

                        current_Map[row][col].angle = angle;
                        break;
                    default:
                        console.log("Invalid palette item selected");
                        return;
                }

                render(current_Map);
                saveGameState();      

                if(isWin(current_Map))
                {
                    stopTimer();
                    displayWinScreen();
                    addWinner(routeDesigner,elapsedSeconds);
                }  

            }
        });
    });
}
