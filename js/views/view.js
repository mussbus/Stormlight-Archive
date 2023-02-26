export default class View {
  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
