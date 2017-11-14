// test('should setup set expense action object with data', () => {
//   const action = setExpenses(expenses);

//   expect(action).toEqual({
//     type: "SET_EXPENSES",
//     expenses
//   });
// });

// test('should fetch the expenses from firebase', (done) => {
//   const store = createMockStore(defaultAuthState);
//   store.dispatch(startSetExpenses()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'SET_EXPENSES',
//       expenses
//     });
//     done();
//   });
// });
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);
