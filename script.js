const panels = document.querySelectorAll('.panel');
const activePanel = document.querySelector('.active');


// const arrayOfPanels = Array.from(panels)
// console.log(arrayOfPanels);

window.addEventListener('click', () => {
  console.log('clicked!');
    activePanel.classList.remove('active');
  });

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active');
  });
});
