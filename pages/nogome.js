class Nogome {
    constructor() {
        super();
        this.config = {
            route: '/nogome',
            name: 'Noinicio',
            index: 0
        }
        this._state = {
            count: 0
        };
        this.palette = this.getConfig('palette')
      
    }


    connectedCallback() {
        this.render();
        this.routing = this.getConfig('routing')
    }

    updateState(newState) {
        this._state = { ...this._state, ...newState };
        this.render();
    }

    render() {
        const styles = `
            
        `
        this.innerHTML = `
            <style> 
             {
              ${styles}
              h1.a { text-aling: center; }
             }
            </style>
            <div> Hola inmundo </div>   
  <body>
  <div class: "a"; >
    <h1> Menú </h1>
  <div class="box">
    <br>Mostachón
    
    <br>Galletas de Brownie
    <br>Galletas craqueladas
    <br>Brownies
    <br>Tiramisú
    <br>Roles de canela
    <br>Pan de zanahória
  </div>
</div>
  
      </body>

        `;

    }
}