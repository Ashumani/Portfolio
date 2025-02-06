import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  layer7,
  java,
  gcp,
  apigee,
  meta,
  starbucks,
  tesla,
  shopify,
  cognizant,
  velociter,
  webquadra,
  carrent,
  jobit,
  project1,
  project2,
  crm,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Gateway Developer",
    icon: web,
    afterFlipped: [
      "Apigee Developer",
      "Layer 7 Developer"
    ]
  },
  {
    title: "Front End Developer",
    icon: mobile,
    afterFlipped: [
      "ReactJS",
      "AngularJS",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ]
  },
  {
    title: "Backend Developer",
    icon: backend,
    afterFlipped: [
      "Node JS",
      "Python",
      "Java",
      "PostgesSQL",
      "MySQL",
      "MongoDB",
      
    ]
  },
  {
    title: "Cloud",
    icon: creator,
    afterFlipped: [
      "GCP",
      "Terraform",
      "Splunk",
      "Apache Kafka"
    ]
  },
];

const technologies = [
  
  {
    name: "Apigee",
    icon: apigee
  }, {
    name: "Layer7",
    icon: layer7
  }, {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python
  },
   {
    name: "GCP",
    icon: gcp
  }, {
    name: "Java",
    icon: java
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Apigee Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "January 2020 - till date",
    points: [
      "Proxy Development Expert: Proficient in developing and customizing proxies to meet specific business needs",
      "Proxy Document Expert: Create and maintain Ignite documents aligning with proxy requirements",
      "Pipeline Automation: Build and trigger Jenkins pipelines for seamless CURD activity on Hybrid, OPDK, and SaaS platforms",
      "Version Control: Utilize Git for efficient code management and tracking changes",
      "Monitoring and Analysis: Employ Splunk and Dynatrace to analyze logs, perform advanced queries, and generate insightful reports",
    ],
  },
  {
    title: "Apigee Developer | Layer 7 Developer | Node JS Developer",
    company_name: "Velociter",
    icon: velociter,
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2023",
    points: [
      "I specialize in Google Cloud Console (GCP) and Google Apigee, where I’ve developed a Publisher and Subscriber module to push and pull data and created cron jobs in Cloud Functions using Python to manage traffic delays",
      "I also design Apigee extensions to publish messages to the GCP publisher module",
      "Currently, I worked on a CRM project using Node.js, Express.js, MySQL, and Angular. My responsibilities include developing APIs in Node.js, integrating them with Angular, and designing UI with HTML, CSS, Bootstrap, and AJAX",
      "Additionally, I schedule cron jobs on Linux for various tasks",
    ],
  },
  {
    title: "Node JS Developer",
    company_name: "Velociter",
    icon: velociter,
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2023",
    points: [
      "Developing and maintaining web applications using Angular.js , Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Internship",
    company_name: "WebQuadra",
    icon: webquadra,
    iconBg: "#164453",
    date: "June 2019 - Mar-2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You have to dream before your dreams can come true",
    name: "Dr. APJ Abdul Kalam",
    designation: "President ",
    company: " India",
    image: "data:image/webp;base64,UklGRholAABXRUJQVlA4IA4lAADwrwCdASo4ATgBPqVInkumJCMqKTQ7AUAUiWNu2S4dHMS7mwReUKJ1z6d5k2CcQ1zj0+bj6kU6wWbKfmXqdu3th4DT7NzAnSfVjJCeR8BX7d/yvYV6a7FRriFNNpRdDX+CUHpe+c2uqp7dGg/Ky5h+DlU0Rvqv4kJbS/sHaX5f0264DfZjOeyPtxHa5KdkhQiLvsqzr8MZ1afQQLQ/16mrrbAVREAlorgeXKchsBHmd76DYBpxZj/thUS2z4+T8rchXu26uQFSehKNQ5Xr2JCmEsXdmoA4mY/dN9VFHXog5y4cFiAl4kGIwL+gRwOj2KsplE8fWO5DwAFEL559iZjn6P+DoOOuOwPsw+aBwken3wbvK6XhQVvFzF5pADZu7iJFmyv/AhGIg4C22boGbUKm/dP1q4SF51do2Kb9VisBxP8h/nzBhfLwlFD6Jw0eu2sX+Tq0pKPyuuEcjrZ9uUGXSSvIL8euskbH1vt1PTrfHCEtVWO88vIo4LJG31RqXA5dHu/XgqUPMVGwyoKOkG+UBfAG8sfYsEKd8VOdd0e41Y8RPn3rX2XZSrAeni4FzIs7ZoJyRfcnLhQNAsrkpYcpiPSI9xuQiTWJQr1R8hLS54gRmYUF9olZ8QZTYYAhZyckQwRG4OMQVg51HFR8y7t6qMt6FRP9DSUYlKU3BPzGlevAkPmAhWc4jOHQg3/LfZbzVNonxsnzh3U0Fz7W1UFcRUwNaBAYJtNjYTz9zfN9Ps7uTP4tSsTgi3qnaZbuKIfp9C/A/YSHhmuZLrqEiqyj9+mJpmHhXn2Sr0OD+vXDGrCd9nFP6yp7dnOrLnMdfdHTJV7V9kDKtOlISTNSrksu1j1inEFvb8cXxrbmmL0CteggSeC5bg2i3afLWL69e9gGXAIaV0e1roxf69MffLMfxMmGJ2dDbEVmDJ9RWLV/HYZ6JBnYbvhYLZ6hJ//CRZU3H/WrggALt1viPKGW54qDMq2PkUYY5Wm2pnbByNajtdpLVdsssd0W2a/EwBw701kEw6xXSsQErpeP/6rgNxnKQ1cgrWh7GUCc8xM4pgRrhpM5V7pujSNtIz/cZVqpYc2qkhxTF8eH4UEaxM8wpFuzxl1i+Rwn5QSp0BtssA/zgKOVIKu8D1zN2cpL3PYJSL+BrwE9cQ6mJY44ZCGoZODOW6Zgv5iaT1oUTC207xbcIwkkuVe645hDvZIO+ukLm2bmsYBvAUiJ6gr7ClxFaLLHoGuYGLe0CLWkhXnZLMM8g70svZbMKgkuuXiMxRDBpmvaO/sMKfC2Ghhg3BfMdhMmLpL93iSqSTL/6rwqoWDJlYL7w13i4PqiBneD+TWuRih0KL1DXnH30rfdDuw5syaQeh+D14aKbA1VDgRHXI6YfvXyHvzTDMGeSVenyrg8QohCtbDrty3iyh8f2t1Mk/Vu4yZuAtTtl7zO2n16pOBvXra/aDI2RWk8pDQtzf9a2LN8JeW50Xqzb8hMRkjh4uvn9ImAN/1B2ExiEDmYt0Xt6//9zkNdGkNe/DKIdwPZkbxdDon1OhLYjoa3JazbAtXJAv45njBqeSqqBYz0TANYCMDYlTgK+Xi5n4mcG8+S07c5xn3mu0FTjArGCU9M2gjqLE60tXCAaizdT3VHBx/ENm/u/cDyIItF4ZRXAoC6SwCK59vKCGQro7Yi4a9OD2iCx2vHkoaLOKL8YTfWQtYDmbRD5dABNqcXR2jt7zEKZws44prOy+bfuSFYT8i2ARJA/eEGK7EkVQU19zKFrplt02e0qrTWE7HhAgsiMK3hAAGzA367hovc8rdc6Jc8PkGC3G0iTJVJaqON/ZCU+LWhAhRw9YJwE5TavzAX6WIJB1j/RRwNZxWgLbV7A4B4GFaRnDSfn2Sb1gAA+MQ5LPVJ6QUHGgwmOFgutex0IzkbEQIqR+HqYm48IyvRl86P3ZwObVW4BKCPYrNRYd07VZTwl/vEuA0Mqrh9kGWe7TNA/IH4aryA5yDDNDNZnnyqune5rZdcXIYw+BNaPNOk9sJ4yjd+J2hLjCRH0VLkaigSBMRWmmQqUS8BCIArD6mPf8boc5EYYCvxGWi+26NTRNghqaEWG3LFaGU4k5uI1ruDZZIHt+bjv9KmTpaQp30+7lxsBclD4S+ZO+G14WQtsKcz5jOzDzVr9t7PImCXm6jYJQoBdNSUTO79EPVBqo8m79aV/t66te8NcevsEkCCXVSEmXg6i9OlwBcmxf9HB5oB8G+t5jydRFexynbu6huAD1e0mYyD/TMftlyu4NwN+tSEvJymwHl9oaqRUUGtcV6E8GD4X6GG+vvnh98lZB72byYJrwSbThjNLzNnAWzM6ihmZZ3jTBqOvEhSxsCm2ZmFQiURTb5JjcmVtNb8k5fEPjeJzgN/h8N+zKDiFUSjyOwlV3kkkQ1UU5uqBhBJzcsa4EfJvsOxxqi+dZb9mPHQnAxMei6QNo0ddJwefHKM4lmLruuRUTCoTDGICo8v6GKATGtnqtqrFq+vtcRY8YsEpEX5PBPwyY4yI/eyVeQHLUHMQUEctBR8kk4o9Fvj+JhjcynXuLMjfCrRpgngfE8jwbejxYzpI51GxCIG83+sfSA6EwkwjWDF/0Muu11eeCHgbtUr6NMea6mLrAk8ZmVxw+hc2/Kvxvvzib8gB5GWrAFmRyw9irwK076spgBD+yFKcY9kKjIAF19SuQWwZKr8wh5nlaNPSBHvURiJkW6FZcQQCBSI3CI9fCcR2qKx0F4PoLVSQJBpd2U0ENYG596EDo1YmgPtx8RO58z0o/mtac5MT/9NhasxjNmbd/0Xan6XUqDuz4O3xWkzVXMRHkliuoYIp9JUR/v+hOJtDJkQQSN2u3UFceCi5C8va+AldqhJHRTRH+8aEvRTK4fFymi7DTYRXxfk7h0+NdPfDcAiFPOA2alREha4QbiZ1+sjVRSrJVk+eqHvMV3cVWvgVkjpqKN64y1Os2eSUq/bE5m25s0gYQM4DnZxvxdVr/qqC6GdCKLlkwl6ZC9rcXrW6TjLHAG2cwtU6aZVjZqoKXidr736389wGvOXI0wAFDW1dSlb6BCWo13aBeceC+0fTEiimWLLLsWf5+2BLTs1Aa2pvWAg7b8xyH9bvWnLy1BFTBDBKrlG/FX2yL6EZGDYr/7a1ANWh+Ly8ZtEw46w47iYCT6kNG+0iWPWhPsDlpwS3A7FqoJmGz2XtEkaiPTiPzIg624oe/6CIf6oUc3hPoSErjuorCilx6IqKPQo0UEpJ7JC+6BM30va4DJbs/QDaZ6qFX9HCLDHORJC2tBFe22gq/5TnOU6c/29Ag2EyccWwIZsvyAHIEC/3MV6cGyfy82DOGqGKv2x2eREuV62CVhKftMaXUjxxF2tU9RO9R1GnNEZjN43trT8LqNKHrVE7NxBU2C5jkZFIIVAYzNz6ECROfiQF8JR5evVDPdnNA9IZH3CHldOrXIT2Jy+ntVD5rmEn1dyPwLWhMDs13qKPmp8k7NJu6InAlU2pM/4c2EQX/m6yu63suS1uuMcDZHn0FEvYoj0WW+VTgmdU0eXzeqRxxhAJGAm731FgHY8VkfSo3FOhs/iOtNv9KlmvSM5zm18Qlt96Fz7RLBiUAY6qYeZZ+wJ3u1hyG38D2EznaNdQKkkcqS8KlMZHD5wyce2fMtCQPk/yBbuhMoghnfae9W1r5+9wmhKAh4kwCZdsi3I0q3e9qZteTNVdOwV2x/s3Ep1dGCIXko/vgWa0LfXyj/h2d09dum5b9rT3Op+pVE9wME+mgL9BrcYbrDwtkzgjFGRCRNgtc4hypPBEaH9PSa2r5B9yfqFj+sXf7oz8vFmaERRNKkriazHYhH53QbQq93krQ4U/+xS6HnmrQ0CZ4wBaTusk7Vpvu6V0uGxulYCcfLSdmjcBkNG2c2vm81VmR3Uc91BWZSUEDV4kpnNF/yoCkKyZXLJoxZ8k4CgBmkT45Kz5TyncktbXiXLnllHHYM4MCTtKJNslc/1tP25Iot+PO1PS4I/wAwgqKqK+Y1E+4P+9ZJcAH0B7hZ43joaQqFYCCsFa/m8GLfPCsgn1FhiETGNvu6sJOFk0xZxlb0o8jwnCz6/Z5KX86KEHVYV8Tm9HCfbRagaMN2+Ge+K9Zp65vBGp2j4rcX5o0jebitnoNy65RJenYR+yVGpNDKMN+UHoZ9VKwcE9Jvy0IyB4stP0DhY4+YgEYK4vEP0SOzls7ieuRPnH/5H+b/YpyRSG/NaxQhE0mr9aKNPxJ5WyWtyY0sdlvDfN0XC72iUp7jC98xVDdkgDeq/ESOQ/rICFe5CgoHCCNQvtdrQEByWz+sJVTTf9yQGyHN8H+uOhtrykfLkaL95Bh4X1rPTiEatl3t9AmOCBoM8tMd9IlYfQf+QwZ26XUa9hcZQ7+cLgz9fTSZ7ZnuhqbJpW/8fRhAno3KXBLHm8nYVurDkAii5fm1UptapAac3v6cAat3WZaCrCz+u+RkoVldYiO80qTX9eymB2qWgVrkfVDs9cbtyOt6732I4bU1DBVzt/lP2BF6asKMbpGDe33zP6sJjomX/m4kUNTE1BoANkjc3eoenKkY7QCQOMvMbHMqEoaG/uQ2cgRQqUplVG4hJ18rycKVrB3dm44iS/5NtqWV4jEIpdqgWcbVPWAMXOYuBYmiqwxOMcgj89zcnUmBxLgHoC5SN2K8Sv8ACXzr+vN2qm10AWzFrU/EdGUsBl+UpFACIkkfvSU0uke1PXvQA1Pau3YWquINvnMhxGBnlvinxSZGV+BHyFTN5O5JuMwwivU4BqlGfv3OHkp+F9zpHTsqtv4M6895GbjimmLQv8rR5jzaH8hOk5iP2yWZX0uCtE3Wl5GFpE0GeXneLSVxtfdT+rUCCrhb9VN7DRK0lQ7ys/Tma3GgTuntUx594Sa7jAyA50fSz9bkbxK8LfF48zjQyE0qNN7VwXVWu4ji02uWdFo38pVWGL0V6KzEdbvkmsciNZX6/XYvUI15ZFbMxLIXQ87z+j/YGhrMThQY0z4suGc5Ul+6VyYAzv3s6prpBq5dHa55TcaQNNvGpW8JlC548W486bIh1ZdguU7jCxUF9gY8nbi4PjfszGebu4CO2qWsPBlMskuOEmSB4KA2gHq9B2eDQy627DhjD8bpAeKIhGjzIHG9NenXkPqMi8LRaO7jc1s/R9NiEbffyKGgzeiHhREQbbYd75lC0kP7cR0RY0ceCuhLFHCQwciy/mnmhIXea3WR1kVW/H8kwjpIVI93nxOcHM/ACfm4C04gMBvpvQP/D2vtCoL1HntVe9BVzImfSMhpUjHBrDhbdTDt0SBYnk1YfHw+IZAPQUlaiVJgC6ii1pCtSgQVmlNz1afYBc3UTYus+hIWpjmTjZYnPvIr4PbGfni4U/L8e9PK9kA4Ot6cNotlPN7jo/Z2sKVF7dKTFJP7BD7q/qJMizcwhK5o5MqDquj/CE5jxZMCRdCtN4qlyuXdNX3JhLM0qiwWiK4V2YgCh5vTU1TgsBF/dG/74uRRR5mY78oqjCUnbxHfLF3adrGm9ODthUwrDjfN+CGRCvhv/HxEYrfCHPzKsYRV4DyIwl7cH8nzQti5Y/1ylnwBNYbBxSSBay8Y4Z7tshbvIIKZkgS5d5OHNkLdoCvKOzv4HgOYxR24dtUT/lIF1JMT+Fvv6T1LLxleyYdgs0oY03BIhlzNew4kxwHs5DDWkTWBY5fKnsLhf1WVsqQGgk7AQyl1a69oDQztnFPmzacTsFj30GoqU191Pei/XOd42FNClWTZm9d7XROqI+7I57pYYwiphOl7kM96oDdDDC9nT99PxLMXmLVB4jZo8vg5gXaP+FjGuBrPdO6W7FtNt7f1UxHVigTqkolXJnLyyX8k07CAwO+TqT6BM2OHaLIK7Bji/uQX6v5XdEQG6HUVWL7GF4CUt6ERqBxN4W+AjhtsrW+iY+06R/rdyjke86Fn1VeljbtQmBUMwtQUDu3S4dzbeK22bdDHmPsNuPalcexHLyG1w4xR3w90qvqiEbkPMUFtUAO61sqpteXm2wrOxBDiBzcmbXHp/tA7PcFCBY8Yj42+oxPm+3m5xa3rAKbC6taLKRK8EOlJ3BWmgXPvzACgF9S2nL7qHicTZtMJUqM8C4yhFmnlr3cPjZE4RSQMag7xmKFcNQlPS20R8CCFJpNyXRTlRKYkUH7rHgLvXLKv5kGpHyEu+PuVnoakrJyXnVJEB+p2n193Aw92aliL2ELwTbwRCqCFyS/wqj4VQ/Dwr4aHIDTSnmPXe25y8mNAkYbpS4Md/MD2JISyiIW+wXwKyrVOPjkqiw7H/bbNy6SVHIyz96EiTp9TN7PVbQf8GvOmlzR55aajTfaAL1+wJM1KotjjGUWhOuTKDFc0dhafd1CfOOKEhhcNd11XdffzRYSB19bvYRFRRLDc+wrEVdzqNg49xHtqNzlqJWoe4R2tWytPvJPes2jMHb6VJHks8ypscxh3pnSCH9RS/Q3xR0HDW5Z+s4I3KB/8k5w8INGrsktuAwO9GksyIMcDc7h8v9erle6k4c4w4eAKspeWX+NauqrbHx0wtNq5Emi0769zEJcAzgdBHWTIqFGrxMZOUORMpC01TJLtMQsrWN/25yTFyJfqVkNfa3sc7bN2u/e8MLdgauQuH6WPSVRLlMSenWYEj/XmnkvDsQgDrm1G4oRlKQk9KnAPGbZldhNdW/faTxkPIfehHxgC7Cr9NBv/pEnxF8AcKDd7qwTWdBwFK6iWfSLmndvmApBhf0NASYcIpMGueXfUrlRX2L+fBVgTbr4Hb9uFJQhVf/DmubGRVIjjbZKWyQs01q8fFddWmrJ+sZL9hA2FbVNNUMe2tg56an8Igb6odwwOl2ay9D/WsrDDFsfY9oi5urilvMOu64Eq56SmXu5wf0N6BXQHDXMOu+Uf9BKe0Dcm92h0RQtQNDZo9Fh6oaoXY8v2BwHyHArnFG1D6ZfyQN+ujyxGoVWbIHKYzhTSq+UQSkyrg80pjq/Ssd00VRQQaPMSff//uWRlpOQzuo5ddpFrCuzqq3q1fMQNe0tWdUYNHQjKd2aV6T6t48Z0S+U4hmjNe+3OymqS3zlcETGmtm7sdwkmhBeOuBVjt93rk75DMehzWi7MsB4VI5o9JCm30RadWrNPIgMyr/R5/Qm/LBKVrIzb0JhICNKx+CX88NcbvV4Z0nNCw229IsRsaXfKgRnkLGKQwMfpBe39jnQwgAFOiDKSIRaskpOfEDwOWEtYRPP0umaO7+ddLBw/ZcHZQLUKx67iiUqbOb2dftS6IhklaOAAzXHLsUDqAScOTux2WyGVKN7gZginWJ8ZPsQ6qEgwX7yTdGt2Ovg/0AuztKCWxvX/zoI37t9g0TMwhMJ2B45oY/MBCzDP4gZnK11O0IH+OP4Lsy071X2DWRKfKU+odPQT/GXcamIUafc4BiMzHhl24mHUtnmU7G62m9rLQ3+5k1o11/oV35LlB0R2+znQ8KWF+c/uWl5zYSEDpK+PrE32BAuBjbCH72/pmM83tWCLOrZqer+bqHto5gx8GwwZ9IFncITcuBDC50pHrAaVhG0xPjKfNEGNKTjBGmFWuU7uHrY2h0ek4rdGj4WZ3oMgg/21JgIHi7C3gAa8obNvHTTIOMR2cX44r40OlM7V1ZDZBWWafUvyFzO5+4JnlQrhNn5W6B0eTTyjCp5rl+IOKSofZH6PLjgp6AlJ2n4yUlw96YgUGcPAoxtZN8ganRhH/D/WHUS6O35D/ar6wY/qi3rR8Zjby17JG4vzqem2h3arO1vfbfDBvKEANYGZTO0FcDI3owS0lAbWzJYxDQNdS5urdLjgXtnxo+ysPpDYfl9S4A8KsKDkebEe6APha4OT4yUACY53Ne3DzGVkqnMycpGXKKk6rvL2DWw5GLJ7ACmWft7i18uvN5q7KJpqzj7xxvrwM3WARHfPqBwAIQ9eosjs+oxuPiojg+5k3I2j9DcmOFinCGaXTx2kh2brvY4zLncFQdJgo+HAeyJhYK4G/7O3EqY6qt5wyzWfICy3aI+OgZw3jXtCYG3xqT1/Uf8nA9bHW3f0BxPpSwOvDPw6Fzu/krQgkaZPF/Yxgxd9cI8owstOJUjVcfs6CGUOESA+psER8KNsGlxdpRu6myFJv06g2N2ZayW6D3nykEHaafXEgNn6gL2N5OBBM8v4eY4th/gFLygQBllaw3axaD5e0DA/VnwuhUTdAf+b5jM2TTFtq0dCKmwUq82W6ezZ6Xi6kGjbCMILgXpW5PxhubCT1f58CRRYaTEWSowUYpazge/mjYb9Z3ACaPIxYjCjaAIdGviNH1ptEAeueG11YD10qm8sr/MA+yIFunEd9wCiKApQoCOvPtqNE/XloF8WvQgfAdedKNUTwN2Z3MzFd6MJmUI6G9LtnbAkM+oxUa+FPcBojV0OtIJ0LFfIhFHlACPuCvSKi/k5myPrMIcH3Pv1md0pEdYURdx7tZ2oEns5ZXj0h9eHCIJUCljvPuuecsmK81GrUrSoOjqWdMi5s9IhrT1cmphAz1UIkyHoT6SH1Lo6Y7fFJdDyHut1s0GJv3TdaumEzcJgtI6ODQuZtxuTaMjLNx8BbfGz1zuduCcKU/ViS8+ziFDE9Ceim5xLVEev9Uj2qJVlr175utMIIBAlEWEEbIcICqqa1u3zvDPjcf/ASgSzaCJ+kDSCVsD/WKY/Q/5VRuTt8DI65Lzm8ni9j+NZDBN5UFram4CwqeBmFQeWzlWVBgJVrxIOXJdbzo+S9mE/HkpjwLo88YWmj/Ot1eBAFSfqyV61ZN3zc+WxXLsW0Ge/2/M4d2dahuE7g8gDmTPca/n6N7lfMH1Ev4jw9Pw39RE9S/NDzxvzuRVUCkxbyOqgQgBdz3wX/39a+7eBIoysvuGYUTGXxRXGnczSI0uzuf9vWVsaCarKE+xKebWlCzm7M28OQO4/d34ULK3RVbOfFtAvcQNxFdTU2zVY7hSR65qJ7U4611vwoU45+XZxGXXqTeEzWvuostzVMezjQSpBMpY97TbxKjMwkNRb3V1+Wl6fzKAUePY8lWAs9AW0sfKilLFl7DwQAzEymOXkZ3JkxsrsByZNq6wP+k4Y363n4CCdoIBmv3Yn6Uy/7d1R5hyJ7uqmIuETXNdr8NUGYzqllHA+LkSH7+6R8a87c6sB/XTxe06u7azB1r6cPM1HMGlhlnvR5PKlNs+6NK1yRzoxAmQlN0t1IVLww7q+I9S9XabG3Y7+iN1tje+FCN1+IzYOFTJooPB8i5sPSphBdbJ/6VoWRuTcuh/p9H/YF7rDM6x6/HW3eRJLeP7KMzt92u5tRm5BH4RwtHU6fSfUw8JHS4ROsY8jtHhk/TzW4jV5V8nogtBUp1xzNVzbY5oqappieUNrQzCGjL/L2GDFKD9pyi7poUSIaKvoq/ASJlVXRVyczZhhst9hgpxYpdoT/hq7YzVYuq8VlEcPfqyJGt39LSyhnE0mzsUlO3STvLGZOLwQQx94PDmdqih4wX451LOuPYcDM3C9cs1QQmCEE8qKlO9pq6AEA9aslYsOJZYoWJCc9QTJal/DQ+3V0qUdJUq1atvYWaH3zafAw8kWi3YpSIZh68lIT7vpOTBhWIAwSpCdABb8ue5r/wv47uckGbxCmKjQwCOQ1sm/6WmhnWLAKqTylL56j5ChqvnS//wwfFYSAtJopfpo0FchfXtpXj6S1tVSm1QqLMJfaMrVnVmDcst9udLT09WGwV3/Y43+07/NibD+C4zira6/Fiw3r1OBZnArjMCjPwpwBAqPChCtnX1zTUea7OPzFTFFZmWhKIfzhPnzn7LJ77wN5+lbrm78663lCY417/p9Wyt4IefMME4g1mFBwnpG4B89sqbTT2BvlJcpJ1bDUY6e2cR/HrYyr6AjxJBpNJtaiP7sN/1oV3methFeXXmNwfmabdajDv+FejuagADEcmS7TVyWAZwwVaGBGaZva95pvP+Lpsi5s6k/irOAV6gkGHKdDROu8APQmA8HRmL0H9Y+7UMZCQD/q+rqInrwn9vXxdBTiztAr3aewjyWgycO8GMtJ1kz+99ZCGf4Ho4+LHMZG8a3LO0CbTkiPCocwTzC3GdvIrS/fWx2LhAw68iKbKcnAGMkMmTr0+WhbKm+BZ9hOCcodunWT/Jo4PYD1ODOw+dTcYYYtfmYCo52wiNijHUKRd//ULgJzjwRCRT8KjMRpf3R7rGhQGuFI7rakUDnWMaOVVBabWtW4h0qnE89pXRw1dwhteSNTANWhC32TdeZZ12UOdRDxXAz5h/uHLquDJbURH4DcEyvLAH7/yt4jr+schQ1PFF7tXcp770q13tF7/kBPi1lxgKL6XVWgpld1AwgTCzUoJ5k7JHuGpUioT4BD3X+ZuJUsAoKHUr1k/+AEYm30IZepHKTN9vfwr/NtH2JvcORQURIqNH0br4si74apszb5LxZ++DMtX0aJVr0g2HZoeCUtQJKhq8lBpGPPW4soBQbcsub8q19ieggaDIdJlPPIZOuohjIQ2miFCQ6ofpXpT9nplEiSqHwCyuRdxHom5wER5+I3ybMPRaYiBpPR9zotqSoZBt5CcR3Q2FX4f7AQRN7ECsFS4WyZRJfZn9QBBR05V+LBiugn2ble7bbi7X4QPTSnJ0tZWaAX/58Gqc0IcBH0akgbVPPGYa+jplznwJuO/1mq1sbqWxm0QKbcXvBvSvmqiYrpMXIQktu1oIsPdoPI2qvvnwIvbwZH2qM3i68aBe7hYFo8WgRkmbo5l41ENu/B37zE1B7WjwanqKqlPZkRfUcim79SHw2sQhDgwLvXAOdg1QdL4BKQpu8ubRXybVE+MussBsHQt9i0oHUFoi2T2Q9qy4FLMToFPH4AtD45pdeaaY63hJfjIaUZX7GO8mGbyID5Fqg/j4bR69szgJiUOctqrxR/RIK4oHrFMdmpEidHDMvQtU2fbzP/TWikCQVsL9SVeEeRFt6cuZ80i3F5DTrm932xR6ChKvmb0j8r2NuSwKK+AMLdCr5fRdwN4MR20JsrwkGSjKeCKuswej4V12VUnJ23iGJxv5Qjv0AYMHevyvh8dXeHPG2Q/0qi5GgIYCxCFjo3bGYVpuVlNo0UPedIG57Kt+FzY5vQPRQdE+1ywZ9mTOgCiiohvUEwV0VLyi7zdvUxfTWGY82DjO4h3Yjbubxw8EAn2K6okPnfGiPWHx6OUxGo4cCoP+vAXBvESMg4OTjWnPQbjYjtsbrR6cy2Kg6wbDZpRLwaSy3o6ytz7s2pAOJyu8i7YUn8iNWoAN9369bnk7L4ZjpmVpIQ38+xT3gJLqHsd0zcYEBUHJfi8zHhXhgYNx29XCzgvwA2vehZYCyTz7hU7FF6XUlySayAVApb+MOswnaIZQWi/BVOU41glwywF30h+9qUj+2K95+OlngcVyWXS9BsGy/esfs+sW/wwxD7IUbBL/7gbgh5m9eAwIPfvmsz7gB8V68j7DXn3dEU07i8+S0KSfEmQZv3P4Y3kaKtueV9oIDYKEoQheTQv05njN+4wXMiLgrz9FtbzAAfd0oiSCsgFg1hFRD0YnFtjstbqK84duM6qZuCcy/UgzzeMAxQpQ87EfifKsPv727VP6/mg1E1hEkmC+omQ2r3v+9/HNMW5evnOk3hiBHY4p9x/mEs91UIj7WyJ2BjQlhiTyWnkOI5c+vYVhoHGDaMRu0O1x9hPde8uxKDKPdKv0GQ6TVjspfZPCTA6a3KRmHDzylNsa6R295FBf1uhzMduduMbYUiEzq8wy1v31V0MaO+q4M3MlfRWkDNd1eOq9AluMnxSaV03qW1cK1tuAhYLoDSh9mLpvczzHM7Tyw8/SuCajciolS/ny0+Wf4x3DWnGdgB1yDTTh0uCtaHUVPmpIDE8eiq2/0rxL8kVWh/ntAfRtdWpAYTobm8GXhflkDi5cOqXVKAAhgY3EAMraUC3xHACSY9KZqsV28IZsERew5uBTL1Txkgk2kh63nPKHi5YEiNYJgUIQuiXyBN4nhT/LoKmmGB2dcsKklokXQ2psXlUVUIG7ORt7ybUlLEXJXOOM6i+KNcjG3n0wHMxGk0EuuB9ORozNu4RnBobDFbfKFR4lL2itb951VFpYQyR28MCKnR1nZv6/x8XVva0Qlgp8Y23wf2a9KLwnfdMnG4S8jdDfuepPEBF1ePCHWjqCRQBVWNHrpvR2HtJTXCeloRt74s/MqxuBn/COM+DppTQaCKf2pzi/IpGPeO4pherBtTolhVzmsbK4ggdJYe2JEe3GGH3lKWMs1+JuclSoDB8NX3tn6Bt8W/RP7ACpsXI+QBY3jlGq9UqQCv+beEqxPMhLjFr+ZHbvQx31CYD51odcmLLE4jFoUytwgY6bweI0pJO1LmrA7IOoNC1ni1LRVlXyoqTDFpqkDmccE1BxkqBYqx7edJczcjQOTzgRJTgO8G3lWpuH8GZ5ir36yLnp6GBtkUSbAi8FFKDUZ5hmDkXDCwVVbwEUPzL43+autfpA5mYgFberwwDC0JMvjyVHPb6yJdmAeBtZMjWea8AF3Pcqegav9Dpv1/rhkJ0gEFMsjlH5acCD0Fnqkn2hLX3cMUkfX91UQi3iYUrFZbFCfqQg80YzAG5w/JNW/3D+FRqg8PAAA=",
  },
  {
    testimonial:
      "Arise, awake, and stop not until the goal is reached.",
    name: "Swami Vivekananda",
    designation: "Doctrate",
    company: "DEF Corp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUPlWR5t-nw_VTDP-2SiF2ytsbpvCuSN5Eg&s",
  },
  {
    testimonial:
      "I am not a perfectionist, but I like to feel that things are done well",
    name: "M.S. Dhoni",
    designation: "Captain",
    company: "India",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: "data:image/jpeg;base64,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"
  },
];

const projects = [
  {
    name: "Apigee",
    description:
      "Designed, developed, and migrated 1000+ proxies across various environments, including Layer 7 to Apigee Edge, Apigee Edge to Apigee Hybrid, Hybrid to DMZ, and OPDK to Hybrid.",
    tags: [
      {
        name: "Apigee",
        color: "blue-text-gradient",
      },
      {
        name: "Layer 7",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automation",
    description:
      "We automated report generation using the Management API, retrieving proxy analytics and sending insights via email. The process includes fetching app details, analyzing proxy bundles, and highlighting policy gaps.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Node jS",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Totalytics",
    description:
      "Totalytics is CRM , inlcude sales tracking, marketing, and attendance management. It enhances customer engagement with reliable reports, dashboards, automation, seamless collaboration.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
