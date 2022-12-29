function populatePosts() {
    let postTemplate = document.getElementById("postTemplate");
    let insertPost = document.getElementById("insert-post");

    db.collection("Posts")
        .orderBy("sort")
        .get()
        .then(allPosts => {
            allPosts.forEach(doc => {
                let title = doc.data().title;
                let date = doc.data().date;
                let time = doc.data().time;
                let image = doc.data().image;
                let description = doc.data().description;
                let link = doc.data().link;

                let testPost = postTemplate.content.cloneNode(true);
                testPost.querySelector('.post-title').innerHTML = title;
                testPost.querySelector('.post-date').innerHTML = date;
                testPost.querySelector('.post-time').innerHTML = time;
                testPost.querySelector('.post-img').attr("src", image);
                testPost.querySelector('.post-description').innerHTML = description;
                testPost.querySelector('.post-link-a').href = link;
                testPost.querySelector('.post-link').innerHTML = link;

                insertPost.appendChild(testPost);
            })
        })
}
populatePosts();