class EmergingTechnologyPreview extends React.Component {
  render() {
    const entry = this.props.entry
    const title = entry.getIn(["data", "title"])
    const introText = entry.getIn(["data", "intro", "text"])
    const introImagePath = entry.getIn(["data", "intro", "image"])
    const image = this.props.getAsset(introImagePath)
    const content = this.props.widgetFor("body")

    return (
      <div class="grid-container">

        <section class="techradar-intro">
          <div class="grid-row">
            <div class="tablet:grid-col-8">
              <h2 class="techradar-intro__title">{title}</h2>
              <p class="techradar-intro__text">{introText}</p>
            </div>
            <div class="tablet:grid-col-4">
              <img src={image} alt={title}/>
            </div>
          </div>
        </section>

        <div class="grid-row grid-gap">
          <div class="desktop:grid-col-8">
            {content}
          </div>
        </div>

      </div>
    )
  }
}

class TeamMemberPreview extends React.Component {
  render() {
    const entry = this.props.entry
    const firstname = entry.getIn(["data", "firstname"])
    const lastname = entry.getIn(["data", "lastname"])
    const role = entry.getIn(["data", "role"])
    const photoPath = entry.getIn(["data", "photo"]) || "/assets/img/gsa_logo.svg"
    const photo = this.props.getAsset(photoPath)
    const content = this.props.widgetFor("body")

    return (
      <div class="grid-container">

        <div class="bio grid-row grid-gap">
          <div class="tablet:grid-col-auto">
            <img src={photo} alt={`Photo of ${firstname} ${lastname}`}/>
          </div>
          <div class="bio__title tablet:grid-col-fill">
            <h2>{firstname} {lastname}</h2>
            <p class="text-bold">{role}</p>
          </div>
        </div>

        {content}

      </div>
    )
  }
}
