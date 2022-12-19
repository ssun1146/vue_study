const addOneItem = (state, todoItem) => {
	// console.log('received')
	const obj = {completed:false, item:todoItem};
	// 저장합시다
	// localStorage.setItem(this.newTodoItem, obj);	// 이렇게 입력할 경우, value 값에 어떤 object가 들어갔는지 확인이 되지 않음.
	localStorage.setItem(todoItem, JSON.stringify(obj)); 
	state.todoItems.push(obj); // 해당 리스트 만드는 역할..!
}

const removeOneItem = (state, payload) => {
	localStorage.removeItem(payload.todoItem.item);		// 저장한 데이터 삭제 :: items 를 조건에서 삭제
	state.todoItems.splice(payload.index, 1); 	// 리스트 todoitems 중에 index 1개 삭제
}

const toggleOneItem = (state, payload) => {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;   // 여기스크립트는 현재 .vue 에 있는 데이터를 수정하는 방식.
	localStorage.removeItem(payload.todoItem.item);		// localStorage에는 update가 없어서, 지우고 새로 추가.
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
	localStorage.clear();
	state.todoItems = []; //..?
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }