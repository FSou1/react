const accordionItems = document.querySelectorAll('.accordion-item');
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', handleAccordionToggle);
});

function handleAccordionToggle(event) {
  toggleAccordionItem(event.currentTarget);
}

function toggleAccordionItem(activeHeader) {
  const activeItem = activeHeader.closest('.accordion-item');
  const isAlreadyOpen = activeItem.classList.contains('is-open');

  accordionItems.forEach(closeAccordionItem);

  if (!isAlreadyOpen) {
    openAccordionItem(activeItem);
  }
}

function openAccordionItem(item) {
  const header = item.querySelector('.accordion-header');

  item.classList.add('is-open');
  header.classList.add('is-open');
  header.setAttribute('aria-expanded', 'true');
}

function closeAccordionItem(item) {
  const header = item.querySelector('.accordion-header');

  item.classList.remove('is-open');
  header.classList.remove('is-open');
  header.setAttribute('aria-expanded', 'false');
}