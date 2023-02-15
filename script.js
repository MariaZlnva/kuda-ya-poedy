document.addEventListener('DOMContentLoaded', _ => {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('content__show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let people = document.getElementsByClassName('content__people')[0];

  observer.observe(people);
});
