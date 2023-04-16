<script>
    let elements = [
      { id: 1, text: "Element 1" },
      { id: 2, text: "Element 2" },
      { id: 3, text: "Element 3" },
      { id: 4, text: "Element 4" }
    ];
  
    const threshold = 50; // Set the swipe threshold
  
    function handleSwipe(id) {
      elements = elements.filter(element => element.id !== id);
    }
</script>

<div class="row">
{#each elements as element}
    <div
    class="element"
    on:touchstart={event => {
        const touch = event.touches[0];
        event.currentTarget.dataset.startY = touch.clientY;
    }}
    on:touchend={event => {
        const touch = event.changedTouches[0];
        const startY = parseInt(event.currentTarget.dataset.startY);
        const endY = touch.clientY;
        const swipeDistance = startY - endY;
        if (swipeDistance > threshold) {
        handleSwipe(element.id);
        }
    }}
    >
    {element.text}
    </div>
{/each}
</div>