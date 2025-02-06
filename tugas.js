let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: Date.now()
  }
]

const createNote = (heading, description, created_by) => {
  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    heading,
    description,
    created_by,
    created_at: Date.now()
  };
  notes.push(newNote);
  console.log("Catatan berhasil ditambahkan.");
};

const readNote = () => {
  console.log("Daftar Catatan:");
  notes.forEach(note => {
    console.log(`ID: ${note.id}, Judul: ${note.heading}, Pembuat: ${note.created_by}, Dibuat pada: ${new Date(note.created_at).toLocaleString()}`);
    console.log(`Deskripsi: ${note.description}\n`);
  });
};

const updateNote = (id, newHeading, newDescription) => {
  const note = notes.find(note => note.id === id);
  if (note) {
    note.heading = newHeading || note.heading;
    note.description = newDescription || note.description;
    console.log("Catatan berhasil diperbarui.");
  }
};

const deleteNote = (id) => {
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    console.log("Catatan berhasil dihapus.");
  }
};

// mengetes kode:
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe");
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1);
readNote();
