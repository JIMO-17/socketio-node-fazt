import Note from './models/note';

export default (io) => {
    io.on("connection", (socket) => {
        // console.log("new user connected");
        // console.log(socket.id);
        // console.log(socket.handshake);
        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit("server:loadnotes", notes);
        }
        emitNotes();

        socket.on("client:newnote", async (data) => {
            const newNote = new Note(data);
            const savedNote = await newNote.save();
            // console.log(savedNote);
            io.emit("server:newnote", savedNote);
        })

        socket.on("client:deletenote", async (id) => {
            await Note.findByIdAndDelete(id);
            emitNotes();
        })
    })
}

// socket. es para emitir a una solo cliente que abrio la conexion, pero io. emite la informacion a todos los sockets conectados