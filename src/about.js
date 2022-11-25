export default function about () {
    const content = document.getElementById("content");

    const mainAbout = document.createElement("div");
    const info = document.createElement("div");

    info.innerHTML = `<h2>About us</h2>
                    <p>We have traveled 2000 years to give you the best food you have ever seen.</p>
                    <p>Don't be afraid and come with us to this magnificant experience.</p>
                    <br><br><br>
                    <p>Background image photo: Ibrahim Boran </p>`;
    mainAbout.classList.add("main-about", "active");
    info.classList.add("info-about");

    mainAbout.appendChild(info);
    content.appendChild(mainAbout);
}