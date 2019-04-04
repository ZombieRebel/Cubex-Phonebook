const initState = {
  contacts: [
    {
      id: '1',
      fullname: 'James Bont',
      email: 'james.bont@gmatil.com',
      phone: '786-123-1234',
      companyName: 'MI7'
    },
    {
      id: '2',
      fullname: 'Ivan Drogun',
      email: 'ivan.drogun3@sovok.com',
      phone: '786-321-1234',
      companyName: 'KGT'
    },
    {
      id: '3',
      fullname: 'Agent Stimh',
      email: 'mr.stimh@martix.com',
      phone: '786-321-7777',
      companyName: 'Marticx'
    }
  ]
};

const contactReducer = (state = initState, action) => {
  return state;
};

export default contactReducer;
