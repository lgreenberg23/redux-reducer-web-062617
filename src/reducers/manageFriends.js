export function manageFriends(state, action){
	switch (action.type){
		case 'ADD_FRIEND':
			return {friends: state.friends.concat(action.friend)}
			break;
		case 'REMOVE_FRIEND':




			//return {state.friends.slice(0, state.length-1)}
			return {friends: state.friends.filter(obj => obj.id !== action.id)}
			break;
		default:
			return state
	}

}


// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
 
// let olderDog = {...dog, age: dog.age + 1}

// function reducer(state, action){      
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     case 'DECREASE_COUNT'
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// }

// Lets write a function that will help us manage our gift recipient list. 
// We should be able to add a person we need to buy a present for and remove 
// people we no longer like (or who give us socks every year!).