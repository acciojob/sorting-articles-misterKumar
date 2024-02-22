//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ul = document.getElementById("bands");
bands.sort((str1, str2) => {
    let word1, word2;
    let sa1 = str1.split(" ");
    let sa2 = str2.split(" ");

    let i=0;
    while(i < sa1.length && (sa1[i] === "a" || sa1[i] === "an" || sa1[i] === "the" 
    || sa1[i] === "A" || sa1[i] === "An" || sa1[i] === "The")) {
        i++;
    }

    word1 = sa1[i];

    i=0;
    while(i < sa2.length && (sa2[i] === "a" || sa2[i] === "an" || sa2[i] === "the" 
    || sa2[i] === "A" || sa2[i] === "An" || sa2[i] === "The")) {
        i++;
    }

    word2 = sa2[i];

    i=0;
    while(i<word1.length && i<word2.length) {
        if(word1[i] < word2[i]) {
            return -1;
        }else if(word1[i] > word2[i]) return 1;

        i++;
    }

    if(word1.length < word2.length) return -1;
    else return 1;

});

bands.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    ul.appendChild(li);
});