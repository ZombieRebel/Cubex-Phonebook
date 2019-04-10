export const createContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async call to database
    console.log("CONTACT WHEN CREATE " + contact);
    const firestore = getFirestore();
    firestore
      .collection("contacts")
      .add({
        ...contact,
        contactId: 1234
      })
      .then(() => {
        dispatch({ type: "CREATE_CONTACT", contact }); //contact: contact
      })
      .catch(err => {
        dispatch({ type: "CREATE_CONTACT_ERROR", err });
      });
  };
};

export const editContact = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log("FROM ACTION ID" + contact);
    firestore
      .collection("contacts")
      .doc(contact.id)
      .update({
        ...contact
      })
      .then(() => {
        dispatch({ type: "EDIT_CONTACT", contact }); //contact: contact
        console.log(contact + "from dispatch");
      })
      .catch(err => {
        dispatch({ type: "EDIT_CONTACT_ERROR", err });
      });
  };
};
