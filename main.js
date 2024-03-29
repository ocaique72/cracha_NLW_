const LinksSocialMedia = {
  github: 'ocaique72', 
  linkedin: 'in/caique-araujo-267b36163/',
  facebook: 'caique.felipe.906',
  instagram: 'caiquearaujo72',
  // twitter: 'NAO QUIS COLOCAR' 
  //colocar linkedin depois
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()
