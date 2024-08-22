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

        <section class="emergent-technology-intro">
          <div class="grid-row">
            <div class="tablet:grid-col-8">
              <h2 class="emergent-technology-intro__title">{title}</h2>
              <p class="emergent-technology-intro__text">{introText}</p>
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
