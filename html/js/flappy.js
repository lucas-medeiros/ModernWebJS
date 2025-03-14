const BARRIERS_DISPLACEMENT = 3;
const BIRD_FLY_UP = 8;
const BIRD_FLY_DOWN = -5;
const GAME_OPENING = 200;
const GAME_SPACE = 400;

const newElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

const isOverlapping = (elementA, elementB) => {
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

  return horizontal && vertical;
};

const checkCollision = (bird, barriers) => {
  let collision = false;
  barriers.pairs.forEach(pair => {
    if (collision) return collision;
    else {
      const top = pair.top.element;
      const bottom = pair.bottom.element;

      collision =
        isOverlapping(bird.element, top) || isOverlapping(bird.element, bottom);
    }
  });
  return collision;
};

class Barrier {
  constructor(reverse = false) {
    this.element = newElement("div", "barreira");
    const border = newElement("div", "borda");
    const body = newElement("div", "corpo");

    this.element.appendChild(reverse ? body : border);
    this.element.appendChild(reverse ? border : body);

    this.setHeight = height => (body.style.height = `${height}px`);
  }
}

class PairOfBarriers {
  constructor(height, opening, x) {
    this.element = newElement("div", "par-de-barreiras");
    this.top = new Barrier(true);
    this.bottom = new Barrier(false);

    this.element.appendChild(this.top.element);
    this.element.appendChild(this.bottom.element);

    this.randomOpening = () => {
      const topHeight = Math.random() * (height - opening);
      const bottomHeight = height - opening - topHeight;
      this.top.setHeight(topHeight);
      this.bottom.setHeight(bottomHeight);
    };

    this.getX = () => parseInt(this.element.style.left.split("px")[0]);

    this.setX = x => (this.element.style.left = `${x}px`);

    this.getWidth = () => this.element.clientWidth;

    this.randomOpening();
    this.setX(x);
  }
}

class Barriers {
  constructor(height, width, opening, space, notifyPoint) {
    this.pairs = [
      new PairOfBarriers(height, opening, width),
      new PairOfBarriers(height, opening, width + space),
      new PairOfBarriers(height, opening, width + space * 2),
      new PairOfBarriers(height, opening, width + space * 3)
    ];

    this.animate = () => {
      this.pairs.forEach(pair => {
        pair.setX(pair.getX() - BARRIERS_DISPLACEMENT);

        if (pair.getX() < -pair.getWidth()) {
          // element is out of screen
          pair.setX(pair.getX() + space * this.pairs.length);
          pair.randomOpening();
        }

        const middle = width / 2;
        const crossedMiddle =
          pair.getX() + BARRIERS_DISPLACEMENT >= middle && pair.getX() < middle;
        if (crossedMiddle) notifyPoint();
      });
    };
  }
}

class Bird {
  constructor(heightGame) {
    let flying = false;
    this.element = newElement("img", "passaro");
    this.element.src = "imgs/passaro.png";

    this.getY = () => parseInt(this.element.style.bottom.split("px")[0]);
    this.setY = y => (this.element.style.bottom = `${y}px`);

    window.onkeydown = e => (flying = true);
    window.onkeyup = e => (flying = false);

    this.animate = () => {
      const newY = this.getY() + (flying ? BIRD_FLY_UP : BIRD_FLY_DOWN);
      const maxHeight = heightGame - this.element.clientHeight;

      if (newY <= 0) {
        this.setY(0);
      } else if (newY >= maxHeight) {
        this.setY(maxHeight);
      } else {
        this.setY(newY);
      }
    };

    this.setY(heightGame / 2);
  }
}

class Progress {
  constructor() {
    this.element = newElement("span", "progresso");
    this.updatePoints = points => {
      this.element.innerHTML = points;
    };
    this.updatePoints(0);
  }
}

class FlappyBird {
  constructor() {
    let points = 0;
    const gameArea = document.querySelector("[wm-flappy]");
    const height = gameArea.clientHeight;
    const width = gameArea.clientWidth;

    const bird = new Bird(700);
    const progress = new Progress();
    const barriers = new Barriers(height, width, GAME_OPENING, GAME_SPACE, () =>
      progress.updatePoints(++points)
    );

    gameArea.appendChild(progress.element);
    gameArea.appendChild(bird.element);
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.element));

    this.start = () => {
      const timer = setInterval(() => {
        barriers.animate();
        bird.animate();

        if (checkCollision(bird, barriers)) clearInterval(timer);
      }, 20);
    };
  }
}

const flappyBird = new FlappyBird();
flappyBird.start();
