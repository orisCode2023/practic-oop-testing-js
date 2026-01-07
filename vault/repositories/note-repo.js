import noteData from '../data/notes-data.js';

class NoteRepo {
  add(note) {
    noteData.push(note);
  }

  listByOwner(username) {
    return noteData.filter((note) => note.ownerUsername === username);
  }

  deleteById(ownerUsername, noteId) {
    const index = noteData.findIndex(
      (note) => note.ownerUsername === ownerUsername && note.id === noteId
    );
    if (index !== -1) {
      noteData.splice(index, 1);
    }
  }
}

export default NoteRepo;