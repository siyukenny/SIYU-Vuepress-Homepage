---
pageClass: home-page
# some data for the components

name: Yu Si, Kenny (司宇)
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/SIYUyu
  - title: email
    icon: "/icons/email.svg"
    link: "mailto:siyu@stmail.ujs.edu.cn"

cv: https://en.wikipedia.org/wiki/Harry_Potter
bio: A postgraduate of Jiangsu University
email: siyu@stmail.ujs.edu.cn
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Yu Si was born in Xuzhou, China in 1998. He received a bachelor's degree from Taizhou University in 2020. Now he is studying for a master's degree of computer science and technology, School of computer Science and Communication Engineering, Jiangsu University. His research interests are interpretability of deep learning and computer vision. He devotes himself to solving the black box problem of deep neural networks, constructing interpretable models, explaining its internal working mechanism, explaining and explaining decision-making and prediction through attribution.:dizzy:

## News

- [Sept 1991] Attended Hogwarts
- [July 1980] Born in Godric's Hollow, West Country, England, Great Britain

## Education & Experiences

- **Hogwarts School of Witchcraft and Wizardry** <br/>
  Sept 1991 - 1997

## Projects

[→ Full list](/projects/)

<ProjectCard image="/projects/1.png" hideBorder=true>

**The Making of Harry Potter's Wand**

Harry P., Hermione G., _et al_

Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.

[[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard>

<ProjectCard hideBorder=true>

**Harry Potter and the Deathly Hallows**

In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

[[Link](https://www.google.com)]

</ProjectCard>

## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup**

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
