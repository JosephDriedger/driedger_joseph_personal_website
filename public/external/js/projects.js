function populateProjects() {
    let projectTemplate = document.getElementById("project-template");
    let insertProject = document.getElementById("insert-project");

    db.collection("Projects")
        .orderBy("sort")
        .get()
        .then(allProjects => {
            allProjects.forEach(doc => {
                let title = doc.data().title;
                let date = doc.data().date;
                let language = doc.data().language;
                let description = doc.data().description;
                let link = doc.data().link;
                let source = doc.data().source;

                let testProject = projectTemplate.content.cloneNode(true);
                testProject.querySelector('.project-title').innerHTML = title;
                testProject.querySelector('.project-date').innerHTML = date;
                testProject.querySelector('.project-languages').innerHTML = language;
                testProject.querySelector('.project-description').innerHTML = description;
                testProject.querySelector('.project-link-a').href = link;
                testProject.querySelector('.project-link').innerHTML = link;
                testProject.querySelector('.project-source-a').href = source;
                testProject.querySelector('.project-source').innerHTML = source;

                insertProject.appendChild(testProject);
            })
        })
}
populateProjects();