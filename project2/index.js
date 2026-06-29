let dom = document.getElementsByClassName("Risk-Management")[0];
let dom2 = document.getElementsByClassName("Things ")[0];
let dom3 = document.getElementsByClassName("Youtube-vidio-text")[0];
let dom4 = document.getElementsByClassName("advisory")[0];

const data = [
  {
    icon: "fa-solid fa-person",
    head: "Business Consulting",
    p: "Solution for every business related problems, readily and skillfully.",
  },

  {
    icon: "fa-solid fa-car",
    head: "Management",
    p: ">Calculate every possible risk in your business, take control over them.",
  },

  {
    icon: "fa-solid fa-user",
    head: "Market Research",
    p: "Know the market before taking any step, reduce risks before you go.",
  },

  {
    icon: "fa-solid fa-chart-column",
    head: "Quality Services",
    p: "Experience unparalleled service, from beginning to final construction.",
  },
];

const data2 = [
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Creative Support",
    p: "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
  },
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Innovative Solutions",
    p: "Our innovative strategies redefine how brands communicate with their audience.",
  },
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Strategic Planning",
    p: "We craft business strategies that drive long-term growth and sustainability.",
  },
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Digital Transformation",
    p: "Bringing businesses into the digital age with cutting-edge technology solutions.",
  },
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Brand Growth",
    p: "Empowering brands to expand and make a lasting impact on the market.",
  },
  {
    i: '<i class="fa-regular fa-envelope"></i>',
    h2: "Customer Engagement",
    p: "Helping businesses connect with their audience through personalized experiences.",
  },
];

const data3 = [
  {
    h2: " Awesome Team",
    i: "<i class='fa-solid fa-users'> </i>",
    p: "Before talking destination, we shine a spotlight across your organization to fully understand it.",
  },
  {
    h2: " Awesome Team",
    i: "<i class='fa-solid fa-comment'> </i>",
    p: "Before talking destination, we shine a spotlight across your organization to fully understand it.",
  },
  {
    h2: " Awesome Team",
    i: "<i class='fa-solid fa-bolt'></i>",
    p: "Before talking destination, we shine a spotlight across your organization to fully understand it.",
  },
];
const data4 = [
  {
    div1:
      `<div class="row-1-img">
        <img src="..//project2/img/image/img06.jpg" alt="">
      </div>`,
    div2: `<div class="row-1-text">
      <h2>Business-Consulting</h2>
      <p>As one of the world’s largest accountancy networks, elixir helps a diverse range of
        clients with a diverse range of needs.This is especially true of our Advisory Practice,
        which provides corporate finance and transaction services, business restructuring.</p>
      <a href="">Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
    </div>`
  },
  {
    div1:
      `<div class="row-1-text">
        <h2>Tax consulting</h2>
        <p>Elixir serves clients across the country and around the world as they navigate an
          increasingly complex tax landscape. Our tax professionals draw on deep experience and
          industry-specific knowledge to deliver clients the insights and innovation they need..
        </p>
        <a href="">Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>`,
    div2: `<div class="row-1-img">
        <img src="..//project2/img/image/img07.jpg" alt="">
      </div>`
  },
  {
    div1:
      `<div class="row-1-img">
        <img src="..//project2/img/image/img08.jpg" alt="">
        </div>`,
    div2: `
        <div class="row-1-text border-buttom">
        <h2>Advisory</h2>
        
        <p>To help you understand what this road looks like, we surveyed 1165 digital marketers
          across Europe and North America to explore current trends and priorities in digital
          marketing.</p>
          <a href=""> Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>`
  },
]
(async () => {
  try {
    let str = "";
    for (let i = 0; i < data.length; i++) {
      str += `<div class="col-1 common">
  <div class="gol-circial">
  <i class="${data[i]["icon"]}"></i>
  </div>
  <h2>${data[i]["head"]}</h2>
  <p>${data[i]["p"]}
  </p>
  </div>`;
    }
    dom.innerHTML = str;
////////////////////////////////////////////////
    let str2 = "";
    for (let i = 0; i < data2.length; i++) {
      str2 += `<div class="box1 common-box">
      ${data2[i].i}
          <h2>${data2[i].h2}</h2>
          <p>${data2[i].p}</p>
          </div>`;
        }
        dom2.innerHTML = str2;
/////////////////////////////////////////////////
        let str3 = "";
        for (let i = 0; i < data3.length; i++) {
          str3 += ` <div>
          
            <h2> ${data3[i].i}${data3[i].h2}</h2>
            <p>${data3[i].p}</p>
            </div>`;
          }
          dom3.innerHTML = str3;
 /////////////////////////////////////////////////////         
          let str4 = "";
          for (let i = 0; i < data4.length; i++) {
            str4 += ` <div class="row-1 border-buttom">
                            ${data4[i]["div1"]}
                            ${data4[i]["div2"]}
                      </div>`;
          }
          
          dom4.innerHTML = str4;
///////////////////////////////////////////////////////////          
  } catch (err) {
    console.log(err.message);
  }
})();
