document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".close-modal");
    const modalContent = document.querySelector(".modal-content");

    projectItems.forEach((item) => {
        item.addEventListener("click", function () {
            const projectTitle = item.querySelector(".project-title").textContent;
            const projectDescription = item.querySelector(".project-description").textContent;

            modalContent.innerHTML = `
                <h2 class="text-xl font-semibold mb-2">${projectTitle}</h2>
                <p class="text-gray-700">${projectDescription}</p>
            `;

            modal.classList.add("open");
        });
    });

    closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("open");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("open");
        }
    });
});
