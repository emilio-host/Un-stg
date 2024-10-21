// Function to generate a random goal between 1 and 17
function getRandomGoal() {
    return Math.floor(Math.random() * 17) + 1; 
}

// Button click event listener
document.getElementById('randomize-button').addEventListener('click', function() {
    const randomGoal = getRandomGoal();
    const goalElement = document.getElementById('top_goal');

    // Updates the goal
    goalElement.setAttribute('goal', randomGoal);

    // Optional: Outputs the goal value
    console.log('New Goal:', randomGoal);
});