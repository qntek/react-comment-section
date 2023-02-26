import data from '../data';

const listOfLocalComments = JSON.parse(window.localStorage.getItem('comments'))
  
let listOfComments


function loadLocalStoredComments() {
	if (listOfLocalComments) {
		listOfComments = {...listOfLocalComments}
	} else listOfComments = window.localStorage.setItem('comments', JSON.stringify(data));
  return listOfComments;
}

function saveToLocal(obj) {
  listOfComments = {'currentUser': listOfComments.currentUser, 'comments': obj}
	window.localStorage.setItem('comments', JSON.stringify(listOfComments));
}

export { loadLocalStoredComments, saveToLocal, listOfComments };
