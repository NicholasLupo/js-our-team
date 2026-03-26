const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const container = document.getElementById('cards');

function getInfo(array) {

  let cards = '';

  for (let i = 0; i < array.length; i++) {

    const { name, role, email, img } = array[i];

    cards += getCard(name, role, email, img);

  }

  container.innerHTML = cards

}

function getCard(name, role, email, img) {

  let card = `
                <div class="card col flex-row bg-black mb-3">
                <div class="card-image">
                    <img src="/assets/${img}" alt="${name}" id="profile-img">
                </div>
                <div class="d-flex flex-column justify-content-around p-3">
                    <div>
                        <span class="fontFredoka text-white fs-3" id="username"> ${name} </span>
                    </div>
                    <div>
                        <span class="text-white" id="work-role"> ${role} </span>
                    </div>
                    <div>
                        <span class="text-info" id="email"> ${email} </span>
                    </div>
                </div>
            </div>
      `

  return card;

}

getInfo(teamMembers)