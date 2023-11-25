const content = document.querySelector("#content");
notes = [
    { title: "wow", description: "description"},
    { title: "wow 1", description: "description 1"},
    { title: "wow 2", description: "description 2"},
];
notes.forEach((note)=> {
    const noteModel = document.createElement("ul");
    const title = document.createElement("li");
    const titleText = document.createElement("b");
    const description = document.createElement("li");

    content.appendChild(noteModel);
    noteModel.appendChild(title);
    noteModel.appendChild(description);
    title.appendChild(titleText);

    titleText.textContent =note.title;
    description.textContent =note.description;
});











