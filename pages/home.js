class Home {
    constructor() {
        super();
        this.config = {
            route: '/',
            name: 'Inicio',
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
                ${styles}
            </style>
                

        `;

    }
}