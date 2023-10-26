import {createForm} from './createForm.js';

export const editContactForm = () => {
  const editForm = createForm();
  editForm.title.textContent = 'Изменить данные';

  editForm.form.className = 'form-edit';

  return editForm;
};
