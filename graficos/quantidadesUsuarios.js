// código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0,
       font: {
           color: getCSS('--primary-color'),
           family: getCSS('--font'),
           size: 30
       }
    },
      xaxis: {
      
      },
      yaxis: {
      
      }
  }
  
  // código omitido
  // código omitido

},
xaxis: {
    tickfont {
        color: getCSS('-primary-color'),
        size: 16,
        family: getCSS('--font')
    },
    title: {
        text: 'nome das redes sociais',
        font: {
            color: getCSS('--secondary-color')
        }
    }
},
yaxis: {
        text: 'bilhões de usuários ativos',
        font: {
            color: getCSS('--secondary-color')
        }
    }
}
}

// código omitido
color: getCSS('-primary-color'),
size: 16,
family: getCSS('--font')
import { getCSS, tickConfig } from "./common.js"


// código omitido
// código omitido

},
xaxis: {
    tickfont: tickConfig,
    title: {
        text: 'nome das redes sociais',
        font: {
            color: getCSS('--secondary-color')
        }
    }
},

// código omitido
