var rollEnabled = true;

function buttonClicked() {
    if (!rollEnabled) {
        return;
    }

    var progress = document.querySelector('.progress');

    progress.style.animation = 'none';

    // Trigger reflow to restart the animation
    progress.offsetHeight; // This line forces a reflow

    progress.style.animation = 'progress 10s linear';
    rollEnabled = false;

    progress.addEventListener('animationend', showResult, { once: true });
}

var resultCount = 0;
function showResult() {
    resultCount++;
    rollEnabled = true;

    if (resultCount == 1) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector("#resultQuestion"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/toe.png';
        newImg.alt = 'toe';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'You Got A Foot Massage! - Unlucky :(';

        button.textContent = "Roll Again???";

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    } else if (resultCount == 2) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector(".result"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/steak.png';
        newImg.alt = 'steak';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'You Got a Steak Dinner! That\'s pretty good but can you do better?';

        button.textContent = "One More Time??????";

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    } else if (resultCount == 3) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector(".result"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/onion.png';
        newImg.alt = 'onion';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Don\'t cry! It\'s only an onion.....';

        button.textContent = "Maybe this time you will get the really good one!!";

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    } else if (resultCount == 4) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector(".result"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/watermelon.png';
        newImg.alt = 'watermelon';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'How\'d that get in here?? I already gave that to you! There\'s surely a really good one somewhere.';

        button.textContent = "Don't give up yet!";

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    } else if (resultCount == 5) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector(".result"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/me.png';
        newImg.alt = 'me';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Oh hi there! Wait, how am I here? You already have me, I can\'t be the reward!';

        button.textContent = "This time for sure you'll get it! <3";

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    } else if (resultCount == 6) {
        var button = document.querySelector("#rollBtn");
        var surpriseBox = document.querySelector("#surprise-box");
        surpriseBox.removeChild(surpriseBox.querySelector(".result"));

        // Create the new div element
        var newDiv = document.createElement('div');
        newDiv.className = 'result';

        // Create the img element
        var newImg = document.createElement('img');
        newImg.src = './images/cabin.png';
        newImg.alt = 'cabin';

        // Create the p element
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Finally you found the real real surprise! Weekend trip to a cute cabin with meee + the steak and the foot massage if you want it ;)\nContact your boo boo bear for more details!';

        button.textContent = "No More Rolls. For now.........";
        rollEnabled = false;

        // Append the img and p elements to the div
        newDiv.appendChild(newImg);
        newDiv.appendChild(newParagraph);

        // Append the new div to the surprise box
        surpriseBox.appendChild(newDiv);
    }

}