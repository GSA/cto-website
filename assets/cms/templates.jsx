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
    const title = entry.getIn(["data", "title"])
    const role = entry.getIn(["data", "role"])
    const photoPath = entry.getIn(["data", "photo"])
    const photo = this.props.getAsset(photoPath)
    const content = this.props.widgetFor("body")

    return (
      <div class="grid-container">

        <div class="techgsa-bio grid-row grid-gap">
          <div class="tablet:grid-col-auto">
            { photoPath
              ? <img src={photo} alt={`Photo of ${title}`}/>
              : <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                  <title>Photo of {title}</title>
                  <use xlinkHref="/assets/uswds/img/sprite.svg#person"></use>
                </svg>
            }
          </div>
          <div class="techgsa-bio__title tablet:grid-col-fill">
            <h2>{title}</h2>
            <p class="text-bold">{role}</p>
          </div>
        </div>

        {content}

      </div>
    )
  }
}

class GuidePreview extends React.Component {
  render() {
    const entry = this.props.entry
    const title = entry.getIn(["data", "title"])
    const category = entry.getIn(["data", "category"])
    const content = this.props.widgetFor("body")

    return (
      <div class="grid-container">

        <h1>{title}</h1>

        {content}

      </div>
    )
  }
}
