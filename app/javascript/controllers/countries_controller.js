import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="countries"
export default class extends Controller {
  connect() {
    console.log('connect countries!!')
  }

  initialize() {
    this.element.setAttribute("data-action", "change->countries#loadCountryStates")
  }

  loadCountryStates() {
    // alert("selected")
    const selectedCountry = this.element.options[this.element.selectedIndex].value
    // alert(selectedCountry);
    this.url = `/users/fetch_country_states?country_code=${selectedCountry}`
    fetch(this.url,{
      headers: {
        Accept: "text/vnd.turbo-stream.html"
      }
    })
    .then(response => response.text())
    .then(html => Turbo.renderStreamMessage(html))
  }
}
