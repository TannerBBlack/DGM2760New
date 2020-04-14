function tellStory() {
   const noun = document.querySelector('#noun').value;
   const nounArray = noun.toLowerCase();
   const splitNouns = nounArray.split(" ");

    const adjective = document.querySelector('#adjective').value;
    const adjectiveArray = adjective.toLowerCase();
    const splitAdjectives = adjectiveArray.split(" ");

    const verb = document.querySelector('#verb').value;
    const verbArray = verb.toLowerCase();
    const splitVerbs = verbArray.split(" ");

    const myStory = `Hi! this is Tanner, speaking to you from the broadcasting ${splitNouns[0]} at the ${splitAdjectives[0]} forum.
     In case you ${splitVerbs[0]}ed in late, the score between the Los Angeles ${splitNouns[1]} and the Boston ${splitNouns[2]} is a squeker, 141 to 81. 
     This has been the most ${splitAdjectives[1]} game these ${splitAdjectives[2]} eyes have seen in years.
     First, one team scores a ${splitNouns[3]}, then wham! the other team comes right back.
     Okay, Time-out is over. The ${splitNouns[1]}s bring in the ball at mid-${splitNouns[4]}.
     James ${splitVerbs[1]}s down the ${splitNouns[5]}, 
     ${splitVerbs[2]} the defender out of his ${splitNouns[6]} and shoots a one hand shot! They win!`

    document.querySelector('#story').innerHTML = myStory;
}