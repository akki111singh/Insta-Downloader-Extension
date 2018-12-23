const link = document.createElement('link');
link.href = chrome.extension.getURL('insta-down-css.css');
link.type = 'text/css';
link.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(link);
let i = 0;


const getHTML = function gethtml(url, callback) {
  // Feature detection
  if (!window.XMLHttpRequest) return;

  // Create new request
  const xhr = new XMLHttpRequest();

  // Setup callback
  xhr.onload = function onload() {
    if (callback && typeof (callback) === 'function') {
      callback(this.responseXML);
    }
  };

  // Get the HTML
  xhr.open('GET', url);
  xhr.responseType = 'document';
  xhr.send();
};

function injectButtons() {
  const buttons = document.querySelectorAll('button');
  let ElseProfile = false;
  let SelfProfile = false;
  let explore = false;
  let mainpage = false;
  const headings = document.querySelectorAll('h2');
  const main = document.getElementsByClassName('Ppjfr UE9AK')


  for (i = 0; i < buttons.length; i += 1) {
    if (
      buttons[i].innerText === 'Follow'
            || buttons[i].innerText === 'Following'
    ) {
      ElseProfile = true;
    }
    if (buttons[i].innerText === 'Edit Profile') {
      SelfProfile = true;
    }
  }

  for (i = 0; i < headings.length; i += 1) {
    if (headings[i].innerText === 'Explore') {
      explore = true;
    }
  }

  if(main.length > 1){
    mainpage = true
    ElseProfile = false
  }
  // Grab header elements in each post or profile
  const headers = document.querySelectorAll('header');

  // Grab images appearing on the page
  const images = document.querySelectorAll('img');

  for (i = 0; i < images.length; i += 1) {
  // making the image link a downloading link
    images[i].src = `${images[i].src}&dl=1`;
  }
  // Grab images appearing on the page
  const videos = document.querySelectorAll('video');
  // making the video link as downloading dlink

  if (videos[0]) {
    for (i = 0; i < videos.length; i += 1) { videos[i].src = `${videos[i].src}&dl=1`; }
  }
  let j = 0;

  if (explore) {
    for (i = 3; i < images.length; i += 1) {
      const x = images[i].parentElement.parentElement.parentElement.parentElement;

      // For downloading video
      if (x.getElementsByClassName('Byj2F').length === 1) {
        // getting video link
        const y = images[i].parentElement.parentElement.parentElement;

        // get the html content of video link to download video
        getHTML(y, (response) => {
          const video = response.querySelectorAll("meta[property='og:video:secure_url']");
          const db = document.createElement('a');
          // making the image link a downloading link
          video[0].content = `${video[0].content}&dl=1`;

          db.innerHTML = `<a download href=${video[0].content}>
                    <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;"> video Download</button>`;
          if (x.querySelectorAll('button').length < 1) {
            x.appendChild(db);
          }
        });
      }
      // For downloading image
      else {
        const db = document.createElement('a');

        db.innerHTML = `<a download href=${images[i].src}>
                  <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;">Download</button>`;
        if (x.querySelectorAll('button').length < 1) {
          x.appendChild(db);
        }
        const btns = x.querySelectorAll('button');
        if (btns[0] && btns[0].parentElement.href === document.location.href) {
          btns[0].parentElement.href = images[i].src;
        }
      }
    }
  } else if (ElseProfile ) {
    const dlbutton = document.createElement('a');
    dlbutton.innerHTML = `
                <a download href=${images[0].src}>
                <button class="instanshu-unite instanshu-sm instanshu-success">Download DP</button>`;
    if (headers[0].querySelectorAll('button').length < 3) {
      headers[0].appendChild(dlbutton);
    }

    for (i = 1; i < images.length; i += 1) {
      const x = images[i].parentElement.parentElement.parentElement.parentElement;

      if (x.getElementsByClassName('Byj2F').length === 1) {
        const y = images[i].parentElement.parentElement.parentElement;
        getHTML(y, (response) => {
          const video = response.querySelectorAll("meta[property='og:video:secure_url']");
          const db = document.createElement('a');
          video[0].content = `${video[0].content}&dl=1`;

          db.innerHTML = `<a download href=${video[0].content}>
                    <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;"> video Download</button>`;
          if (x.querySelectorAll('button').length < 1) {
            x.appendChild(db);
          }
        });
      } else {
        const db = document.createElement('a');
        db.innerHTML = `<a download href=${images[i].src}>
                  <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;">Download</button>`;
        if (x.querySelectorAll('button').length < 1) {
          x.appendChild(db);
        }
        const btns = x.querySelectorAll('button');
        if (btns[0] && btns[0].parentElement.href === document.location.href) {
          btns[0].parentElement.href = images[i].src;
        }
      }
    }
  }else if (SelfProfile) {
    const dlbutton = document.createElement('a');
    dlbutton.innerHTML = `
                <a download href=${images[0].src}>
                <button class="instanshu-unite instanshu-sm instanshu-success">Download DP</button>`;
    if (headers[0].querySelectorAll('button').length < 4) {
      headers[0].appendChild(dlbutton);
    }

    for (i = 1; i < images.length; i += 1) {
      const x = images[i].parentElement.parentElement.parentElement.parentElement;
      if (x.getElementsByClassName('Byj2F').length === 1) {
        const y = images[i].parentElement.parentElement.parentElement;
        getHTML(y, (response) => {
          const video = response.querySelectorAll("meta[property='og:video:secure_url']");
          const db = document.createElement('a');
          video[0].content = `${video[0].content}&dl=1`;

          db.innerHTML = `<a download href=${video[0].content}>
                    <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;"> video Download</button>`;
          if (x.querySelectorAll('button').length < 1) {
            x.appendChild(db);
          }
        });
      } else {
        const db = document.createElement('a');
        db.innerHTML = `<a download href=${images[i].src}>
                  <button class="instanshu-unite instanshu-sm instanshu-success" style="left: 100px; top: 10px;">Download</button>`;
        if (x.querySelectorAll('button').length < 1) {
          x.appendChild(db);
        }
        const btns = x.querySelectorAll('button');
        if (btns[0] && btns[0].parentElement.href === document.location.href) {
          btns[0].parentElement.href = images[i].src;
        }
      }
    }
  }

    else if(mainpage) {
    // Iterate through the headers and inject a button to download corresponding image
    for (i = 0; i < headers.length; i += 1) {
      const dlbutton = document.createElement('a');
      const pfbutton = document.createElement('a');
      const buttonsParent = document.createElement('div');
      let download= '';
      buttonsParent.className = 'download-buttons';
      let y = headers[i].querySelectorAll('img');
      let x = headers[i].nextElementSibling.querySelectorAll('img')
      let z = headers[i].nextElementSibling.querySelectorAll('video')


      const dplink = y[0].src;
      if(x.length === 1 ){
         dlink = x[0].src
         download = 'Download image'
        }
      if(z.length === 1){
           dlink = z[0].src
           download = 'Download video'
        }

      dlbutton.innerHTML = `
                <a download href=${dlink}>
                <button class="buttonDownload">${download}</button>`;

      pfbutton.innerHTML = `
                <a download href=${dplink}>
                <button class="instaashu-material-circle instaashu-sm
                instaashu-success instaashu-no-outline"
                style ="margin-right:10px; padding: 4px 1px;">DP<i class="fas fa-arrow-circle-down"></i>
                </button>`;

      buttonsParent.appendChild(pfbutton);
      buttonsParent.appendChild(dlbutton);

      if (headers[i].querySelectorAll('button').length < 2) {
        headers[i].appendChild(buttonsParent);
      }
      const btns = headers[i].querySelectorAll('button');
      if (btns[1] && btns[1].parentElement.href === document.location.href) {
        btns[1].parentElement.href = dlink;
      }
    }
  }
  window.onscroll = function ref() {
    refresh();
  };
}

function refresh() {
  // as we only can have 8 articles at a time.
  injectButtons();
}

injectButtons();
