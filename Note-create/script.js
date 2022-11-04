const AddNote = document.getElementById('add');

const updateData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes))
}

const AddnewNote = (text = '') => {

    const noteCreate = document.createElement('div');

    noteCreate.classList.add('note');

    const noteHtmlData = `<div class="operation">
    <button class="edit"><i class="far fa-edit"></i></button>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`;

    noteCreate.insertAdjacentHTML('afterbegin',noteHtmlData);

    document.body.appendChild(noteCreate);

    //we get referance from this node element

    const editButton = noteCreate.querySelector('.edit')
    const delButton = noteCreate.querySelector('.delete')

    const mainButton = noteCreate.querySelector('.main')

    const textArea = noteCreate.querySelector('textarea')


    // create  a delete event
    
    delButton.addEventListener('click', () => {
        noteCreate.remove();
        updateData();
    })

    //Togel edit button
   textArea.value = text;
   mainButton.innerHTML = text;

    editButton.addEventListener('click', () => {
        mainButton.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainButton.innerHTML = value;

        updateData();

    })


    

}

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => AddnewNote(note))}

AddNote.addEventListener('click', () => AddnewNote());

