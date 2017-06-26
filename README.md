# Image Search Abstraction Layer
-----------------------------------------------------------------------------------
## [Free Code Camp](http://www.freecodecamp.com) Back End Certification
### API Project 04 - Image Search Abstraction Layer
-----------------------------------------------------------------------------------


#### The Project is hosted here in Glitch.com : https://talented-musician.glitch.me/

-----------------------------------------------------------------------------------
__Technologies used__:
Node, Express, MongoDB, Mongoose, Javascript, HTML, CSS and Bootstrap
Developed and Hosted in [glitch.com](https://www.glitch.com)


![my profile photo](http://res.cloudinary.com/evedes/image/upload/c_scale,w_150/v1483576770/PROFILE_PIC_e9crwf.jpg)

Hi guys! I'm Eduardo Vedes (@evedes) and I've challenged myself in the first of January to reboot my career in 360 days. I've chosen to pursue a Full Stack Developer career. In order to achieve that I've started studying and practicing along in [Free Code Camp](http://www.freecodecamp.com). I've already completed the Front End Certification Program and now I'm focused on the Back End Cert. I'm learning how to develop solutions with node.js + express + mongoDB.

This is my fourth API Project. I hope you like it!

-----------------------------------------------------------------------------------
#### OBJECTIVE:
Build a full stack JavaScript app that allows you to search for images like this: https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10 and browse recent search queries like this: https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/. Then deploy it to Glitch.

NOTE: for each project, you should create a new GitHub repository and a new Glitch project. 

-----------------------------------------------------------------------------------
#### USER STORIES:

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.

3. I can get a list of the most recently submitted search strings.

------------------------------------------------------------------------------------
#### NOTES: 

1. I've changed a little bit of the user stories. Started using Google CSE but due to the number of requests per day limitation I've chosen [Pixabay.com](https://pixabay.com/) site to use for this project. I've configured the API and got these three variables: PageUrl, ImageUrl and the Number of Downloads (changed the Alt Text for the Number of Downloads)

2. You can paginate thru the results by adding /offset=10 to the URL


Copyright &copy; 2017 | EVEDES | MIT License