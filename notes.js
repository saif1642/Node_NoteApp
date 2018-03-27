
console.log('Starting notes.js');

// module.exports.addNote=function(){
// 	console.log("addNote");
// 	return "newNote";
// };

// module.exports.add=(a,b) => {
	
// 	return a+b;
// };
var fetchNotes = () => {
	try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
	}catch(e){
		return [];
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

const fs = require('fs');
var addNote = (title,body) => {
	var notes = fetchNotes();
    var note = {
		title,
		body
	};
	
	
	
    var duplicateNote = notes.filter((note)=>{
      return note.title === title;
	});
	console.log(duplicateNote.length);
	if(duplicateNote.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}

  
  
};
var getAll = () => {
	return fetchNotes();
};
var getNote = (title) => {
	var Notes = fetchNotes();
	var filteredNotes = Notes.filter((note) =>{
       return note.title === title;
	});
	return filteredNotes[0];

};
var removeNote = (title) => {
	var Notes = fetchNotes();
	var filteredNotes = Notes.filter((note) => {
      return note.title!==title;
	});
	saveNotes(filteredNotes);
	return Notes.length !==filteredNotes.length;
};
var logNote = (note) =>{
	console.log('------');
	console.log(`Title : ${note.title}`);
	console.log(`Body : ${note.body}`);
};
module.exports={
	addNote,
	getAll,
	getNote,
	logNote,
	removeNote
};