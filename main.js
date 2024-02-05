let user;

function App(){

  return `
  
  <main class="main-box">
      <aside class="sidebar">
        <div class="logo-type">EVENTY</div>
        <nav class="menu-box">
          <a href="#"
            ><li class="item-menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/star.svg"
              />Event
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/ticket.svg"
              />Ticket
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/payments.svg"
              />Payments
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/favorite.svg"
              />Favorite
            </li></a
          >
          <a href="#"
            ><li class="item-menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/setting.svg"
              />Setting
            </li></a
          >
        </nav>
        <a href="#"
          ><div class="logout">
            <img
              src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/logout.svg"
            />Logout
          </div></a
        >
      </aside>
      <div class="back-sidebar" id="back-sidebar"></div>
      <div class="main">
        <div class="head-title">
          <header class="header-main">
            <div class="menu">
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/menu.svg"
                id="menu"
              />
            </div>
            <div class="operation-info">
              <a href="#" class="btn-operation"
                ><img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/bag.svg"
              /></a>
              <a href="#" class="btn-operation"
                ><img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/notification.svg"
              /></a>
              <img
                src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/default.jpeg"
                alt="profile"
                class="profile"
              />
            </div>
          </header>
          <h1 class="title-page">Discover the best event</h1>
        </div>
        <div class="page-content">
          <div class="box-map-event">
            <div class="map">
              <div class="box-search">
                <img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/search.svg"
                  id="search"
                />
                <input
                  type="text"
                  placeholder="Events in Virginia"
                  id="input-search"
                />
              </div>
            </div>
            <div class="list-events">
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-1.jpg"
                      alt="Ariana Grande"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Ariana Grande</h2>
                    <div class="event-li-location">10 September, Turkey</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-2.jpg"
                      alt="Rey"
                    />
                    <div class="event-li-date">7:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Rey</h2>
                    <div class="event-li-location">29 August, Prague</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-3.jpg"
                      alt="Coldplay"
                    />
                    <div class="event-li-date">9:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Coldplay</h2>
                    <div class="event-li-location">9 September, England</div>
                  </div>
                </article></a
              >
              <a href="#"
                ><article class="event-li">
                  <div class="picture">
                    <img
                      src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-4.jpg"
                      alt="Exo"
                    />
                    <div class="event-li-date">8:00 PM</div>
                  </div>
                  <div class="box-info-event">
                    <h2 class="event-li-title">Exo</h2>
                    <div class="event-li-location">2 September, Paris</div>
                  </div>
                </article></a
              >
            </div>
          </div>
          <div class="event">
            <img
              src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-banner.png"
              alt="Concert Maneskin"
              class="event-banner"
            />
            <div class="info-event">
              <div class="date-event">22 August, 8:00 PM</div>
              <h2 class="title-event">maneskin</h2>
              <div class="location-event">
                <img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/location.svg"
                />
                Virginia, USA
              </div>
              <p class="discraption-event">
                "Rock 'n' roll never dies!" That's what Maneskin's frontman
                Damiano David said ar the 2021 Eurovision. Best group on a tour
                of Japan.
              </p>
              <a href="#" class="get-event">Get a Ticket for $230</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  
  
  `
  ;
  
  var input_search = document.getElementById("input-search");
var bodyMain = document.getElementsByTagName("body")[0];

document.getElementById("search").addEventListener("click", () => {
  toggleOfClass(input_search, "show");
});

document.getElementById("menu").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

document.getElementById("back-sidebar").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

function toggleOfClass(element, ClassName) {
  let status = element.classList.contains(ClassName);
  if (status) {
    element.classList.remove(ClassName);
  } else {
    element.classList.add(ClassName);
  }
  return status;
}

  
  
}

document.body.innerHTML = App()
