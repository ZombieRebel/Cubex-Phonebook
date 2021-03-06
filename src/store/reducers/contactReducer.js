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
    case 'EDIT_CONTACT':
      console.log('edited contact', action.contact);
      return state;
    case 'EDIT_CONTACT_ERROR':
      console.log('edit contact error', action.err);
      return state;
    case 'DELETE_CONTACT':
      console.log('deleted contact', action.contact);
      return state;
    case 'DELETE_CONTACT_ERROR':
      console.log('delete contact error', action.err);
      return state;
    case 'SEARCH_CONTACT':
      console.log('search contact', action.contacts, action.searchString);
      return state;
    case 'SEARCH_CONTACT_ERROR':
      console.log('search contact error', action.err);
      return state;
    default:
      return state;
  }
};

export default contactReducer;
