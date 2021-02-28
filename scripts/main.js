const selectElement = document.querySelector("#language");

function load(language) {
  axios.get("data/info.json").then(function (res) {
    const translations = res.data[language];

    document.querySelector("#above-header-name").innerHTML =
      translations.firstname + " " + translations.lastname;
    document.querySelector("#above-header-label-phone").innerHTML =
      translations.label_phone;
    document.querySelector("#above-header-phone").innerHTML =
      translations.phone;
    document.querySelector("#above-header-label-email").innerHTML =
      translations.label_email;
    document.querySelector("#above-header-email").innerHTML =
      translations.email;

    document.querySelector("#header-name").innerHTML =
      translations.firstname + " " + translations.lastname;
    document.querySelector("#header-title").innerHTML = translations.title;
  });
}

selectElement.addEventListener("change", function () {
  load(this.value);
});
