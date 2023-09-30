const data = [
  {
    city: "Москва",
    price: 1500,
    title: "Высотка на Котельнической",
    text: "Секреты сталинских высоток: Высотка на Котельнической",
    time: "1 час 30 минут",
    images: [
      { image1: "./img/card_img1.png" },
      { image2: "./img/card_img2.png" },
      { image3: "./img/card_img3.png" },
    ],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    city: "Екатеринбург",
    price: 1400,
    title: "Высотка на Котельнической",
    text: "Секреты сталинских высоток: Высотка на Котельнической",
    time: "1 час 30 минут",
    images: [
      { image1: "./img/card_img1.png" },
      { image2: "./img/card_img2.png" },
      { image3: "./img/card_img3.png" },
    ],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    city: "Сочи",
    price: 1200,
    title: "Высотка на Котельнической",
    text: "Секреты сталинских высоток: Высотка на Котельнической",
    time: "1 час 30 минут",
    images: [
      { image1: "./img/card_img1.png" },
      { image2: "./img/card_img2.png" },
      { image3: "./img/card_img3.png" },
    ],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const calendarGroup = document.querySelector(".calendar__card_group");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const closePopup = document.querySelector(".popup__close");
const overlay = document.querySelector(".overlay");

const renderCard = (props) => {
  return `
        <div class="calendar__card">
        <img src="./img/card_img1.png" class="card-img-top" alt="..." />
        <div class="card__body">
          <div class="card__body_moscow">
            <img
              src="./img/Rectangle 11.svg"
              alt="#"
              class="card__body_img"
            />
            <p class="card__body_title">${props.city}</p>
          </div>
          <button class="none__border card__body_button">${props.price} ₽</button>
          <h5 class="card__title">${props.title}</h5>
          <p class="card__text">
            ${props.text}
          </p>
          <div class="card__button_group">
            <div>
              <img src="./icons/Icon Clock.svg" alt="" />
              <small class="text-muted">${props.time}</small>
            </div>
            <button class="none__border card__button">
              Посмотреть
            </button>
          </div>
        </div>
      </div>
        `;
};

const loadCards = () => {
  const cardsArray = data.map((item, i) => {
    return renderCard(item);
  });

  calendarGroup.innerHTML = cardsArray.join("");
};

loadCards();

const card = document.querySelectorAll(".calendar__card");

card.forEach((item, i) => {
  const cardData = data[i];

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("popup__images");

  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("popup__contacts");
  contactsContainer.innerHTML = `
  <form action="">
    <input
        placeholder="Имя"
        type="text"
        id="first_name"
        name="first_name"
        required
        class="contacts__input"
    />

    <input
        placeholder="Фамилия"
        type="text"
        id="last_name"
        name="last_name"
        required
        class="contacts__input"
    />

    <input placeholder="Почта" type="email" id="email" name="email" required class="contacts__input" />

    <input placeholder="Номер телефона" type="tel" id="phone" name="phone" required class="contacts__input" />

      <textarea
      placeholder="Комментарий"
      id="comments"
      name="comments"
      rows="4"
      cols="50"
    ></textarea>

    <input class="contacts__button" type="submit" value="Отправить" />
</form>
  `;

  cardData.images.forEach((item, i) => {
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const image = document.createElement("img");
        image.src = item[key];
        image.alt = `Image ${i + 1}`;
        imageContainer.appendChild(image);
      }
    }
  });

  item.querySelector(".card__button").addEventListener("click", (e) => {
    e.preventDefault();

    popupContent.innerHTML = `
    <section>
      <p class="popup__desc">${cardData.desc}</p>
      <h3 class="popup__price">${cardData.price} ₽</h3>
    </section>
    `;

    popupContent.childNodes[1].prepend(imageContainer);
    popupContent.prepend(contactsContainer);

    popup.classList.add("active");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  overlay.style.display = "none";
  document.body.style.overflow = "";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    popup.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }
});
