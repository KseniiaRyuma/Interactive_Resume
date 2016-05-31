// var name = "Kseniia Ryuma";
// var role = "Designer/Developer/Student";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
	"name" : "Kseniia Ryuma",
	"role" : "Designer/Developer/Student",
	"contact_info" : {
		"mobile" : "415-583-3989",
		"email" : "kryuma@berkeley.edu",
		"github" : "KseniiaRyuma",
		"location" : "San Francisco"
	},
	"welcomeMsg" : "Останься прост, беседуя с царями, Останься честен, говоря с толпой Останься прост",
	"skills": ["Python", "Java", "JavaScript", "SQL"],
	"bioPic" : "images/pic.jpg"
}

// *** HEADER ***
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

// *** Contact Information ***
var formattedInfo = [];
formattedInfo.push(HTMLmobile.replace("%data%", bio.contact_info.mobile));
formattedInfo.push(HTMLemail.replace("%data%", bio.contact_info.email));
formattedInfo.push(HTMLgithub.replace("%data%", bio.contact_info.github));
formattedInfo.push(HTMLlocation.replace("%data%", bio.contact_info.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedwelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedInfo){
	$("#topContacts").append(formattedInfo[i]);
}



// *** Work Experience ***
var work = {
	"jobs" :
		[
			{
				"employer" : "UC Berkeley",
				"title" : "Reader",
				"dates" : "February 2016 - May 2016",
				"location" : "Berkeley, CA",
				"description" : "Assessed students' quizzes, projects, and other assignments for a The Structure and Interpretation of Computer Programs course. Worked with fellow readers to develop rubrics tailored to assignment and curriculum specifications."
			},
			{
				"employer" : "Heptagon Advanced Micro Optics",
				"title" : "Software Developer Intern",
				"dates" : "May 2015 - August 2015",
				"location" : "Mountain View, CA",
				"description" : "Prepared and tested software releases. Wrote scripts to automate repetitive tasks or remotely perform functions on end point machines. Maintained testing environment for thorough vetting of new technologies prior to deployment to customers"
			},
			{
				"employer" : "Launch Hackathon",
				"title" : "Software Developer/Designer",
				"dates" : "Summer 2015",
				"location" : "San Francisco, CA",
				"description" : " Created UX, visuals, front-end implementation for web application TravelMatch"
			}
		]
};



function displayWork() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);


			$(".work-entry").append(formattedEmployer);
			$(".work-entry").append(formattedTitle);
			$(".work-entry").append(formattedDates);
			$(".work-entry").append(formattedLocation);
			$(".work-entry").append(formattedDescription);
		}
	}
}

displayWork();

// *** Projects ***
var projects = {
	"projects": [
		{
			"title" : "Maps",
			"datesWorked" : "December 2014 - January 2015",
			"description": "A visualization of restaurant ratings using machine learning and the Yelp academic dataset.",
			"pic" : "images/map.png",
			"url" : "#"
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "A visualization of restaurant ratings using machine learning and the Yelp academic dataset.",
			"pic" : "images/2.png",
			"url": "#"
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2014",
			"description": "A visualization of restaurant ratings using machine learning and the Yelp academic dataset.",
			"pic" : "images/1.jpg",
			"url": "#"
		}
	]
};

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].pic)

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);

		}
	}
}

projects.display();

// *** Educatin ***
var education = {
	"schools": [
		{ "name": "UC Berkeley",
			"datesAttended": "Fall 2015 - May 2017",
			"location": "Berkeley, CA",
			"major": "Cognitive Science",
			"minor": "Computer Science",
			"url": "#"
		},
		{ "name": "San Francisco City College",
			"datesAttended": "Fall 2013 - May 2015",
			"location": "San Francisco, CA",
			"major": "Computer Science",
			"url": "#"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "#"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2014",
			"url": "#"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "#"
		}
	]
};

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);


			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			if (education.schools[i].minor != undefined){
				var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);
			}


			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

			if (education.schools[i].minor != undefined){
				$(".education-entry:last").append(formattedSchoolMinor);
			}
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
			}
		}

	}
}

education.display();