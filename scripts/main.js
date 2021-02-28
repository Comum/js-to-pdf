const selectElement = document.querySelector("#language");

function load(language) {
  axios.get("data/info.json").then(function (res) {
    const translations = res.data[language];

    // above header
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

    // header
    document.querySelector("#header-name").innerHTML =
      translations.firstname + " " + translations.lastname;
    document.querySelector("#header-title").innerHTML = translations.title;

    // intro section
    document.querySelector("#intro-section-text").innerHTML = translations.intro;
    document.querySelector("#intro-section-details-phone").innerHTML = translations.label_phone;
    document.querySelector("#intro-section-details-phone-value").innerHTML = translations.phone;
    document.querySelector("#intro-section-details-email").innerHTML = translations.label_email;
    document.querySelector("#intro-section-details-email-value").innerHTML = translations.email;
    document.querySelector("#intro-section-details-linkedin").innerHTML = translations.label_linkedin;
    document.querySelector("#intro-section-details-linkedin-value").innerHTML = translations.linkedin_handle;
    document.querySelector("#intro-section-details-linkedin-value").href = translations.linkedin_url;
    document.querySelector("#intro-section-details-github").innerHTML = translations.label_github;
    document.querySelector("#intro-section-details-github-value").innerHTML = translations.github_handle;
    document.querySelector("#intro-section-details-github-value").href = translations.github_url;

    // section headers
    document.querySelector("#section-header-skills").innerHTML = translations.label_skills;
    document.querySelector("#section-header-history").innerHTML = translations.label_history;
    document.querySelector("#section-header-education").innerHTML = translations.label_education;
    document.querySelector("#section-header-additional").innerHTML = translations.label_additional;
  });
}

selectElement.addEventListener("change", function () {
  load(this.value);
});
