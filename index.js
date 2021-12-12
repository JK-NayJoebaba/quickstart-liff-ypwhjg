// Import stylesheets
import './style.css';

// Body element
const body = document.getElementById('body');

// Button elements
const btnShare = document.getElementById('btnShare');

async function main() {
  // Initialize LIFF app)
  await liff.init({ liffId: '1656697705-2akLrXe4' });
  body.style.backgroundColor = '#000000';
  btnShare.style.display = 'block';
}

main();

if (!liff.isInClient()) {
  if (!liff.isLoggedIn()) {
    liff.login();
    shareMsg();
  }
}

btnShare.onclick = () => {
  shareMsg();
};

async function shareMsg() {
  await liff.shareTargetPicker([
    {
      type: 'flex',
      altText: 'this is a carousel template',
      contents: {
        type: 'carousel',
        contents: [
          {
            //ฟรี
            type: 'bubble',
            direction: 'ltr',
            hero: {
              type: 'image',
              url: 'https://sv1.picz.in.th/images/2021/12/13/6CiY61.jpg',
              size: 'full',
              backgroundColor: '#000000',
              action: {
                type: 'uri',
                label: '111',
                uri: 'https://bit.ly/3yhQjCI',
              },
            },

            footer: {
              type: 'box',
              layout: 'horizontal',
              spacing: 'none',
              backgroundColor: '#000000',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'รับเครดิตฟรี',
                    uri: 'https://bit.ly/3FCVIa1',
                  },
                  color: '#000000',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'แชร์กิจกรรม',
                    uri: 'https://liff.line.me/1656697705-2akLrXe4',
                  },
                  color: '#000000',
                  style: 'primary',
                },
              ],
            },
          },
          {
            //สล็อต
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://sv1.picz.in.th/images/2021/12/13/6CiWEn.jpg',
              size: 'full',
              backgroundColor: '#000000',
              aspectMode: 'fit',
              action: {
                type: 'uri',
                label: '111',
                uri: 'https://bit.ly/3yhQjCI',
              },
            },
            footer: {
              type: 'box',
              layout: 'horizontal',
              spacing: 'none',
              backgroundColor: '#000000',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'รับโปรโมชั่น',
                    uri: 'https://bit.ly/3FCVIa1',
                  },
                  color: '#000000',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'แชร์กิจกรรม',
                    uri: 'https://liff.line.me/1656697705-2akLrXe4',
                  },
                  color: '#000000',
                  style: 'primary',
                },
              ],
            },
          },
          {
            //คาสิโน
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://sv1.picz.in.th/images/2021/12/13/6Cgm1N.jpg',
              size: 'full',
              backgroundColor: '#000000',
              aspectMode: 'fit',
              action: {
                type: 'uri',
                label: '111',
                uri: 'https://bit.ly/3yhQjCI',
              },
            },
            footer: {
              type: 'box',
              layout: 'horizontal',
              spacing: 'none',
              backgroundColor: '#000000',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'รับโปรโมชั่น',
                    uri: 'https://bit.ly/3FCVIa1',
                  },
                  color: '#000000',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'แชร์กิจกรรม',
                    uri: 'https://liff.line.me/1656697705-2akLrXe4',
                  },
                  color: '#000000',
                  style: 'primary',
                },
              ],
            },
          },
          {
            //บอล
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://sv1.picz.in.th/images/2021/12/13/6CgyDV.jpg',
              size: 'full',
              backgroundColor: '#000000',
              aspectMode: 'fit',
              action: {
                type: 'uri',
                label: '111',
                uri: 'https://bit.ly/3yhQjCI',
              },
            },
            footer: {
              type: 'box',
              layout: 'horizontal',
              spacing: 'none',
              backgroundColor: '#000000',
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'รับโปรโมชั่น',
                    uri: 'https://bit.ly/3FCVIa1',
                  },
                  color: '#000000',
                  style: 'primary',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'แชร์กิจกรรม',
                    uri: 'https://liff.line.me/1656697705-2akLrXe4',
                  },
                  color: '#000000',
                  style: 'primary',
                },
              ],
            },
          },
        ],
      },
    },
  ]);
  liff.closeWindows();
}
