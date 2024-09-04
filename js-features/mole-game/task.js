(() => {
    let playing = true;
    let activeHole = 1;
    let deadMole = document.getElementById('dead');
    let lost = document.getElementById('lost');
    const getHole = (index) => document.getElementById(`hole${index}`);
    const deactivateHole = (index) => getHole( index ).className = 'hole';
    const activateHole = (index) => getHole( index ).className = 'hole hole_has-mole';
    const counterPoints = function() {
      for (let index = 1; index <= 9; index++) {
        let hole = getHole(index);
        hole.onclick = function() {         
          if (hole.classList.contains( 'hole_has-mole' )) {
            deadMole.textContent = +deadMole.textContent + 1;;
          } else {
            lost.textContent = +lost.textContent + 1;
          }

          if (deadMole.textContent === '10') {
            alert('Победа!');
            deadMole.textContent = '0';
            lost.textContent = '0';
          } else if (lost.textContent === '5') {
            alert('Вы проиграли!');
            deadMole.textContent = '0';
            lost.textContent = '0';
          }
        }
      }
    }
    
    const next = () => setTimeout(() => {
      counterPoints();
      if ( !playing ) {
        return;
      }
      
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );
    
    next();
  })();