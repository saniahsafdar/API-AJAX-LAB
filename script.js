const postParent = fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json());
postParent.then(data => {
    // console.log(data);

    const sectionEl = document.getElementById("main"); //getting the main section
    for (let postData of data.data.children){
        // console.log(postData);
        // console.log(postData.data);

        // Making the title:
        const titleEl = document.createElement("h2"); // creating all the h2 on the page with all the titles
        titleEl.classList.add("post")
        titleEl.innerText = postData.data.title;
        sectionEl.appendChild(titleEl);

        //Making the images
        const picEl = document.createElement("img");
        picSource = postData.data.thumbnail;
        picEl.src = picSource;
        sectionEl.appendChild(picEl);

        //Making the link
        const linkEl = document.createElement("a");
        linkSource = postData.data.url;
        linkEl.setAttribute("href", linkSource);
        linkEl.innerText = postData.data.url;
        sectionEl.appendChild(linkEl);



    }


});

// postParent.then(data =>{
//     console.log(data.data.children[0].data.title)
// })
