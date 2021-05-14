let health = 100
let hits = 0

function counter() {
  let hitCounter = document.getElementById("hit-counter")
  hits += 1;
  hitCounter.innerHTML = "Hits: " + hits
}

function slap() {
  let healthDisplay = document.getElementById("health-display")
  let healthBar = document.getElementById("health")
  health -= 1;
  healthBar.style.width = health + "%";
  healthDisplay.innerHTML = health
  console.log(health)
  counter()
}

function steal() {
  let healthDisplay = document.getElementById("health-display")
  let healthBar = document.getElementById("health")
  health -= 5;
  healthBar.style.width = health + "%";
  healthDisplay.innerHTML = health
  console.log(health)
  counter()
}

function spit() {
  let healthDisplay = document.getElementById("health-display")
  let healthBar = document.getElementById("health")
  health -= 50;
  healthBar.style.width = health + "%";
  healthDisplay.innerHTML = health
  console.log(health)
  counter()
}

function hug() {
  let healthDisplay = document.getElementById("health-display")
  let healthBar = document.getElementById("health")
  if (health <= 85) {
    health += 15;
    healthBar.style.width = health + "%";
    healthDisplay.innerHTML = health
    console.log(health)
  }
  else if (health <= 95) {
    health = 100
    healthBar.style.width = health + "%";
    healthDisplay.innerHTML = health
    console.log(health)
  }
}

function bust() {
  let healthDisplay = document.getElementById("health-display")
  let healthBar = document.getElementById("health")
  if (health < 100) {
    health = 100;
    healthBar.style.width = health + "%";
    healthDisplay.innerHTML = health
    console.log(health)
  }
}
