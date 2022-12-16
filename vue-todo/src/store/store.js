import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
	fetch(){
		const arr = [];
		if (localStorage.length > 0) {
			for (let i = 0 ; i <localStorage.length; i++){
				if (localStorage.Key !== 'loglevel:webpack-dev-server'){
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  
				}
			}
		}
		return arr;
	},
}

export const store = new Vuex.Store({
	state:{
		todoItems:storage.fetch(),
	},
	mutations:{
		addOneItem(state, todoItem){
			// console.log('received')
			const obj = {completed:false, item:todoItem};
      // �����սô�
      // localStorage.setItem(this.newTodoItem, obj);	// �̷��� �Է��� ���, value ���� � object�� ������ Ȯ���� ���� ����.
      localStorage.setItem(todoItem, JSON.stringify(obj)); 
      state.todoItems.push(obj); // �ش� ����Ʈ ����� ����..!
		},
		removeOneItem(state, payload){
			localStorage.removeItem(payload.todoItem.item);		// ������ ������ ���� :: items �� ���ǿ��� ����
			state.todoItems.splice(payload.index, 1); 	// ����Ʈ todoitems �߿� index 1�� ����
		},
		toggleOneItem(state, payload){
			state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;   // ���⽺ũ��Ʈ�� ���� .vue �� �ִ� �����͸� �����ϴ� ���.
			localStorage.removeItem(payload.todoItem.item);		// localStorage���� update�� ���, ����� ���� �߰�.
			localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
		},
		clearAllItems(state){
      localStorage.clear();
      state.todoItems = []; //..?
		}
	}
})