import Note from './models/note';

export default (io) => {
    io.on("connection", (socket) => {
        // console.log("new user connected");
        // console.log(socket.id);
        // console.log(socket.handshake);
        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit("loadnotes", notes);
        }
        emitNotes();

        socket.on("newnote", async (data) => {
            const newNote = new Note(data);
            const savedNote = await newNote.save();
            console.log(savedNote);
        })
    })
}