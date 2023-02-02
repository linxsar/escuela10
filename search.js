const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const dataTable = document.getElementById('dataTable');

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const nameCell = cells[0];
      
      if (nameCell.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }
});

searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value.toLowerCase();
  const rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    const nameCell = cells[0];
    
    if (nameCell.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});

clearBtn.addEventListener('click', function() {
  searchInput.value = '';
  const rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = '';
  }
});


 
