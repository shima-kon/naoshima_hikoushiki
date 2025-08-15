
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const slideMenu = document.getElementById('slideMenu');

  menuToggle.addEventListener('click', function (event) {
    event.stopPropagation(); // 外クリック扱いにしない
    slideMenu.classList.toggle('open');

    // ボタンの表示切り替え
    if (menuToggle.textContent === '☰') {
      menuToggle.textContent = '×';
    } else {
      menuToggle.textContent = '☰';
    }
  });

  // メニュー内をクリックしても閉じない
  slideMenu.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // ドキュメントの他の場所をクリックしたらメニューを閉じる
  document.addEventListener('click', function () {
    if (slideMenu.classList.contains('open')) {
      slideMenu.classList.remove('open');
      menuToggle.textContent = '☰'; // ボタンも戻す
    }
  });
});



//suraid

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;

let count = 0;
let autoPlayInterval;

function updateListBackground() {
  const activeIndex = count % totalSlides;
  for (let i = 0; i < lists.length; i++) {
    if (i === activeIndex) {
      lists[i].classList.add('active');
    } else {
      lists[i].classList.remove('active');
    }
  }
}

function nextClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count++;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}

function prevClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}

function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${(count % totalSlides) + 1}`);
    count = index;
    slide.classList.add(`slide${(count % totalSlides) + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});

updateListBackground();  // 最初の表示
startAutoPlay();         // 自動再生（1回だけ）



//header

//isyoutyennjya-
const mainImage = document.querySelector('.profileimg');
const thumbImages = document.querySelectorAll('.profiletwoimg');

for(let i = 0; i < thumbImages.length; i++){

  thumbImages[i].addEventListener('mouseover', (event) => {
  mainImage.src = event.target.src;
  mainImage.animate({opacity: [0, 1]}, 500);
  });
};





/*title*/
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.title');

  const animateUp = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const keyframes = {
          opacity: [0, 1],
          transform: ['translateY(-180px)', 'translateY(0)']
        };
        const options = {
          duration: 400,
          delay: index * 0,
          fill: 'forwards'
        };

        entry.target.animate(keyframes, options);
        observer.unobserve(entry.target); // アニメーション後に監視を解除
      }
    });
  };

  const observer = new IntersectionObserver(animateUp, { threshold:0.4 });

  elements.forEach(element => observer.observe(element));
});


/*Profile*/
const profileElements = document.querySelectorAll('.profilediv');

const profileAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(0, 0)'],
      };
      const options = {
        duration: 800,
        delay: index * 200,
        fill: 'forwards',
      };

      // Animate the element when it enters the viewport
      entry.target.animate(keyframes, options);

      // Stop observing the element after it has animated
      observer.unobserve(entry.target);
    }
  });
};
const profileObserver = new IntersectionObserver(profileAnimation, {
  threshold: 0.1, // Adjust the threshold as needed
});

profileElements.forEach(profileElement => {
  profileObserver.observe(profileElement);
});




/*charmtitle*/
const charmtitle = document.querySelectorAll('.charmtitlediv');

const charmtitleAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(500px, 0)', 'translate(0, 0)'],
      };
      const options = {
        duration: 800,
        delay: index * 50,
        fill: 'forwards',
      };

      // Animate the element when it enters the viewport
      entry.target.animate(keyframes, options);

      // Stop observing the element after it has animated
      observer.unobserve(entry.target);
    }
  });
};

const charmtitleObserver = new IntersectionObserver(charmtitleAnimation, {
  threshold: 0.2, // Adjust the threshold as needed
});

charmtitle.forEach(charmimgElement => {
  charmtitleObserver.observe(charmimgElement);
});







/*charmdiv*/
const charmimgElements = document.querySelectorAll('.charmdiv');

const charmimgAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(0, 0)'],
      };
      const options = {
        duration: 800,
        delay: index * 100,
        fill: 'forwards',
      };

      // Animate the element when it enters the viewport
      entry.target.animate(keyframes, options);

      // Stop observing the element after it has animated
      observer.unobserve(entry.target);
    }
  });
};

const charmimgObserver = new IntersectionObserver(charmimgAnimation, {
  threshold: 0.01, // Adjust the threshold as needed
});

charmimgElements.forEach(charmimgElement => {
  charmimgObserver.observe(charmimgElement);
});



/*douga*/
const dougaElements = document.querySelectorAll('.douga');

const dougaAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = [
        { opacity: 0, transform: 'translate(0, 50px)' },
        { opacity: 1, transform: 'translate(0, 0)' }
      ];

      const options = {
        duration: 700,
        delay: index * 300,
        fill: 'both',
      };

      entry.target.animate(keyframes, options);
      observer.unobserve(entry.target);
    }
  });
};

const dougaObserver = new IntersectionObserver(dougaAnimation, {
  threshold: 0.1,
});

dougaElements.forEach(el => {
  // 明示的に初期スタイルを設定（もしCSSで設定しないなら）
  el.style.opacity = '0';
  el.style.transform = 'translate(0, 50px)';
  dougaObserver.observe(el);
});




/*ibent*/

const ibentcard = document.querySelectorAll('.ibent-box'); // .ibent-box に変更

const cardibent = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(8, 0)'], // 下から上にスライド

      };
      const options = {
        duration: 500,
        delay: index * 400, // 各要素のアニメーションに遅延を追加
        fill: 'forwards', // アニメーション終了後も最終状態を維持
        
      };

      // 要素が表示されたらアニメーションを開始
      entry.target.animate(keyframes, options);

      // アニメーションが完了したら監視を解除
      observer.unobserve(entry.target);
    }
  });
};

const ibentcardObserver = new IntersectionObserver(cardibent, {
  threshold: 0.2,
});


ibentcard.forEach(cardElement => {
  ibentcardObserver.observe(cardElement);
});


/*rink*/
const snscard = document.querySelectorAll('.snstw'); // .ibent-box に変更

const cardsns = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(8, 0)'], // 下から上にスライド

      };
      const options = {
        duration: 500,
        delay: index * 400, // 各要素のアニメーションに遅延を追加
        fill: 'forwards', // アニメーション終了後も最終状態を維持
        
      };

      // 要素が表示されたらアニメーションを開始
      entry.target.animate(keyframes, options);

      // アニメーションが完了したら監視を解除
      observer.unobserve(entry.target);
    }
  });
};

// IntersectionObserver のオプション設定
const snscardObserver = new IntersectionObserver(cardsns, {
  threshold: 0.2,
});

snscard.forEach(cardElement => {
  snscardObserver.observe(cardElement);
});


/*access*/
const accessElements = document.querySelectorAll('.accessdiv');

const accessAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(0, 0)'],
      };
      const options = {
        duration: 800,
        delay: index * 200,
        fill: 'forwards',
      };

      // Animate the element when it enters the viewport
      entry.target.animate(keyframes, options);

      // Stop observing the element after it has animated
      observer.unobserve(entry.target);
    }
  });
};

const accessObserver = new IntersectionObserver(accessAnimation, {
  threshold: 0.3, // Adjust the threshold as needed
});

accessElements.forEach(accessElement => {
  accessObserver.observe(accessElement);
});

//kiseki
  const timelineElements = document.querySelectorAll('.timeline');
  timelineElements.forEach((el, i) => el.dataset.index = i);
  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index);
        entry.target.animate({
          opacity: [0, 1],
          transform: ['translateY(50px)', 'translateY(0)']
        }, {
          duration: 800,
          delay: index * 200,
          fill: 'forwards'
        });
        setTimeout(() => observer.unobserve(entry.target), 1000);
      }
    });
  }, { threshold: 0 });
  timelineElements.forEach(el => timelineObserver.observe(el));
window.showDetails = function(itemId) {
  const details = document.getElementById(itemId);
  const isVisible = details.style.display === "block";
  document.querySelectorAll(".details").forEach(d => d.style.display = "none");
  if (!isVisible) {
    details.style.display = "block";
  }
};


/*kousinrireki*/
const kousinrirekiElements = document.querySelectorAll('.kousindiv');

const kousinrirekiAnimation = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        transform: ['translate(0, 50px)', 'translate(0, 0)'],
      };
      const options = {
        duration: 800,
        delay: index * 200,
        fill: 'forwards',
      };

      // Animate the element when it enters the viewport
      entry.target.animate(keyframes, options);

      // Stop observing the element after it has animated
      observer.unobserve(entry.target);
    }
  });
};

const kousinrirekiObserver = new IntersectionObserver(kousinrirekiAnimation, {
  threshold: 0.3, // Adjust the threshold as needed
});

kousinrirekiElements.forEach(kousinrirekiElement => {
  kousinrirekiObserver.observe(kousinrirekiElement);
});

const praibasiTopElements = document.querySelectorAll('.praibasitopdiv');
praibasiTopElements.forEach((el, i) => el.dataset.index = i);
const praibasiTopObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Number(entry.target.dataset.index);
      entry.target.animate({
        opacity: [0, 1],
        transform: ['translateY(50px)', 'translateY(0)']
      }, {
        duration: 800,
        delay: index * 200,
        fill: 'forwards'
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0 });
praibasiTopElements.forEach(el => praibasiTopObserver.observe(el));

