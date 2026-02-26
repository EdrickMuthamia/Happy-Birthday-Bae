const messageBox = document.getElementById('messageBox');
const message = [
    "Happy Birthday, my beautiful girl 🎉",
    "Meeting you was my favorite plot twist.",
    "You didn't just enter my life…",
    "you changed the whole program.",
    "May your day be filled with smiles,",
    "and your year filled with blessings.",
    "Forever grateful for you. ❤️"
];

message.forEach((line, index) => {
    const p = document.createElement('p');
    p.className = 'message-line';
    p.textContent = line;
    p.style.animationDelay = `${index * 0.3}s`;
    messageBox.appendChild(p);
});
