// Import stylesheets
import './style.css';

// Body element
const body = document.getElementById('body');

// Button elements
const btnShare = document.getElementById('btnShare');

async function main() {
  // Initialize LIFF app)
  await liff.init({ liffId: '1656697705-2akLrXe4' });
  body.style.backgroundImage = "url('https://sv1.picz.in.th/images/2021/12/10/6Pd8Af.png')";
  // Try a LIFF function
  switch (liff.getOS()) {
    case 'android':
      body.style.backgroundColor = '#d1f5d3';
      break;
    case 'ios':
      body.style.backgroundColor = '#eeeeee';
      break;
  }

  btnShare.style.display = 'block';
}

main();

if (!liff.isInClient()) {
  if (!liff.isLoggedIn()) {
    liff.login();
  }
}

btnShare.onclick = () => {
  shareMsg();
};

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'template',
      altText: 'this is a carousel template',
      template: {
        type: 'carousel',
        imageAspectRatio: 'square',
        columns: [
          {
            thumbnailImageUrl:
              'https://sv1.picz.in.th/images/2021/12/10/6Pd8Af.png',
            text: '@UFAMACAO',
            actions: [
              {
                type: 'uri',
                label: 'สมัครรับเครดิตฟรี',
                uri: 'https://www.ufamacao.com/',
              },
              {
                type: 'uri',
                label: 'แชร์กิจกรรม',
                uri: 'https://liff.line.me/1656697705-2akLrXe4',
              },
            ],
          },
          {
            thumbnailImageUrl:
              'https://www.img.in.th/images/bdf69af287bcb99f8a6d027d3e095cc4.jpg',
            text: '@UFAMACAO',
            actions: [
              {
                type: 'uri',
                label: 'รับโปรโมชั่น',
                uri: 'https://www.ufamacao.com/',
              },
              {
                type: 'uri',
                label: 'แชร์กิจกรรม',
                uri: 'https://liff.line.me/1656697705-2akLrXe4',
              },
            ],
          },
        ],
      },
    },
  ]);

  if (result) {
  } else {
    const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || '').split(
      '.'
    );

    if (minorVer === undefined) {
      return;
    }

    if (
      parseInt(majorVer) >= 10 &&
      parseInt(minorVer) >= 10 &&
      parseInt(patchVer) > 0
    ) {
    }
  }
}
