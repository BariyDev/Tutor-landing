document.querySelectorAll('.question').forEach(question => {
  const faqItem =  question.parentElement
  faqItem.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    faqItem.classList.toggle('active')
    answer.classList.toggle('active');
  });
});
