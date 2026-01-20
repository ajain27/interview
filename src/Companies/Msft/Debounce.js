const debounce = (callback, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

function searchData(query) {
  console.log(`API call with query: ${query}`);
  // Perform your API request or heavy computation here
}

// Create a debounced version of the searchData function with a 300ms delay
const debouncedSearch = debounce(searchData, 300);

// Use the debounced function in an event listener
document.getElementById("searchInput").addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
});
