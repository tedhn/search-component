const searchInput = document.querySelector("#searchBox");
const nameCollection = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (e) => {
	const searchQuery = e.target.value;

	// const a = nameCollection.filter((value)=> value.innerHTML === searchQuery.toLowercase())
	for (let i = 0; i < nameCollection.length; i++) {
		const currenItem = nameCollection[i].textContent.toLowerCase();
		if (currenItem.includes(searchQuery)) {
			nameCollection[i].style.display = "block";
		} else {
			nameCollection[i].style.display = "none";
		}
	}
});
