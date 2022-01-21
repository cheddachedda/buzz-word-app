const ul = document.querySelector('.words');
const newWordForm = document.querySelector('.new-word-form');
const newWordInput = document.querySelector('.new-word-input');

let url = 'http://localhost:8080/api/words';

const fetchWords = () => {
  ul.innerHTML = '';

  axios
  .get(url)
  .then((res) => {
    let words = res.data;
    words.forEach(word => {
      let li = document.createElement('li');
      li.textContent = word.content;
      ul.appendChild(li);
    });
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const newWord = newWordInput.value;

  axios.post('/api/words', {
    content: newWord,
    category: 'css'
  }).then(() => {
    fetchWords();
  });
};

fetchWords();

newWordForm.addEventListener('submit', handleSubmit);