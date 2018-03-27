
console.log('Starting app.js');


const fs = require('fs');

const os = require('os');
const  _=require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


var user = os.userInfo();
// fs.appendFile('message.txt', `Hello ${user.username} , I think your age is ${notes.age}`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

//var res = notes.addNote();
//console.log(res);

//console.log("Result: ",notes.add(5,-2));
// console.log(_.isString('1'));
// console.log(_.isString('true'));
const argv = yargs.argv;
var command = argv._[0];

console.log(command);
console.log('yargs: ',argv);

if(command ==='add'){
	var note = notes.addNote(argv.title,argv.body);
	console.log(note);
	if(note){
		console.log('New note created');
		console.log('********');
		notes.logNote(note);

	}else{
		console.log(`Note Exist with same title`);

	}
}


else if(command ==='remove'){
	var noteRemoved=notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note has removed':'Note not Found';
	console.log(message);
}


else if(command ==='list'){
	var allNote=notes.getAll();
	allNote.forEach(note => {
		notes.logNote(note);
	});
}


else if(command ==='read'){
	var note = notes.getNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log('Note not Found');
	}

}else{
	console.log("Invalid command");
}