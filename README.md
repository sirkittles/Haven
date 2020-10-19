## Overview

_**Room Porn** is a social platform for interior lovers. Completed a quarantine project and want to show the world? Room Porn allows you to share your hard work with likeminded individuals with a passion for making their rooms beautiful._


<br>

## MVP

_**Room Porn** will be a full CRUD React on Rails app featuring user authentication featuring a wall of posts made by users.


<br>

### Goals

- User Authentication
- Full CRUD
- Trending Hashtags and the posts associated with them

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React            | For front end component building using JSX |
| React Router     | Enables routing through app                |
| Rails            | Rails used to build backend                |
| bcrypt           | Password hashing                           |
| JWT              | Token usage for user authentication        |

<br>

### Client (Front End)

#### [Wireframes](https://www.figma.com/file/VHesnriEcxMIOgGNujXyDM/Mobile-wireframing-kit-Community?node-id=1%3A1154)

![Landing page/Auth](https://i.imgur.com/kUTJoA4.png)

- Landing page, registration, authentication

![wireframes](https://i.imgur.com/bBXtUSQ.png)

- CRUD for posts once user has logged in.


#### Component Tree


#### Component Hierarchy

``` structure

src
|__ assets/
      |__ images
      |__ icons
|__ components/
      |__ shared.jsx
        |__ Layout.jsx
        |__ Nav.jsx
        |__ Footer.jsx
      |__ DeleteModal.jsx
      |__ LikeButton.jsx
      |__ PostCard.jsx
      |__ Post.jsx
      |__ Sort.jsx
|__ screens/
      |__ LandingPage.jsx
      |__ PostWall.jsx
      |__ PostDetail.jsx
        |__ DeletePost
      |__ AddPost.jsx
      |__ EditPost.jsx
      |__ TrendingPosts.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ posts.js
      |__ comments.js
|__ utils/
      |__ sort.js
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Layout       | functional |   n   |   y   | _The Layout will be where the screens render_                    |
| Nav          | functional |   n   |   n   | _The navigation will provide a link to each of the pages_        |
| Footer       | functional |   n   |   n   | _The footer will contain basic info_                             |
| PostCard     | functional |   n   |   y   | _The postcard will have the structure of each post rendered on the wall_   |
| Post       | functional |   n   |   y   | _The post will have the info for each post_                             |
| DeleteModal   | functional |   n   |   n   | _Modal will appear when user selects delete_                  |
| LikeButton  | functional |   n   |   n   | _Like button will change color once it has been clicked by a user_  |
| Sort  | functional |   n   |   y   | _Will sort through hashtags and likes to show trending hashtags and top posts_  |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| ReadMe              |    H     |     5 hrs      |     6 hrs     |     6 hrs   |
| Backend             |    H     |     6 hrs      |      hrs      |     TBD     |
| React App Setup     |    H     |     3 hrs      |      hrs      |     TBD     |
| User Auth Setup     |    H     |     4 hrs      |      hrs      |     TBD     |
| Create Screens      |    H     |     12 hrs     |      hrs      |     TBD     |
| CRUD functionality  |    H     |      6 hrs     |      hrs      |     TBD     |
| Delete Modal        |    H     |      3 hrs     |      hrs      |     TBD     |
| Trending Posts      |    M     |      4 hrs     |      hrs      |     TBD     |
| CSS Design          |    H     |      6 hrs     |      hrs      |     TBD     |
| Post MVP            |    L     |      6 hrs     |      hrs      |     TBD     |
| TOTAL               |          |      55hrs     |      hrs      |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1JYuIKmF7K62Dmjlv3qxJKHhsYfWfkm-P/view?usp=sharing)

<br>

***

## Post-MVP

- Users will be able to like posts
- Posts can be filtered in order of likes when "top posts" is selected
- Light & dark theme

***

## Code Showcase



## Code Issues & Resolutions


