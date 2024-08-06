document.addEventListener('DOMContentLoaded', function(){
  const toggleBtn = document.querySelector('.mobile-menu-toggle')
  const mobileItems = document.querySelector('.mobile-menu-items')

  toggleBtn.addEventListener('click', function(){
    mobileItems.classList.toggle('active')
  })

  // Modal

  const modal = document.querySelector('.modal')
  const playBtn = document.querySelector('.video-play-button')
  const closeBtn = document.querySelector('.modal-close-button')
  const videoPlayer = document.querySelector('#video-player')

  playBtn.addEventListener('click', function(){
    modal.style.display = 'block'

    videoPlayer.src = 'https://www.youtube.com/embed/LXb3EKWsInQ'
    // Closebtn when clicked

    closeBtn.addEventListener('click', function(){
      modal.style.display = 'none'
      videoPlayer.src =''
    })
    window.addEventListener('click', function(event){
      if(event.target == modal){
        modal.style.display = 'none'
        videoPlayer.src =''
      }
    })
  })
})

// Window scroll

window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar')
  const bTop = document.querySelector('.b-top')
  if(window.scrollY > 0){
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')
  }

  // Back Top

  if(window.scrollY == 0){
    bTop.style.display = 'none'
  } else {
    bTop.style.display = 'block'
  }
})