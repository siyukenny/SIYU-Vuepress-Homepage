---
pageClass: about-page
description: "The biography and information about me."
avatar: /profile.jpg
head: "Yu Si"
info: "A postgraduate of Jiangsu University"
interests: "Interests: Interpretability of deep learning, Deep neural networks and Artificial Intelligence."
socials:
  - title: github
    link: https://github.com/SIYUyu
  - title: email
    link: "mailto:siyu@stmail.ujs.edu.cn"
actions:
  - text: Projects
    link: /projects/
  - text: Blog
    link: http://www.siyukenny.top/
  - text: CV
    link: /article/
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

Yu Si was born in Xuzhou, China in 1998. He received a bachelor's degree from Taizhou University in 2020. Now he is studying for a master's degree of computer science and technology, School of computer Science and Communication Engineering, Jiangsu University. His research interests are interpretability of deep learning and computer vision. He devotes himself to solving the black box problem of deep neural networks, constructing interpretable models, explaining its internal working mechanism, explaining and explaining decision-making and prediction through attribution. :dizzy:

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
