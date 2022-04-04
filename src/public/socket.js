const socket = io() //si el servidor estuviewra aparte, aqui se colocaria la url pero el ejecticio es localhost todo dentro 
// console.log(socket); //es un objeto que contiene metodos

export const loadNotes = () => {
    socket.on("loadnotes", (data) => {
        console.log(data);
    })
}

export const saveNote = (title, description) => {
    socket.emit("newnote", {
        title,
        description
    });
};