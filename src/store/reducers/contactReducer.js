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
  switch (action.type) {
    case 'CREATE_CONTACT':
      console.log('created contact', action.contact);
      return state;
    case 'CREATE_CONTACT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
