const segmentElements = document.querySelectorAll(".segment");
const borderElements = document.querySelectorAll(".border");

// Add a click listener to each segment element
segmentElements.forEach((segmentElement) => {
  segmentElement.addEventListener("click", () => {
    // Toggle the opacity of the segment element
    segmentElement.style.opacity =
      segmentElement.style.opacity === "1" ? "0.1" : "1";
  });
});

borderElements.forEach((borderElements) => {
  borderElements.addEventListener("click", () => {
    // Toggle the opacity of the segment element
    orderElements.style.opacity =
      borderElements.style.opacity === "1" ? "0.1" : "1";
  });
});
