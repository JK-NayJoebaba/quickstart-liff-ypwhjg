// Import stylesheets
import './style.css';

// Body element
const body = document.getElementById('body');

// Button elements
const btnShare = document.getElementById('btnShare');

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

  btnLogIn.style.display = 'block';
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

async function getUserProfile() {
  const profile = await liff.getProfile();
}

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
                uri: 'https://liff.line.me/1656697705-2akLrXe4',
              },
            ],
          },
          {
            thumbnailImageUrl:
              'https://www.img.in.th/images/bdf69af287bcb99f8a6d027d3e095cc4.jpg',
            title: 'สมาชิกใหม่รับ 100%',
            text: 'ขั้นต่ำเพียง 50 บาท',
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
