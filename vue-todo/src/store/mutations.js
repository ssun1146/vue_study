const addOneItem = (state, todoItem) => {
	// console.log('received')
	const obj = {completed:false, item:todoItem};
	// �����սô�
	// localStorage.setItem(this.newTodoItem, obj);	// �̷��� �Է��� ���, value ���� � object�� ������ Ȯ���� ���� ����.
	localStorage.setItem(todoItem, JSON.stringify(obj)); 
	state.todoItems.push(obj); // �ش� ����Ʈ ����� ����..!
}

const removeOneItem = (state, payload) => {
	localStorage.removeItem(payload.todoItem.item);		// ������ ������ ���� :: items �� ���ǿ��� ����
	state.todoItems.splice(payload.index, 1); 	// ����Ʈ todoitems �߿� index 1�� ����
}

const toggleOneItem = (state, payload) => {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;   // ���⽺ũ��Ʈ�� ���� .vue �� �ִ� �����͸� �����ϴ� ���.
	localStorage.removeItem(payload.todoItem.item);		// localStorage���� update�� ���, ����� ���� �߰�.
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
	localStorage.clear();
	state.todoItems = []; //..?
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }