//Variables used to create table based on size input 
const table = document.getElementById("pixelCanvas");
const sizePicker = document.getElementById("sizePicker");

//Makes grid with two parameters of height and width
function makeGrid(height, width) {
    table.innerHTML = '';
    for(let N = 0; N < height; N++)
    {
        let row = table.insertRow('<tr id=table></tr>');
        for(let M = 0; M < width; M++)
        {
            let cell = row.insertCell('<td> </td>');
        }
    }
}

//Create default grid of 20 x 20
makeGrid(20, 20);

//sizePicker event gets the grid height and width after pressing submit
//calls the makeGrid function using the user's selected height and width values
//and prevents the screen from refreshing and resetting grid
sizePicker.addEventListener('submit', function(event){
    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight, gridWidth);
    event.preventDefault();
})

//Pick a color and then click on a grid to color the grid with the selected color

pixelCanvas.addEventListener('click', function(event){
    let gridColor = document.getElementById("colorPicker").value;
    let box = event.target;
    box.style.background = gridColor;
});
