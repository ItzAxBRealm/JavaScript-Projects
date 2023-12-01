const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculatBtn = document.getElementById('calculate-btn');

calculatBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(weight.value === String){
        alert("Please enter a number!")
    } else if(height.value === String){
        alert("Please enter a number!")
    } else {
        let newheight = height.value / 100
        let bmiScore = (weight.value / (newheight * newheight)).toFixed(2)
        console.log(`BMI score is: ${bmiScore}`);
        const results = document.querySelector('#result');
        let lastPhrase

        if (bmiScore >= 30){
            lastPhrase = "you're obese."
        } else if (bmiScore <= 30 && bmiScore >= 25){
            lastPhrase = "You're overweight."
        } else if (bmiScore <= 25 && bmiScore >= 18.5){
            lastPhrase = "You're healthy"
        } else {
            lastPhrase = "You're underweight"
        }

        results.textContent = `BMI score is: ${bmiScore}, ${lastPhrase}`
    }
})