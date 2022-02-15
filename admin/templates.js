class EmergingTechnologyPreview extends React.Component {
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(["data", "title"]);
    const subtitle = entry.getIn(["data", "subtitle"]);
    const imagePath = entry.getIn(["data", "image"]);
    const image = this.props.getAsset(imagePath);
    const content = this.props.widgetFor("body");
    return /*#__PURE__*/React.createElement("div", {
      class: "grid-container"
    }, /*#__PURE__*/React.createElement("section", {
      class: "emergingtech-intro"
    }, /*#__PURE__*/React.createElement("div", {
      class: "grid-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "tablet:grid-col-8"
    }, /*#__PURE__*/React.createElement("h2", {
      class: "emergingtech-intro__title"
    }, title), /*#__PURE__*/React.createElement("p", {
      class: "emergingtech-intro__text"
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      class: "tablet:grid-col-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: title
    })))), /*#__PURE__*/React.createElement("div", {
      class: "grid-row grid-gap"
    }, /*#__PURE__*/React.createElement("div", {
      class: "desktop:grid-col-8"
    }, content)));
  }

}

class TeamPreview extends React.Component {
  render() {
    const entry = this.props.entry;
    const firstname = entry.getIn(["data", "firstname"]);
    const lastname = entry.getIn(["data", "lastname"]);
    const role = entry.getIn(["data", "role"]);
    const photoPath = entry.getIn(["data", "photo"]) || "/assets/img/gsa_logo.svg";
    const photo = this.props.getAsset(photoPath);
    const content = this.props.widgetFor("body");
    return /*#__PURE__*/React.createElement("div", {
      class: "grid-container"
    }, /*#__PURE__*/React.createElement("div", {
      class: "bio grid-row grid-gap"
    }, /*#__PURE__*/React.createElement("div", {
      class: "tablet:grid-col-auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: `Photo of ${firstname} ${lastname}`
    })), /*#__PURE__*/React.createElement("div", {
      class: "bio__title tablet:grid-col-fill"
    }, /*#__PURE__*/React.createElement("h2", null, firstname, " ", lastname), /*#__PURE__*/React.createElement("p", {
      class: "text-bold"
    }, role))), content);
  }

}