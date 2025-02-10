debugger;  
const projetos = [  
  { nome: 'Efood - Restaurante delivery', url: 'https://efood-gamma-wheat.vercel.app/' },  
  { nome: 'Projeto 2', url: 'https://efood-gamma-wheat.vercel.app/' },  
  { nome: 'Projeto 3', url: 'https://efood-gamma-wheat.vercel.app/' },  
];  

function handleProjectClick(url) {  
  window.location.href = url;  
}  

const projetosContainer = document.querySelectorAll('.projeto');  
projetosContainer.forEach((container, index) => {  
  const div = document.createElement('div');  
  div.textContent = projetos[index].nome;  
  div.classList.add('projeto-item');  
  div.addEventListener('click', () => handleProjectClick(projetos[index].url));  
  container.appendChild(div);  
});