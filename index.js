// Import stylesheets
import './style.css';

// Body element
const body = document.getElementById('body');

// Button elements
const btnSend = document.getElementById('btnSend');
const btnClose = document.getElementById('btnClose');
const btnShare = document.getElementById('btnShare');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnScanCode = document.getElementById('btnScanCode');
const btnOpenWindow = document.getElementById('btnOpenWindow');

// Profile elements
const email = document.getElementById('email');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');

// QR element
const code = document.getElementById('code');
const friendShip = document.getElementById('friendShip');

async function main() {
  // Initialize LIFF app)
  await liff.init({ liffId: '1656697705-2akLrXe4' });
  // Try a LIFF function
  switch (liff.getOS()) {
    case 'android':
      body.style.backgroundColor = '#d1f5d3';
      break;
    case 'ios':
      body.style.backgroundColor = '#eeeeee';
      break;
  }

  if (!liff.isInClient()) {
    if (liff.isLoggedIn()) {
      btnLogIn.style.display = 'none';
      btnLogOut.style.display = 'block';

      btnShare.style.display = 'block';
    } else {
      btnLogIn.style.display = 'block';
      btnLogOut.style.display = 'none';
    }
  } else {
    btnSend.style.display = 'block';

    btnShare.style.display = 'block';

    getUserProfile();
  }

  btnOpenWindow.style.display = 'block';
  getUserProfile();
}

main();

btnLogIn.onclick = () => {
  liff.login();
};

btnLogOut.onclick = () => {
  liff.logout();
  window.location.reload();
};

btnSend.onclick = () => {
  sendMsg();
};

btnShare.onclick = () => {
  shareMsg();
};

btnOpenWindow.onclick = () => {
  liff.openWindow({
    url: window.location.href,
    external: true,
  });
};

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId:</b> ' + profile.userId;
  statusMessage.innerHTML = '<b>statusMessage:</b> ' + profile.statusMessage;
  displayName.innerHTML = '<b>displayName:</b> ' + profile.displayName;

  email.innerHTML = '<b>email:</b> ' + liff.getDecodedIDToken().email;
}

async function sendMsg() {
  if (
    liff.getContext().type !== 'none' &&
    liff.getContext().type !== 'external'
  ) {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'This message was sent by sendMessages()',
      },
    ]);
    //alert('Message sent');
    liff.closeWindow();
  }
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      //type: 'image',
      //originalContentUrl: 'https://d.line-scdn.net/stf/line-lp/2016_en_02.jpg',
      //previewImageUrl: 'https://d.line-scdn.net/stf/line-lp/2016_en_02.jpg',

      type: 'template',
      altText: 'this is a carousel template',
      template: {
        type: 'carousel',
        imageAspectRatio: 'square',
        columns: [
          {
            thumbnailImageUrl:
              'https://www.img.in.th/images/7a60b8cdd422fe6c16355434353a9832.jpg',
            title: 'กิจกรรมแจกเครดิตฟรี',
            text: '@UFAMACAO แจกเครดิตฟรี 50 ไม่ต้องฝากก่อน',
            actions: [
              {
                type: 'uri',
                label: 'สมัครรับเครดิตฟรี',
                uri: 'https://www.ufamacao.com/',
              },
              {
                type: 'uri',
                label: 'แชร์กิจกรรม',
                uri: 'https://www.ufamacao.com/',
              },
            ],
          },
          {
            thumbnailImageUrl:
              'https://www.img.in.th/images/bdf69af287bcb99f8a6d027d3e095cc4.jpg',
            title: 'Title',
            text: 'Text',
            actions: [
              {
                type: 'message',
                label: 'Action 1',
                text: 'Action 1',
              },
              {
                type: 'message',
                label: 'Action 2',
                text: 'Action 2',
              },
            ],
          },
        ],
      },
    },
  ]);

  if (result) {
    alert(`[${result.status}] Message sent!`);
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || '').split(
      '.'
    );

    if (minorVer === undefined) {
      alert('ShareTargetPicker was canceled in external browser');
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
      alert('ShareTargetPicker was canceled in LINE app');
    }
  }
}
