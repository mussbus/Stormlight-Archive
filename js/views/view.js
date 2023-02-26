export default class View {
  previous = null;
  next = null;

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
