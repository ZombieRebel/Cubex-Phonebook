export const createContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to database
    const firestore = getFirestore();
    firestore
      .collection('contacts')
      .add({
        ...contact,
        contactId: 1234
      })
      .then(() => {
        dispatch({ type: 'CREATE_CONTACT', contact }); //contact: contact
      })
      .catch(err => {
        dispatch({ type: 'CREATE_CONTACT_ERROR', err });
      });
  };
};

export const editContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('contacts')
      .doc(contact.id)
      .update({
        ...contact
      })
      .then(() => {
        dispatch({ type: 'EDIT_CONTACT', contact }); //contact: contact
      })
      .catch(err => {
        dispatch({ type: 'EDIT_CONTACT_ERROR', err });
      });
  };
};

export const deleteContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('contacts')
      .doc(contact.id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_CONTACT', contact }); //contact: contact
      })
      .catch(err => {
        dispatch({ type: 'DELETE_CONTACT_ERROR', err });
      });
  };
};
