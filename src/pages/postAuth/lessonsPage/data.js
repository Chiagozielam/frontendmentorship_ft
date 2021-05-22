import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import Achievements from "./achievements"
import LessonFolders from "./lessonFolders"

export const lessonFoldersArray = [
  // {
  //   folderTitle: "Introduction to the web",
  //   folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
  //   id: "0",
  //   locked: false,
  //   completed: true,
  //   instuctor: {
  //     name: "Daniel Don",
  //     image: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
  //     twitter: "",
  //     linkdin: ""
  //   }, 
  //   sublessons: [
  //     {
  //       title: "lesson 1",
  //       duration: "5 mins",
  //       description: 'lesson 1 description',
  //       videoLink: "https://player.vimeo.com/external/195913058.sd.mp4?s=862b841594ec9934f69b1a7594ffb21a15a7e3bd&profile_id=164&oauth2_token_id=57447761",
  //       completed: true,
  //       active: true
  //     },
  //     {
  //       title: "lesson 2",
  //       duration: "5 mins",
  //       description: 'lesson 2 description',
  //       videoLink: "https://player.vimeo.com/external/365693304.sd.mp4?s=1135c5f6efd0282dfd3cb8f344459c85f6beb7d8&profile_id=139&oauth2_token_id=57447761",
  //       completed: true,
  //       active: false
  //     },
  //     {
  //       title: "lesson 3",
  //       duration: "5 mins",
  //       description: 'lesson 3 description',
  //       videoLink: "https://player.vimeo.com/external/391645493.sd.mp4?s=bab29931bcc49e27343c51e3323499d17661b296&profile_id=139&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //     {
  //       title: "lesson 4",
  //       duration: "5 mins",
  //       description: 'lesson 4 description',
  //       videoLink: "https://player.vimeo.com/external/294394084.sd.mp4?s=9999be03db56196b6d8bd39003c0f1f9f6258695&profile_id=164&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //     {
  //       title: "lesson 5",
  //       duration: "5 mins",
  //       description: 'lesson 5 description',
  //       videoLink: "https://player.vimeo.com/external/368010126.sd.mp4?s=ed2b36a42d2ac7b22000ed0f4ea187df7091423b&profile_id=139&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //     {
  //       title: "lesson 6",
  //       duration: "5 mins",
  //       description: 'lesson 6 description',
  //       videoLink: "https://player.vimeo.com/external/365693304.sd.mp4?s=1135c5f6efd0282dfd3cb8f344459c85f6beb7d8&profile_id=139&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //   ]
  // },
  // {
  //   folderTitle: "Html basics",
  //   folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
  //   id: "1",
  //   locked: false,
  //   completed: false,
  //   instuctor: {
  //     name: "Wahab Habib",
  //     image: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
  //     twitter: "",
  //     linkdin: ""
  //   }, 
  //   sublessons: [
  //     {
  //       title: "lesson 1",
  //       duration: "5 mins",
  //       description: 'lesson 1 description',
  //       videoLink: "https://player.vimeo.com/external/301819550.sd.mp4?s=8bbc563365911e7cda8ae7e8ee16d2b6e31bf0e7&profile_id=164&oauth2_token_id=57447761",
  //       completed: true,
  //       active: true
  //     },
  //     {
  //       title: "lesson 2",
  //       duration: "5 mins",
  //       description: 'lesson 2 description',
  //       videoLink: "https://player.vimeo.com/external/491349122.sd.mp4?s=841bd0cedfcdc0ee424f17c5a2b599ef8172f3a9&profile_id=165&oauth2_token_id=57447761",
  //       completed: true,
  //       active: false
  //     },
  //     {
  //       title: "lesson 3",
  //       duration: "5 mins",
  //       description: 'lesson 3 description',
  //       videoLink: "https://player.vimeo.com/external/506514584.sd.mp4?s=8e8c2f75bd44872ca04432d4a3c76131b343f7d6&profile_id=165&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //     {
  //       title: "lesson 4",
  //       duration: "5 mins",
  //       description: 'lesson 4 description',
  //       videoLink: "https://player.vimeo.com/external/494057730.sd.mp4?s=9690a0c73a31064d6ef72841d25dba7bb6c68033&profile_id=165&oauth2_token_id=57447761",
  //       completed: false,
  //       active: false
  //     },
  //   ]
  // },
  {
    folderDetails: [{
      folderTitle: "Introduction to the web",
      folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
    }],
    _id: "2",
    locked: true,
    completed: false
  },
  {
    folderDetails: [{
      folderTitle: "Introduction to the web",
      folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
    }],
    _id: "2",
    locked: true,
    completed: false
  },
  {
    folderDetails: [{
      folderTitle: "Introduction to the web",
      folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
    }],
    _id: "2",
    locked: true,
    completed: false
  },
  {
    folderDetails: [{
      folderTitle: "Introduction to the web",
      folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
    }],
    _id: "2",
    locked: true,
    completed: false
  },
  {
    folderDetails: [{
      folderTitle: "Introduction to the web",
      folderImage: "https://image.slidesharecdn.com/1-160109130835/95/introduction-to-web-design-1-638.jpg?cb=1452344944",
    }],
    _id: "2",
    locked: true,
    completed: false
  },
  
  
]

export const achievementsArray = [
  {
    achievementTItle: "First Achievement",
    locked: true,
  },
  {
    achievementTItle: "Second Achievement",
    locked: true,
  },
  {
    achievementTItle: "Third Achievement",
    locked: true,
  },
  {
    achievementTItle: "Fourth Achievement",
    locked: false,
  },
  {
    achievementTItle: "5th Achievement",
    locked: false,
  },
  {
    achievementTItle: "6th Achievement",
    locked: false,
  },
]
