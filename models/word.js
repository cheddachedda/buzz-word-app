const words = [
  {
    content: 'array',
    category: 'javascript'
  },
  {
    content: 'text-align',
    category: 'css'
  },
  {
    content: 'destructuring',
    category: 'javascript'
  }
];

const word = {
  findMany() {
    return words;
  },

  create(newWord) {
    words.push(newWord);
  },

  delete() {

  }
};

module.exports = word;