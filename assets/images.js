const images = {
  init: function () {
    console.log("initialistion du fichier images.js back office ");

    let links = document.querySelectorAll("[data-delete]"); 

    // Je boucle sur mes liens
     for ( let link of links) {
      link.addEventListener("click", images.deleteImageProduct);
      console.log(link);
      }
      
      
  },
  deleteImageProduct : function(e) {
    e.preventDefault();
    // console.log("vous etes bien dans deleteImageProduct");
    // Je demande confirmation
    if(confirm('Voulez-vous supprimer cette image de votre prduit ?')){
      // J'envoie ma requête ajax
      fetch(this.getAttribute("href"), {
        method: 'DELETE',
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
    }, 
    body: JSON.stringify({"_token": this.dataset.token})
  })
    .then(response => response.json())
    .then(data => {
      if(data.success){
        this.parentElement.remove();
      }else{
        alert(data.error);
      }    
    })

  }
  }

};

document.addEventListener("DOMContentLoaded", images.init);