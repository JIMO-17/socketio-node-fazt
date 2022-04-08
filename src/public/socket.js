const socket = io() //si el servidor estuviewra aparte, aqui se colocaria la url pero el ejecticio es localhost todo dentro 
// console.log(socket); //es un objeto que contiene metodos

export const loadNotes = (callback) => {
    socket.on("server:loadnotes", callback);    
};

export const saveNote = (title, description) => {
    socket.emit("client:newnote", {
        title,
        description
    });
};

export const onNewNote = (callback) => {
    socket.on("server:newnote", callback); 
}

export const deleteNote = id => {
    socket.emit("client:deletenote", id);
};
