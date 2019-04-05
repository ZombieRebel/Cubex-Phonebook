export const createContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to database

    const firestore = getFirestore();
    firestore.collection('contacts').add({
      ...contact,
      contactId: 1234
    }).then(() => {
      dispatch({ type: 'CREATE_CONTACT', contact }); //contact: contact
    }).catch((err) => {
      dispatch({type: 'CREATE_CONTACT_ERROR', err});
    })
  };
};
