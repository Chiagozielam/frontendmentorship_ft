import React from "react";
import { LESSONS_PAGE, PROFILE_PAGE, LOGIN_PAGE, BONUSUS_PAGE, PODCASTS_PAGE } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHouseUser,
  faShoppingBag,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import LessonsPage from "./lessonsPage/lessonsPage";
import ProfilePage from "./profilePage/profilePage";
import BonusesPage from "./bonuses-page/bonusPage"
import PodcastsPage from "./podcasts-page/podcastsPage"


export const dashRoutes = [
  {
    name: "Home",
    icon: <FontAwesomeIcon icon={faHouseUser} color="#898989" />,
    path: LESSONS_PAGE,
    component: LessonsPage,
    exact: true
  },
  {
    name: "My Profile",
    icon: <FontAwesomeIcon icon={faUserCircle} color="#898989" />,
    path: PROFILE_PAGE,
    component: ProfilePage,
    exact: false
  },
  {
    name: "View Bonuses",
    icon: <FontAwesomeIcon icon={faShoppingBag} color="#898989" />,
    path: BONUSUS_PAGE,
    component: BonusesPage,
    exact: false
  },
  {
    name: "Dev Podcast",
    icon: <FontAwesomeIcon icon={faPodcast} color="#898989" />,
    path: PODCASTS_PAGE,
    component: PodcastsPage,
    exact: false
  },
];
