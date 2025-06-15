const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  const data = JSON.parse(saved);
  formData.email = data.email || '';
  formData.message = data.message || '';
  email.value = formData.email;
  message.value = formData.message;
}

form.addEventListener('input', e => {
  if (!['email', 'message'].includes(e.target.name)) return;
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log({ ...formData });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
});
