const trippy = document.querySelector("#brand");
const t1 = new TimelineLite({ paused: true });
const t2 = new TimelineLite({ paused: true });
t1.fromTo(".img1", { opacity: 0 }, { opacity: 1, duration: 1 });
t1.play();
