import {createForm} from './createForm.js';

export const editContactForm = (contacts) => {
  const editForm = createForm(contacts);
  editForm.title.textContent = 'Изменить данные';

  editForm.form.className = 'form-edit';

  return editForm;
};
