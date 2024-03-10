window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  
  const functionApi = 'https://shubs.azurewebsites.net/api/test';
  
  const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response;
        //console.log("Hello 👋, you are visitor number - " + count);
        document.getElementById('count').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }