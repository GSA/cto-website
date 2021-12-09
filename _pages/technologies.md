---
title: Emerging Technologies
permalink: /techradar/technologies/
---

# CTO TechRadar

<nav class="usa-breadcrumb" aria-label="Breadcrumbs,,">
  <ol class="usa-breadcrumb__list">
    <li class="usa-breadcrumb__list-item">
      <a href="{{ '/techradar' | prepend: site.baseurl }}" class="usa-breadcrumb__link">
        <span>CTO TechRadar</span>
      </a>
    </li>
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      <span>{{ page.title }}</span>
    </li>
  </ol>
</nav>

## Emerging Technologies

CTO TechRadar partners with GSA offices and Federal agencies to accelerate emerging tech assessment, alignment, and action by connecting Federal innovators with new content and collaborators to create new value.

<ul class="usa-card-group">
  {% for tech in site.technologies %}
    <li class="tablet:grid-col-4 usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">{{ tech.title }}</h2>
          <p class="text-uppercase">{{ tech.subtitle }}</p>
        </header>
        <div class="usa-card__media">
          <div class="usa-card__img">
            <img src="{{ tech.image | prepend: site.baseurl }}" alt="" />
          </div>
        </div>
        <div class="usa-card__body">
          <p>
            {{ tech.excerpt }}
          </p>
        </div>
        <div class="usa-card__footer">
          <a class="usa-button" href="{{ tech.url | prepend: site.baseurl }}">Read more</a>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>

> We need the United States and we need its partners to remain the world’s innovative leaders and standard setters, to ensure that universal rights and democratic values remain at the center of all the innovation that’s to come, and that it delivers real benefits in people’s lives.
>
> <cite>&mdash; U.S. Secretary of State Antony Blinken</cite>
