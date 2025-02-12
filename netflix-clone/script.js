// --- For Episodes ---
function highlightEpisode(element) {
    if (!element.classList.contains('selected')) {
      element.style.backgroundColor = "#333330";
      element.style.transform = "scale(1.02)";
      element.style.transition = "0.3s ease-in-out";
    }
  }
  
  function unhighlightEpisode(element) {
    if (!element.classList.contains('selected')) {
      element.style.backgroundColor = "#181818";
      element.style.transform = "scale(1)";
      element.style.transition = "0.3s ease-in-out";
    }
  }
  
  function showEpisodeDetail(element) {
    // Remove "selected" class from all episodes
    const episodes = document.querySelectorAll('.episode');
    episodes.forEach(ep => {
      ep.classList.remove('selected');
      ep.style.backgroundColor = "#181818";
    });
    
    // Mark the clicked episode as selected
    element.classList.add('selected');
    element.style.backgroundColor = "#333330";
    
    // Retrieve the image source and show the modal
    const imgElement = element.querySelector("img");
    if (!imgElement) return;
    const imgSrc = imgElement.getAttribute("src");
    
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // --- For Bonus Features ---
  function highlightBonus(element) {
    element.style.backgroundColor = "#333330";
    element.style.transform = "scale(1.02)";
    element.style.transition = "0.3s ease-in-out";
  }
  
  function unhighlightBonus(element) {
    element.style.backgroundColor = "#181818";
    element.style.transform = "scale(1)";
    element.style.transition = "0.3s ease-in-out";
  }
  
  function showBonusDetail(element) {
    // Retrieve the image source and show the modal (no "selected" state required)
    const imgElement = element.querySelector("img");
    if (!imgElement) return;
    const imgSrc = imgElement.getAttribute("src");
    
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // --- Modal Close Logic ---
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };
  
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  