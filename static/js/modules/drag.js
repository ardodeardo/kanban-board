export default function drag() {
  let dragged = null;

  const handleCard = () => {
    const cards = document.querySelectorAll(".c-card");

    cards.forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        dragged = e.target;
      });
    });
  };

  const handleDropZone = () => {
    const columns = document.querySelectorAll(".js-drop-zone");

    columns.forEach((column) => {
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      column.addEventListener("drop", (e) => {
        e.preventDefault();

        dragged.parentNode.removeChild(dragged);
        e.target.closest(".c-kanban-column__list").append(dragged);
      });
    });
  };

  const init = () => {
    handleCard();
    handleDropZone();
  };

  window.addEventListener("DOMContentLoaded", () => {
    init();
  });
}
