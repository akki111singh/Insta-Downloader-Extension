function injectButtons() {

  buttons = document.querySelectorAll('button');
  else_profile = false;
  self_profile = false;

  for(var i=0; i<buttons.length; i++) {
    if(buttons[i].innerText === "Follow" || buttons[i].innerText === "Following") {
      else_profile = true;
    }
    if(buttons[i].innerText === "Edit Profile") {
      self_profile = true;
    }
  }


	// Grab header elements in each post or profile
	headers = document.querySelectorAll('header');

	// Grab images appearing on the page
  images = document.querySelectorAll('img');

  // Grab images appearing on the page
  videos = document.querySelectorAll('video');
  let j = 0;

  css = `<style>
            @charset "UTF-8";
            .instaashu-default {
              color: #fff;
            }
            .instaashu-primary,
            .instaashu,
            .instaashu-lg,
            .instaashu-md,
            .instaashu-sm,
            .instaashu-xs {
              color: #1d89ff;
            }
            .instaashu-warning {
              color: #feab3a;
            }
            .instaashu-danger {
              color: #ff5964;
            }
            .instaashu-success {
              color: #28b78d;
            }
            .instaashu-royal {
              color: #bd2df5;
            }
            .instaashu,
            .instaashu-lg,
            .instaashu-md,
            .instaashu-sm,
            .instaashu-xs {
              margin: 0;
              padding: 0;
              border-width: 0;
              border-color: transparent;
              background: transparent;
              font-weight: 400;
              cursor: pointer;
              position: relative;
            }
            .instaashu-lg {
              padding: 8px 15px;
              font-size: 24px;
              font-family: inherit;
            }
            .instaashu-md {
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
            }
            .instaashu-sm {
              padding: 4px 1px;
              font-size: 16px;
              margin-right: 10px;
              font-family: inherit;
            }
            .instaashu-xs {
              padding: 3px 8px;
              font-size: 12px;
              font-family: inherit;
            }
            .instaashu-material-circle {
              margin: 0;
              padding: 0;
              border-width: 0;
              border-color: transparent;
              background: transparent;
              font-weight: 400;
              cursor: pointer;
              position: relative;
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
              overflow: hidden;
              border-width: 0;
              border-radius: 50%;
              background: #fff;
              box-shadow: 0 2px 5px 0 rgba(0,0,0,0.18), 0 1px 5px 0 rgba(0,0,0,0.15);
              color: #1d89ff;
              -webkit-transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              -webkit-transform: translate3d(0, 0, 0);
                      transform: translate3d(0, 0, 0);
            }
            .instaashu-material-circle:hover,
            .instaashu-material-circle:focus {
              box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
              -webkit-transition: box-shadow 0.4s ease-out;
              transition: box-shadow 0.4s ease-out;
            }
            .instaashu-material-circle.instaashu-xs {
              padding: 3px 8px;
              font-size: 12px;
              font-family: inherit;
              width: 28px;
              height: 28px;
              line-height: 24px;
            }
            .instaashu-material-circle.instaashu-sm {
              padding: 4px 10px;
              font-size: 16px;
              font-family: inherit;
              width: 36px;
              height: 36px;
              line-height: 30px;
            }
            .instaashu-material-circle.instaashu-md {
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
              width: 44px;
              height: 44px;
              line-height: 38px;
            }
            .instaashu-material-circle.instaashu-lg {
              padding: 8px 15px;
              font-size: 24px;
              font-family: inherit;
              width: 54px;
              height: 54px;
              line-height: 44px;
            }
            .instaashu-material-circle.instaashu-default {
              background: #fff;
              color: #1d89ff;
            }
            .instaashu-material-circle.instaashu-primary {
              background: #1d89ff;
              color: #fff;
            }
            .instaashu-material-circle.instaashu-warning {
              background: #feab3a;
              color: #fff;
            }
            .instaashu-material-circle.instaashu-danger {
              background: #ff5964;
              color: #fff;
            }
            .instaashu-material-circle.instaashu-success {
              background: #28b78d;
              color: #fff;
            }
            .instaashu-material-circle.instaashu-royal {
              background: #bd2df5;
              color: #fff;
            }

            .instanshu-default {
              color: #fff;
            }
            .instanshu-primary,
            .instanshu,
            .instanshu-lg,
            .instanshu-md,
            .instanshu-sm,
            .instanshu-xs {
              color: #1d89ff;
            }
            .instanshu-warning {
              color: #feab3a;
            }
            .instanshu-danger {
              color: #ff5964;
            }
            .instanshu-success {
              color: #28b78d;
            }
            .instanshu-royal {
              color: #bd2df5;
            }
            .instanshu,
            .instanshu-lg,
            .instanshu-md,
            .instanshu-sm,
            .instanshu-xs {
              margin: 0;
              padding: 0;
              border-width: 0;
              border-color: transparent;
              background: transparent;
              font-weight: 400;
              cursor: pointer;
              position: relative;
            }
            .instanshu-lg {
              padding: 8px 15px;
              font-size: 24px;
              font-family: inherit;
            }
            .instanshu-md {
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
            }
            .instanshu-sm {
              padding: 4px 10px;
              font-size: 16px;
              font-family: inherit;
            }
            .instanshu-xs {
              padding: 3px 8px;
              font-size: 12px;
              font-family: inherit;
            }
            .instanshu-unite {
              margin: 0;
              padding: 0;
              border-width: 0;
              border-color: transparent;
              background: transparent;
              font-weight: 400;
              cursor: pointer;
              position: relative;
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
              z-index: 0;
              overflow: hidden;
              border: 1px solid #1d89ff;
              border-radius: 100px;
              background: #fff;
              color: #1d89ff;
              -webkit-transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1), border-color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1), border-color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
            }
            .instanshu-unite:before {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 120%;
              background: #d6e3ff;
              content: '';
              opacity: 0;
              z-index: -1;
              -webkit-transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              -webkit-transform: translate3d(-110%, -10%, 0) skewX(-20deg);
                      transform: translate3d(-110%, -10%, 0) skewX(-20deg);
            }
            .instanshu-unite:after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 120%;
              background: rgba(214,227,255,0.7);
              content: '';
              opacity: 0;
              z-index: -1;
              -webkit-transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
              -webkit-transform: translate3d(110%, -10%, 0) skewX(-20deg);
                      transform: translate3d(110%, -10%, 0) skewX(-20deg);
            }
            .instanshu-unite:hover,
            .instanshu-unite:focus {
              box-shadow: 0 1px 8px rgba(58,51,53,0.3);
              color: #1d89ff;
              -webkit-transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
            }
            .instanshu-unite:hover:before,
            .instanshu-unite:focus:before {
              opacity: 1;
              -webkit-transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              -webkit-transform: translate3d(-50%, -10%, 0) skewX(-20deg);
                      transform: translate3d(-50%, -10%, 0) skewX(-20deg);
            }
            .instanshu-unite:hover:after,
            .instanshu-unite:focus:after {
              opacity: 1;
              -webkit-transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1), -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
              -webkit-transform: translate3d(50%, -10%, 0) skewX(-20deg);
                      transform: translate3d(50%, -10%, 0) skewX(-20deg);
            }
            .instanshu-unite.instanshu-xs {
              padding: 3px 8px;
              font-size: 12px;
              font-family: inherit;
            }
            .instanshu-unite.instanshu-xs:hover,
            .instanshu-unite.instanshu-xs:focus {
              box-shadow: 0 1px 4px rgba(58,51,53,0.3);
            }
            .instanshu-unite.instanshu-sm {
              padding: 4px 10px;
              font-size: 16px;
              font-family: inherit;
            }
            .instanshu-unite.instanshu-sm:hover,
            .instanshu-unite.instanshu-sm:focus {
              box-shadow: 0 1px 6px rgba(58,51,53,0.3);
            }
            .instanshu-unite.instanshu-md {
              font-size: 20px;
              font-family: inherit;
              padding: 5px 12px;
            }
            .instanshu-unite.instanshu-md:hover,
            .instanshu-unite.instanshu-md:focus {
              box-shadow: 0 1px 8px rgba(58,51,53,0.3);
            }
            .instanshu-unite.instanshu-lg {
              padding: 8px 15px;
              font-size: 24px;
              font-family: inherit;
            }
            .instanshu-unite.instanshu-lg:hover,
            .instanshu-unite.instanshu-lg:focus {
              box-shadow: 0 1px 10px rgba(58,51,53,0.3);
            }
            .instanshu-unite.instanshu-default {
              border-color: #1d89ff;
              color: #1d89ff;
            }
            .instanshu-unite.instanshu-default:hover,
            .instanshu-unite.instanshu-default:focus {
              background: #d6e3ff;
              color: #1d89ff;
            }
            .instanshu-unite.instanshu-default:before {
              background: #a7c3ff;
            }
            .instanshu-unite.instanshu-default:after {
              background: #d6e3ff;
            }
            .instanshu-unite.instanshu-primary {
              border-color: #1d89ff;
              color: #1d89ff;
            }
            .instanshu-unite.instanshu-primary:hover,
            .instanshu-unite.instanshu-primary:focus {
              background: #1d89ff;
              color: #fff;
            }
            .instanshu-unite.instanshu-primary:before {
              background: #006de3;
            }
            .instanshu-unite.instanshu-primary:after {
              background: #1d89ff;
            }
            .instanshu-unite.instanshu-warning {
              border-color: #feab3a;
              color: #feab3a;
            }
            .instanshu-unite.instanshu-warning:hover,
            .instanshu-unite.instanshu-warning:focus {
              background: #feab3a;
              color: #fff;
            }
            .instanshu-unite.instanshu-warning:before {
              background: #f89001;
            }
            .instanshu-unite.instanshu-warning:after {
              background: #feab3a;
            }
            .instanshu-unite.instanshu-danger {
              border-color: #ff5964;
              color: #ff5964;
            }
            .instanshu-unite.instanshu-danger:hover,
            .instanshu-unite.instanshu-danger:focus {
              background: #ff5964;
              color: #fff;
            }
            .instanshu-unite.instanshu-danger:before {
              background: #ff1424;
            }
            .instanshu-unite.instanshu-danger:after {
              background: #ff5964;
            }
            .instanshu-unite.instanshu-success {
              border-color: #28b78d;
              color: #28b78d;
            }
            .instanshu-unite.instanshu-success:hover,
            .instanshu-unite.instanshu-success:focus {
              background: #28b78d;
              color: #fff;
            }
            .instanshu-unite.instanshu-success:before {
              background: #209271;
            }
            .instanshu-unite.instanshu-success:after {
              background: #28b78d;
            }
            .instanshu-unite.instanshu-royal {
              border-color: #bd2df5;
              color: #bd2df5;
            }
            .instanshu-unite.instanshu-royal:hover,
            .instanshu-unite.instanshu-royal:focus {
              background: #bd2df5;
              color: #fff;
            }
            .instanshu-unite.instanshu-royal:before {
              background: #a20bdd;
            }
            .instanshu-unite.instanshu-royal:after {
              background: #bd2df5;
            }

          </style>`;

  if(else_profile) {
    let dlbutton = document.createElement('a');
    dlbutton.innerHTML = ` ${css}
                <a download href=${images[0].src}>
                <button class="instanshu-unite instanshu-sm instanshu-success">Download DP</button>`;
      if(headers[0].querySelectorAll('button').length < 3) {
        headers[0].appendChild(dlbutton);
      }
  }

  else if (self_profile) {
    let dlbutton = document.createElement('a');
    dlbutton.innerHTML = ` ${css}
                <a download href=${images[0].src}>
                <button class="instanshu-unite instanshu-sm instanshu-success">Download DP</button>`;
      if(headers[0].querySelectorAll('button').length < 4) {
        headers[0].appendChild(dlbutton);
      }
  }

  else {
    // Iterate through the headers and inject a button to download corresponding image
    for(let i = 0; i<headers.length; i++) {
      let dlbutton = document.createElement('a');
      let pfbutton = document.createElement('a');
      dlink = images[(2*i)+1].src;
      dplink = images[2*i].src;
      if (images[(2*i) + 1].naturalHeight === 150 || (videos[j] && videos[j].poster === dlink)) {
        if(videos[j].src) {
          dlink = videos[j].src;
        }
        j++;
      }

      dlbutton.innerHTML = ` ${css}
                <a download href=${dlink}>
                <button class="instanshu-unite instanshu-sm instanshu-success">Download</button>`;

      pfbutton.innerHTML = ` ${css}
                <a download href=${dplink}>
                <button class="instaashu-material-circle instaashu-sm instaashu-success instaashu-no-outline" style ="margin-right:10px; padding: 4px 1px;">DP<i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>`;

      if(headers[i].querySelectorAll('button').length < 2) {
        headers[i].appendChild(pfbutton);
        headers[i].appendChild(dlbutton);
      }
      btns = headers[i].querySelectorAll('button');
      if(btns[0] && btns[0].parentElement.href === "https://www.instagram.com/") {
        btns[0].parentElement.href = dlink;
      }
    }
  }
  window.onscroll = function() {refresh()};
}

function refresh() {
  // as we only can have 8 articles at a time.
      injectButtons();
}

injectButtons();
